<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Header -->
      <header class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-slate-800 mb-2">รายการสิ่งที่ต้องทำ</h1>
        <p class="text-slate-600">จัดการงานของคุณอย่างเป็นระบบ</p>
      </header>

      <!-- Todo Components -->
      <TodoForm @add="addTask" />
      <TodoStats :count="tasks.length" :date="getCurrentDate()" />
      <TodoList :items="tasks" @remove="removeTask" />
      
      
    </div>
  </div>

  
</template>

<script setup lang="ts">
const title = ref('')

const { data, refresh } = useFetch('/api/tasks')

const tasks = computed(() => data.value ?? [])

const addTask = async (title: string) => {
  if (!title.trim()) return

  await $fetch('/api/tasks', {
    method: 'POST',
    body: { title },
  })

  await refresh()
}

const removeTask = async (id: number) => {
  await $fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
  })
  await refresh()
}

const getCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date().toLocaleDateString('th-TH', options)
}
</script>