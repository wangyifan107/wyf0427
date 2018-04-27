import axios from 'axios'
export default {
	state:{
		//默认数据swiperinfo传给
		swiperInfo:[]
	},
	mutations:{
		setData(state,payload){
			//这里的payload就是你想要的数据
			state.swiperInfo = payload
		}
	},
	actions:{
		getHomeData(context){
			axios.get('/api/home/index.json?city=北京')
				.then((response) => {
					console.log(response)
					//action处理异步操作 通过commit将mutations里数据进行改变
					context.commit("setData",response.data.data.swiperInfo)
				})
		}
	},
	getters:{
		
	}
}
