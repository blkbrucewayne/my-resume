<!-- src/components/Testimonials.vue -->
<template>
  <v-container class="pa-6 pa-md-12" fluid>
    <v-responsive class="mx-auto" max-width="1000">
      <h2 class="text-h5 mb-6">Testimonials</h2>
      <v-carousel
        v-if="testimonials.length > 0"
        cycle
        :interval="5000"
        hide-delimiters
        height="auto"
        class="mb-6 custom-carousel"
        show-arrows
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
      >
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
          transition="slide-x-transition"
          reverse-transition="slide-x-reverse-transition"
        >
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <p class="text-sm-h5 text-subtitle-1 text-medium-emphasis mt-2 mb-4 testimonial-content">
                "{{ testimonial.content }}"
              </p>
              <v-list-item
                class="px-0 justify-center"
                :subtitle="testimonial.title"
                :title="testimonial.name"
              />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-alert v-else type="info">
        No testimonials yet. Be the first to submit one!
      </v-alert>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const testimonials = ref([])
const isPaused = ref(false)

const pauseCarousel = () => {
  isPaused.value = true
}

const resumeCarousel = () => {
  isPaused.value = false
}

onMounted(async () => {
  try {
    const response = await fetch('https://jveww91jxg.execute-api.us-east-1.amazonaws.com/dev/testimonials')
    if (response.ok) {
      const data = await response.json()
      testimonials.value = Array.isArray(data) ? data : []
      console.log('Fetched testimonials:', testimonials.value)
    } else {
      console.error('Failed to fetch testimonials:', response.status, response.statusText)
      testimonials.value = []
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    testimonials.value = []
  }
})
</script>

<style scoped>
/* Ensure text wraps nicely and doesn’t overflow */
.text-sm-h5,
.text-subtitle-1 {
  word-break: break-word;
  padding: 0 16px;
}

/* Center v-list-item content */
.v-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Adjust carousel item for vertical centering and spacing */
.v-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px; /* Ensures space for content */
  flex-direction: column;
}

/* Ensure the carousel has enough space at the bottom */
.custom-carousel {
  position: relative;
  padding-bottom: 20px; /* Space for content */
}

/* Ensure the testimonial content has enough margin to avoid overlap */
.testimonial-content {
  margin-bottom: 24px; /* Add space below the testimonial text */
}

/* Ensure arrows are hidden while keeping transitions */
.custom-carousel >>> .v-carousel__controls {
  display: none;
}
</style>