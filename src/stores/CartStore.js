import { defineStore } from "pinia";
import { ref, toRaw, computed } from "vue";
import { groupBy } from "lodash";

export const useCartStore = defineStore("cartStore", () => {
  const items = ref([]);

  const count = computed(() => items.value.length)
  const isEmpty = computed(() => count.value === 0)

  const grouped = computed(() => {
    const grouped = groupBy(items.value, item => item.name)
    const sorted = Object.keys(grouped).sort()
    let inOrder = {}
    sorted.forEach(key => (inOrder[key] = grouped[key]))
    return inOrder
  })

  const groupCount = computed(() => (name) => grouped.value[name].length)
  const total = computed(() => items.value.reduce((acc, item) => acc + item.price, 0))

  const addItems = (count, item) => {
    count = parseInt(count)
    for (let i = 0; i < count; i++) {
      // items.value.push(item)
      items.value.push(structuredClone(toRaw(item)))
    }
  }

  const setItemCount = (item, count) => {
    clearItem(item.name)
    addItems(count, item)
  }

  const clearItem = name => {
    items.value = items.value.filter(item => item.name !== name)
  }

  const resetStore = () => items.value = []


  return {
    items,
    count,
    isEmpty,
    grouped,
    groupCount,
    total,
    addItems,
    setItemCount,
    clearItem,
    resetStore
  };
});
