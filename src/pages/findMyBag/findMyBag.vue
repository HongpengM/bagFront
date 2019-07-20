<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">定位我的包包</block></cu-custom>
		
		<view class="mainBody">
			<map></map>
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
				
			}
		},
		methods: {
			goPage(e) {
				let url = e.url ? e.url: e;
				console.log(e)
				console.log(url)
				uni.navigateTo({
					url: url
				})
				return false
			},
		}
	}
</script>

<style>

</style>
