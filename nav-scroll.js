Vue.component('nav-scroll',{
	template:`
	<div class="ccy-neuhive">
		<div class="header">
			<!-- 我是卖手机的程序猿 -->
		</div>

		<div ref="nav" class="nav" :class="{navFix:isNavFixed}">
			<ul>
				<li @click="navclick(index)"  v-for="(item,index) in navTitle">
					{{item}}
					<i :class="{activeLine:index == navNum}"></i>
				</li>
			</ul>
		</div>
		<div class="container">
			<div v-for="item in navContext" class="floor onec">
					{{item}}		
			</div>			
		</div>
	</div>
		`,
	props: {
		navTitle:{
			type:Array,
			default:["一楼","二楼","三楼","四楼","五楼"],
			required: true
		},
		navContext:{
			type:Array,
			default:["一楼","二楼","三楼","四楼","五楼"],
			required: true
		},
		navScrollTop:{
			type:Number
		}
	},
	data: function() {
		return {
			navNum:0,
			isNavFixed:false		
			
			
			

		}
	},
	computed: {
		navScrollTop:function (param) {
			//导航的高度
			let navHei = this.$refs.nav.offsetHeight;
			// 导航距离顶部的距离
			let navOffsetTop = this.$refs.nav.offsetTop;
			return navOffsetTop + navHei;
			
			

		  }
	},
	mounted: function() {	
		window.addEventListener('scroll', this.navScroll,true);
		
		
			console.log(this.navScrollTop)
			console.log(this.navContext)
	},
	watch: {
	
	},
	destroyed(){
        window.removeEventListener('scroll', this.navScroll);
    },
	methods: {		
		navScroll(e){
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let floor = document.querySelectorAll(".floor");
			var headers = document.querySelector(".header").offsetTop;
			floor.forEach((item,index) =>{
				if(scrollTop >= item.offsetTop){
					this.navNum = index;
				}
			});			
			if(scrollTop >= this.navScrollTop){
				this.isNavFixed = true;
			}else{
				this.isNavFixed = false;
			}
			
		},	
		navclick(index){			
			let floor = document.querySelectorAll(".floor");
			let navHei = this.$refs.nav.offsetHeight;			
			let offsetTop = floor[index].offsetTop;
			let lastDomIndex = floor.length -1;
			this.navNum = index;
			window.scrollTo(0,offsetTop)
			if(index == 0){
				window.scrollTo(0,0);
				return false;
			}
			
			
			//滚动到指定位置---方案一
			//滚动到指定位置---方案二
// 			floor[index].scrollIntoView(false);			
		}
			
		
			
		
	}
});
