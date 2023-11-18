<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";

import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from '@/stores/CartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
productStore.fill()

// const addToCart = (count, product) => {
//   count = parseInt(count)
//   cartStore.$patch(state => {
//     for (let i = 0; i < count; i++) {
//     state.items.push(product)
//   }
//   })
// }

// subscribing to actions
const unsubscribe = cartStore.$onAction(({name, args, after}) => {
  if(name !== 'addItems') return
  // a shared variable for this specific action call
  // this will trigger before an action on `store` is executed
  console.log('args', args)

  after(() => console.log(`${name} action completed.`))
})

</script>

<template>
  <div class="container">
    <TheHeader />
    <div>
      <button style="font-size: 12px; border: 1px solid lightgray; padding: 4px 12px; margin-bottom: 4px; border-radius: 4px;" @click="unsubscribe">Unsubscribe from cart store</button>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products" 
        :key="product.name" 
        :product="product" 
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
