Vue.component('nav-scroll',{
	template:`
	<div class="ccy-neuhive">
		<div class="header">
			我是卖手机的程序猿
		</div>

		<div ref="nav" class="nav" :class="{navFix:isNavFixed}">
			<ul>
				<li @click="navclick(index)"  v-for="(item,index) in navItem">
					{{item}}
					<i :class="{activeLine:index == navNum}"></i>
				</li>
			</ul>
		</div>
		<div class="container">
			<div v-for="item in navCon" class="floor onec">
					{{item}}		
			</div>			
		</div>
	</div>
		`,
	props: ['component'],
	data: function() {
		return {
			navNum:0,
			isNavFixed:false,			
			navItem:["一楼","二楼","三楼","四楼","五楼"],
			navCon:["一楼","二楼","三楼","四楼","五楼"]
			
			

		}
	},
	mounted: function() {	
		window.addEventListener('scroll', this.navScroll,true);
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
				if(scrollTop >= item.offsetTop -200){
					this.navNum = index;
				}
			});			
			if(scrollTop >= 415){
				this.isNavFixed = true;
			}else{
				this.isNavFixed = false;
			}
			
		},	
		navclick(index){			
			let floor = document.querySelectorAll(".floor");			
			this.navNum = index;
			let ofs = floor[index].offsetTop;
			//滚动到指定位置---方案一
			window.scrollTo(0,ofs)
			//滚动到指定位置---方案二
// 			floor[index].scrollIntoView(false);			
		}
			
		
			
		
	}
});
