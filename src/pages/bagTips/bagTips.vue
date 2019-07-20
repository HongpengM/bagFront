<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">爱包小提示</block></cu-custom>
		<view class="mainBody">
			<uni-collapse v-for="(collpaseItem, index) in collapseItems" :key="index" @change="change">
				<uni-collapse-item v-for="(listItem, index2) in collpaseItem.listItems" :key="index2"
					:title="collpaseItem.title ? collpaseItem.title : 'Title'"
					:open="collpaseItem.open ? collpaseItem.open : true"
					:disabled="collpaseItem.disabled ? collpaseItem.disabled : false"
				>
					<uni-list>
						<uni-list-item :title="listItem.title" 
						:thumb="listItem.thumb ? listItem.thumb : ''"
						:show-extra-icon="listItem['show-extra-icon'] ? listItem['show-extra-icon']:false"
						:extra-icon="listItem['extra-icon'] ? listItem['extra-icon'] : {}"
						>
						</uni-list-item>
					</uni-list>
					
				</uni-collapse-item>
				<uni-collapse-item  title="标题文字">
					<uni-list>
						<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
						<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
						<uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
					</uni-list>
				</uni-collapse-item>
				<uni-collapse-item title="默认开启" open="true">
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
				</uni-collapse-item>
				<uni-collapse-item title="禁用状态" disabled="true">
					<view style="padding: 30upx;"> 禁用状态 </view>
				</uni-collapse-item>
			</uni-collapse>
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
	import {uniList,uniListItem,uniCollapse, uniCollapseItem} from "@dcloudio/uni-ui"
	
	export default {
		components: {uniList,uniListItem,uniCollapse, uniCollapseItem},
		data() {
			return {
				collapseItems :  [
					{
						title:'包包护理',
						listItems: [
							{
								title: '清洗事项'
							}
						]
					}
				]
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
