import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)

  const doubleCount = computed(() => {
    console.log("Evaluated")

    return count.value * 2
  })

  const increment = () => {
    count.value = count.value + 1
  }

  return { count, doubleCount, increment }
})
