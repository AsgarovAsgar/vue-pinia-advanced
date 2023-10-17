import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthUserStore = defineStore('authUserStore', () => {
  const username = ref('Asgar')

  return {
    username,
  }
})