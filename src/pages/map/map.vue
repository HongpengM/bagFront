<template>
	<view class="cover-content">

		<map></map>
		<cover-view class="cover-view">简单的cover-view</cover-view>
		<cover-image class="cover-image" src="/static/uni.png"></cover-image>

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
map {
		width: 750upx;
		height: 750upx;
	}

	.cover-content {
		position: relative;
	}

	.cover-view {
		position: absolute;
		left: 5px;
		top: 5px;
		width: 375upx;
		text-align: center;
		background-color: #DDDDDD;
	}

	.cover-image {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 96px;
		height: 96px;
	}
</style>
