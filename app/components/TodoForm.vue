<template>
  <form @submit.prevent="submit" class="flex gap-2 mb-4">
    <input
      v-model="title"
      class="border p-2 flex-1"
      placeholder="พิมพ์งาน"
    />
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
      เพิ่ม
    </button>
  </form>
</template>

<script setup>
const title = ref("")

const emit = defineEmits(["add"])

const submit = () => {
  if (!title.value.trim()) return
  emit("add", title.value)
  title.value = ""
}
</script>
