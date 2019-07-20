<template>
	<view class="content">
		<view class="mainBody">
			<view class="uni-padding-wrap uni-common-mt">
				<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">输入激活码</block></cu-custom>
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
						<view class="title">请输入激活码</view>
						<input class="uni-input" name="input" placeholder="Activation Code" />
					</view>
					<view class="uni-btn-v">
						<button formType="submit" >Submit</button>
						<button type="default" formType="reset" >Reset</button>
					</view>
				</form>
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
				pickerHidden: true,
				chosen: ''
			}
		},
		methods: {
			pickerConfirm: function(e) {
				this.pickerHidden = true
				this.chosen = e.target.value
			},
			pickerCancel: function(e) {
				this.pickerHidden = true
			},
			pickerShow: function(e) {
				this.pickerHidden = false
			},
			formSubmit: function(e) {
				console.log(e)
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				
			},
			formReset: function(e) {
				console.log('清空数据')
				this.chosen = ''
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
	.uni-form-item .title {
		padding: 20upx 0;
	}
</style>
