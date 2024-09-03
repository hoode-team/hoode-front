import { defineStore } from 'pinia'
import type { UserState, UserInfo } from './type'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLoggedIn: false
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state }
    }
  },
  actions: {
    login(userInfo: UserInfo) {
      // 这里模拟登录操作，实际项目中可能是发送请求到服务器
      console.log(userInfo)
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})
