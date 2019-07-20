<template>
    <view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="content">我的</block></cu-custom>
        <view class="mainBody">
			<view v-if="hasLogin">
				<view class="flex flex-wrap">
					<view class="flex-sub  padding-sm margin-xs radius">
						<view class="flex">
							<view class=" cu-avatar xl round margin-left" style="background-image:url('/static/img/userIcon.png');"></view>
							<view class="flex-sub userName">{{ userName }}</view>
						</view>
						
					</view>
				</view>
				<uni-list v-for="(listItem, index) in gridItems" :key="index">
					<uni-list-item :title="listItem.text" 
					:thumb="listItem.thumb ? listItem.thumb : ''"
					:show-extra-icon="listItem['show-extra-icon'] ? listItem['show-extra-icon']:false"
					:extra-icon="listItem['extra-icon'] ? listItem['extra-icon'] : {}"
					@click="goPage({url:listItem.page})"
					>
					</uni-list-item>
				</uni-list>				
			</view>
			
			<view>
				<cu-custom v-if="!hasLogin" bgColor="bg-gradual-blue" :isBack="true">
					<block slot="backText">返回</block>
					<block slot="content">登陆</block>
				</cu-custom>
			</view>
			<view class="btn-row">
			    <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			    <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
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
        mapState,
        mapMutations
    } from 'vuex'
	import {uniGrid, uniGridItem, uniList, uniListItem} from '@dcloudio/uni-ui'
	
    export default {
		components: {
			uniGrid, uniGridItem, uniList, uniListItem
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin', 'userName'])
        },
		
        methods: {
            ...mapMutations(['logout']),
			goPage(e) {
				let url = e.url ? e.url: e;
				console.log(e)
				console.log(url)
				uni.navigateTo({
					url: url
				})
				return false
			},
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        },
		data() {
			return {
				gridItems: [{
						url: '/static/img/sinaweibo.png',
						text: '开启定位',
						page: '../locateSwitch/locateSwitch'
					},
					{
						url: '/static/img/weixin.png',
						text: '激活账户',
						page: '../activationCode/activationCode'
					},
					{
						url: '/static/img/qq.png',
						text: '足迹故事',
						page: '../story/story'
					},
					{
						url: '/static/img/sinaweibo.png',
						text: '找回爱包',
						page: '../findMyBag/findMyBag'
					},
					
					]
			}
		},
    }
</script>

<style>
	.btn-row {
		height: 50upx;
	}
	.uni-card {
		box-shadow: none;
	}
	.grid-wrap {
		margin-left: auto;
		margin-right: auto;
	}
	.image{
		max-width: 100%;
		height: auto;
		object-fit: cover
	}
	
	.userName {
		margin-left: 100px;
		margin-top: 30px;
		font-size: 5em;
		color: #007AFF;
	}
</style>
