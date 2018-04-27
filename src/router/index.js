import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import A from '@/pages/list/A'
import B from '@/pages/list/B'

Vue.use(Router)

export default new Router({
	routes: [
    		{
      		path: '/',
      		name: 'Home',
      		component: Home
    		},{
    			path:'/list',
    			name:'list',
    			component:List,
    			children:[{
    				path:'a',
    				component:A
    			},{
    				path:'b',
    				component:B
    			}]
		}
	]
})
