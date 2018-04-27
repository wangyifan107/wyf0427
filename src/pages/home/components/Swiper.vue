<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
    		<router-link :to="item.link">
	    		<div class="swiper-img-con">
	    			<img class="swiper-img" :src="item.imgUrl" />
	    		</div>
    		</router-link>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>

	import {swiper, swiperSlide} from 'vue-awesome-swiper'

	export default {
	props:['swiperInfo'],
    name: 'carrousel',
	data() {
      	return {
        		swiperOption: {
        		autoplay:true,
        		direction:'horizontal',
        		autoHeight:true,
        		pagination:{
    				el: '.swiper-pagination',
 			},
        			observerParents:true
        		}
      	}
   },
   components:{
   		swiper,
   		swiperSlide
   }
}
</script>
<style scoped>
	.swiper-img-con{
		width:100%;
		height:0;
		padding-bottom:65.63%
	}
	.swiper-img{
		width:100%
	}
</style>