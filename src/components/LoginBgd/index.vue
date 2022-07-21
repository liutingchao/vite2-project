<template>
  	<div class="login-container pull-height">
				<div class="page-left">
					<div class="page-title">
						<img src="../../assets/login_logo_new.png" class="logo" />
						<h2 class="login-title">历下区综合信息服务平台</h2>
					</div>
					<img
						src="../../assets/login_element_new.png"
						class="element-img"
					/>
				</div>
        <slot></slot>
				<div class="foot">
					版权所有：上海天与养老服务有限公司
				</div>
  	</div>
</template>
<script>

	export default {
		name:'LoginBgd',
	}
</script>

<style scoped lang="scss">
.login-container {
  	position: relative;
		width: 100vw;
		height: 100vh;
}
.login-container::before {
  	z-index: -999;
  	content: "";
  	position: absolute;
  	left: 0;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	background-image: url("../../assets/login_bg_new.jpg");
  	background-size: cover;
}
.loginGrid{
	margin-top: 200px;
}

.page-left {
    position: absolute;
    left: 144px;
    top: 44%;
    transform: translateY(-50%);
    .page-title {
      display: flex;
      align-items: center;
      .logo {
        height: 52px;
        margin-top: 8px;
      }
      .login-title {
        margin-left: 16px;
        font-size: 48px;
        color: #fff;
        font-weight: normal;
      }
    }
    .element-img {
      width: 800px;
      margin-top: 100px;
    }
}

.foot {
  position: fixed;
  width: 100%;
  bottom: 50px;
  padding-top: 10px;
  font-size: 18px;
  color: #fff;
  text-align: center;
}

</style>
