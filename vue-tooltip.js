Vue.component('vue-tooltip',{
	template:`
	<div class="vue-tooltip">
		<!-- 图片hover抖动 -->
		<h1>图片hover抖动</h1>

		<div class="img-tooltip">
			<img src="../images/jingDongChips.png" />
		</div>
		<!-- 图片hover抖动 end -->
		<!-- 图片重底部跑倒上面 -->
		<h1>图片重底部跑倒上面</h1>
		<transition name="bootom" :duration="{enter: 1500}" appear>
			<div class="bannerRight">
				<img src="../images/guize_one.png">
			</div>
		</transition>
		<!-- 图片重底部跑倒上面  end-->
		<!-- table切换 -->
		<h1>table切换</h1>

		<div class="tabbox">
			<ul>
				<li @click="tabClick(index)" v-for="(item,index) in tab">
				<i :class="index == tabNun ? 'activeLine' : ' ' "></i>
				{{item}}
				</li>
			</ul>
			<div class="tabcon">
				<transition name="left" :duration="{enter: 1500}" appear>
				<div :key="index" v-if=" index == tabNun" v-for="(item,index) in tabcon">
				{{item.name}}
				</div>
				</transition>
			</div>
		</div>
		<!-- table切换   end -->
	</div>
		`,
	props: ['component'],
	data: function() {
		return {
			//tab导航
			tab:["导航1","导航2","导航3"],
			// tab切换内容
			tabcon:[{
				name:"导航1内容"
			},{
				name:"导航2内容"
			},{
				name:"导航3内容"
			}],
			//tab切换下标
			tabNun:0
			
			

		}
	},
	mounted: function() {	
		
	},
	watch: {
	
	},
	destroyed(){
       
    },
	methods: {
		//tab切换单击事件		
		tabClick(index){
			this.tabNun = index;
		}	
			
		
			
		
	}
});
