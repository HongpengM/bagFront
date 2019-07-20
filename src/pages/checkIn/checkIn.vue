<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">每日签到</block></cu-custom>
		<view class="mainBody">
				
			<view class="text text-checkIn">
				您已签到
			</view>
			<view class="text-center text-counter">
				{{counter}}
			</view>
			<view class="text text-checkIn">
				次
			</view>
			<view class="padding">
				<button class="cu-btn round align-center lg" style="width: 30%;"></button>
				<button class="cu-btn bg-red round align-center lg" style="width: 40%;" @click="setCounter">点我签到</button>
				<button class="cu-btn round align-center lg" style="width: 30%;"></button>
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
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			setCounter() {
				this.counter += 1
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
		}
	}
</script>

<style>
.cu-btn {
	margin: auto;
}
.text-checkIn {
	font-size: 3em;
	color: #555555;
}
.text-counter {
	font-size: 5em;
	color: #ff0000;
}
</style>
