<template>
    <view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="content">首页</block></cu-custom>
		<view class="mainBody">
			<view v-if="hasLogin" class="hello">
			    <view class="title">
			        您好 {{userName}}，您已成功登录。
			    </view>
			    <view class="ul">
			        <view>这是 uni-app 带登录模板的示例App首页。</view>
			        <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
			    </view>
				<uni-list v-for=" (item, index) in listItems" :key="index">
					<uni-list-item :title="item.title" :disabled="item.disabled" :show-badge="item['show-badge']"
					@click="goPage(item.url)">
					</uni-list-item>
				</uni-list>
			</view>
			<view v-if="!hasLogin" class="hello">
			    <view class="title">
			        您好 游客。
			    </view>
			    <view class="ul">
			        <view>这是 uni-app 带登录模板的示例App首页。</view>
			        <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
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
    import {
        mapState
    } from 'vuex'
	import {uniGrid} from '@dcloudio/uni-ui'
	import {uniGridItem} from '@dcloudio/uni-ui'
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	
    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		components: {
			uniGrid,
			uniGridItem,
			uniList,
			uniListItem
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
				
			redirectPage(e) {
				let url = e.url ? e.url: e;
				console.log(e)
				console.log(url)
				uni.redirectTo({
					url: url
				})
				return false
			}
		},
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		data() {
			return {
				listItems:  [
					{
						title:"爱包小提示",
						disabled:false, 
						'show-badge':"true",
						'badge-text':"12",
						url:'../bagTips/bagTips'
					}
				]
			}
		},
		
    }
</script>

<style>
	
	.box {
		margin: 20upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
	
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 25px;
    }
	
	.uni-card {
		box-shadow: none;
	}

    .ul {
        font-size: 15px;
        color: #8f8f94;
        margin-top: 25px;
    }

    .ul>view {
        line-height: 25px;
    }
</style>
