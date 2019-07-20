<template>
	<view class="content"> 
	<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">开启定位</block></cu-custom>
		<view class="mainBody">
			<view class="cu-bar margin-top bg-white">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>开启包包追踪
				</view>
				<view class="action">
		
					<switch @change="locateSwitch" :class="shadow ? 'checked' : ''" color="#39B54A"></switch>
				</view>
			</view>
		</view>
	
		<view class="cu-bar tabbar margin-bottom-xl bg-white">
			<view class="action text-green">
				<view class="cuIcon-homefill" @click="goPage('../main/main')"></view> 首页
			</view>
		
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-green shadow" @click="goPage('../checkIn/checkIn')"></button>
				签到
			</view>
		
			<view class="action text-gray" @click="goPage({url:'../user/user'})">
				<view class="cuIcon-my">
					<view class="cu-tag badge" ></view>
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	import {uniList} from '@dcloudio/uni-ui'
	import {uniListItem} from '@dcloudio/uni-ui'
	
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				shadow: false
			}
		},
		methods: {
			locateSwitch: function (e) {
				console.log('Button status: ', e.target.value)
				this.shadow = e.target.value
			},
			goPage(e) {
				let url = e.url ? e.url: e;
				console.log(e)
				console.log(url)
				uni.navigateTo({
					url: url
				})
				return false
			},
		},
	}
</script>

<style>

</style>
