import { defineStore } from "pinia";
import { ref } from "vue";
// import productsData from "@/data/products.json";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);

  const fill = async () => {
    products.value = (await import("@/data/products.json")).default;
  };

  return { products, fill };
});
