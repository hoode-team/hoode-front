/* * @author: Qiuchen * @since: 2024-09-03 * Header.vue */
<template>
  <header class="blog-header">
    <a-flex justify="space-between" align="center">
      <nav class="navbar">
        <div class="logo">
          <router-link to="/">Hoode</router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
        </ul>
      </nav>
      <a-button @click="goToAdmin">
        {{ isLoggedIn ? '进入后台管理系统' : '请先登录' }}
      </a-button>
    </a-flex>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const goToAdmin = () => {
  router.push(userStore.isLoggedIn ? '/admin' : '/login')
}
const isLoggedIn = computed(() => {
  return userStore.isLoggedIn // 假设 userStore.isLoggedIn 是响应式的
})
</script>

<style scoped>
.blog-header {
  background-color: #333;
  padding: 10px 0;
  color: white;
  padding: 20px 200px;
}

.navbar {
  display: flex;
  align-items: center;
}

.logo a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-bottom: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
