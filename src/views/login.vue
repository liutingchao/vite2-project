<template>
	<login-bgd>
		<el-card class="login-content">
			<template #header>
				<div style="text-align: center">登 录</div>
			</template>
			<el-form size="large" :model="loginInfo" ref='loginInfo' label-width="0" :rules="loginInfoRules" @keydown.native.enter='handleLogin' style="margin-buttom: -40px;">
				<el-form-item prop='userName'>
					<el-input type="text" v-model="loginInfo.userName" auto-complete="off" placeholder="请输入手机号">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
				</el-form-item>
				<el-form-item prop='password'>
					<el-input show-password v-model="loginInfo.password" auto-complete="off" placeholder="6-16位密码">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
				</el-form-item>
				<el-form-item>
					<el-button :loading="loading" type="primary" class="w100" @click="handleLogin">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</login-bgd>
</template>
<script>
	import LoginBgd from '@/components/LoginBgd/index.vue'

	class LoginInfo {
		constructor() {
			this.userName = null;
			this.password = null;
			this.captcha = null;
		}
		reset() {
			this.constructor();
		}
	};

	export default {
		components: {
			LoginBgd
		},
		data() {
			return {
				loading: false,
				loginInfo: new LoginInfo(),
				loginInfoRules: {
					userName: [{
						validator: function(rule, value, callback) {
							if(value) {
								if(/^1[3|5|9|8|7]\d{9}$/.test(value) == false && value != 'admin') {
									callback(new Error("请输入正确的手机号"))
								} else {
									callback();
								}
							} else {
								callback(new Error("请输入手机号"))
							}
						},
						trigger: 'blur'
					}],
					password: [{
						validator: function(rule, value, callback) {
							if(value) {
								if(/^[a-z0-9]{6,16}$/.test(value) == false) {
									callback(new Error("请输入正确的密码"))
								} else {
									callback();
								}
							} else {
								callback(new Error("请输入密码"))
							}
						},
						trigger: 'blur'
					}],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			handleLogin() {
				this.$refs.loginInfo.validate((valid) => {
					if(valid) {
						if(this.loginInfo.password=='123456'){
							sessionStorage.setItem("userId", 1);
							this.$router.replace({path: '/'});
						}else{
							this.$message.warning('正确密码为123456');
							return false;
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
  .login-content{
		position: absolute;
		top: 50%;
    right: 200px;
    transform: translateY(-50%);
    width: 360px;
  }
	
	.w100{
		width: 100%;
	}

  .el-input__icon{
    font-size: 18px;
  }
</style>