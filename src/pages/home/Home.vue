<template>
	<div>
		<index-header />
		<index-swiper :swiperInfo="swiperInfo"/>
		<div>{{$store.state.name}}</div>
	</div>
</template>

<script>
import header from './components/Header.vue';
import axios  from 'axios';
import swiper from './components/Swiper.vue';

export default {
  
  components: {
 	"index-header":header,
 	"index-swiper":swiper
  },
  mounted(){
  	this.getHomeData();		
  },
  computed:{
  	swiperInfo(){
  		return this.$store.state.home.swiperInfo
  	}
  },
  methods:{
	  	getHomeData(){
			this.$store.dispatch("getHomeData")
	  	}
//	  	handleGetDataSucc(response){
//	  		const data = response.data.data;
//	  		this.$store.commit("setData",data.swiperInfo)
//	  		//this.swiperInfo = data.swiperInfo
//	  	},
//	  	handleGetDataError(err){
//	  		console.log(err)
//	  	}
  }
}
</script>

<style scoped>

</style>
