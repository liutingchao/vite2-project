<template>
	<div class="home">
		<div class="header">
      <el-icon><Operation @click="handleCollapse" /></el-icon>
			<div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
          <div class="userInfo">
            <span style="color: #fff;">admin</span>
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
			</div>
		</div>
		<div class="hkmain">
			<div class="leftBar" :class="{'collapseLeftBar':isCollapse}">
				<el-menu router :default-active="$route.path" :unique-opened='true' background-color="#304156" text-color="#EBEEF5" active-text-color="#409EFF" :collapse="isCollapse">
					<template v-for='(item,index) in menuList[0].children' :key='index'>
            <el-sub-menu :index="index+''" v-if="item.children && item.children.length">
              <template #title>
                <el-icon><component :is="item.meta?.icon"></component> </el-icon>
                <span v-text="item.meta?.title" style="display: inline-block;text-align: center;width: 60%;"></span>
              </template>
              <el-menu-item v-for='(child,index) in item.children' :key='index' :index="item.path+'/'+child.path" v-text='child.meta.title'></el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :key='index' :index="item.path" v-text='item.meta.title'></el-menu-item>
          </template>
				</el-menu>
			</div>
			<div class="rightBar">
				<div class="mainContent">
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <component
                  :is="Component"
                  :key="$route.fullPath"
                />
              </keep-alive>
            </transition>
          </router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				isCollapse: false,
				menuList: this.$router.options.routes.filter(item => item.name ==='home')
			}
		},
		computed: {
			menuItemKey() {
				return this.$route.fullPath
			},
		},
		methods: {
			handleCollapse() {
				this.isCollapse = !this.isCollapse;
			},
			logout() {
				this.$confirm('确认退出吗?', '提示', {}).then(() => {
					sessionStorage.clear();
					this.$router.replace({
						path: '/login'
					});
				}).catch(() => {});
			}
		},
		created() {
			console.log(this.menuList);
		}
	}
</script>
<style lang="scss" scoped>
	.home {
		height: calc(100vh);
		overflow-x: hidden;
		overflow-y: auto;
	}
	
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		background: #242f42;
		padding: 0 15px;
		i {
			font-size: 24px;
			color: #fff;
			cursor: pointer;
		}
	}
	
	.userInfo {
		display: flex;
		align-items: center;
    cursor: pointer;
		
    .el-icon--right{
      font-size: 16px;
    }
	}
	
	.hkmain {
		height: calc(100vh - 60px);
		display: flex;
		.leftBar {
			flex: 0 0 160px;
			height: 100%;
			background: #304156;
			width: 160px;
			transition: all .2s linear;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.rightBar {
			background: #42B983;
			flex: 1;
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			transition: all .2s linear;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
	
	.el-menu {
		border: none;
	}
	
	.collapseLeftBar {
		flex: 0 0 64px !important;
		width: 64px !important;
	}
	
	.mainContent {
		height: calc(100vh - 60px);
		box-sizing: border-box;
		padding: 10px;
		background: #eef0f3;
	}
	
	.fade-transform-leave-active,
	.fade-transform-enter-active {
		transition: all .5s;
	}
	
	.fade-transform-enter {
		opacity: 0;
		transform: translateX(-30px);
	}
	
	.fade-transform-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	
	::-webkit-scrollbar {
		width: 2px;
	}
	
	::-webkit-scrollbar-track {
		background-color: #bee1eb;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: #00aff0;
		border-radius: 3px;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background-color: #9c3
	}
	
	::-webkit-scrollbar-thumb:active {
		background-color: #00aff0
	}
</style>
<style>
	.el-submenu__title i {
		color: #EBEEF5 !important;
	}
	
	.el-menu-item,
	.el-menu--popup {
		text-align: center !important;
		min-width: 160px !important;
	}
</style>