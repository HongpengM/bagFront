import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		activationCode: '',
		activationState: false,
		trackBag: false
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		activate(state, activationCode){
			state.activationCode = activationCode || false;
			state.activationState = false
		},
		setTracking(state, trackBag){
			state.trackBag = trackBag
		}
    }
})

export default store
