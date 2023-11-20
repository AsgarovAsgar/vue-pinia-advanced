import { watch } from 'vue'
import { defineStore } from 'pinia'
import { useGeolocation } from '@vueuse/core'

export const useGeolocationStore = defineStore('geolocationStore', () => {
  const { coords } = useGeolocation()

  // watch for coords to load or update, get a new location
  watch(() => coords.value, (newValue) => {
    if(newValue) {
      getLocation(coords.value.latitude, coords.value.longitude)
    }
  })

  async function getLocation() {
    // fetch location data from Google Maps API
  }

})