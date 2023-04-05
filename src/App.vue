<template>
  <div>
    {{ count }}

    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import { useCounterStore } from "./store";

export default defineComponent({
  name: "App",
  setup() {
    const counterStore = useCounterStore();

    const { count } = storeToRefs(counterStore);

    return {
      count,
      increment: counterStore.increment,
    };
  },
});
</script>

<style scoped></style>
