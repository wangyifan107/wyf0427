<template>
	<header class="header">
		<a class="header-left"><</a>
		<router-link to="/list">
			<div class="header-title">输入城市/景点/游玩主题</div>
		</router-link>
		<div class="header-right" @click="handleclick">北京		
		</div>
	</header>
</template>

<script>
export default {
	methods:{
		handleclick:function(){
			//this.$router.push('/list')
			//name能加parmas path不能
			this.$router.push({
				name:'list',
				params:{
					id:'a'
				}
//				query:{
//					name:"b"
//				}
			})
		}
	}
}
</script>

<style scoped>
	.header {
		position: relative;
		width:100%;
		height: .88rem;
		background: aqua;
		text-align:center;
		color:#FFFFFF
	}
	.header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color:#fff;
		font-size: .36rem;
		text-align: left;
	}	
	.header-title{
		position: absolute;
		top:.14rem;
		left: .8rem;
		right:1.28rem;
		line-height: .6rem;
		border-radius: .06rem;
		background: #fff;
		color: #ccc;
	}
	.header-right {
		float: right;
		width:1.28rem;
		line-height: .88rem;
	}
</style>