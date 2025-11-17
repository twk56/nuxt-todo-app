<template>
  <div class="space-y-3">
    <!-- Empty State -->
    <div
      v-if="items.length === 0"
      class="bg-white rounded-xl shadow-md p-12 text-center border border-slate-200"
    >
      <div class="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-4">
        <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-slate-700 mb-2">ยังไม่มีงานในรายการ</h3>
      <p class="text-slate-500">เริ่มต้นเพิ่มงานแรกของคุณได้เลย</p>
    </div>

    <!-- Task Items -->
    <div
      v-for="(task, index) in items"
      :key="task.id"
      class="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200"
    >
      <div class="p-5 flex items-center gap-4">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm">
            <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <p class="text-base font-medium text-slate-800 break-words">{{ task.title }}</p>
        </div>

        <div class="flex-shrink-0 flex items-center gap-2">
          <button
            @click="$emit('remove', task.id)"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all duration-200 opacity-0 group-hover:opacity-100"
            title="ลบงาน"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
