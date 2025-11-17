<template>
  <div class="bg-white rounded-xl shadow-md p-5 mb-6 border border-slate-200">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div>
          <p class="text-sm text-slate-600 font-medium">งานทั้งหมด</p>
          <p class="text-2xl font-bold text-slate-800">{{ count }}</p>
        </div>
      </div>

      <div class="text-right">
        <p class="text-xs text-slate-500 font-medium">วันที่</p>
        <p class="text-sm text-slate-700 font-semibold">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  count: Number,
  date: String
})
</script>
