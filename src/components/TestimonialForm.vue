<!-- src/components/TestimonialForm.vue -->
<template>
  <v-container
    class="pa-6 pa-md-12"
    fluid
    style="background-image: url('@/assets/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products.jpg'); background-size: cover; background-position: center;"
  >
    <v-responsive class="mx-auto" max-width="1000">
      <!-- Introduction Section -->
      <v-card class="mb-6" elevation="2">
        <v-card-title class="text-h5">Looking for Referrals</v-card-title>
        <v-card-text>
          If you’ve worked with me—past or present—I’d greatly appreciate your insights! Please share your thoughts on my capabilities as a project manager, technical expertise, and ability to think outside the box. Your feedback helps showcase my strengths and impact. Thank you for taking a moment to contribute!
        </v-card-text>
      </v-card>

      <!-- Testimonial Form -->
      <v-form @submit.prevent="submitTestimonial" v-model="valid">
        <v-row>
          <v-col cols="12" md="6">
            <v-tooltip location="top">
              <template #activator="{ props }">
                <v-text-field
                  v-model="testimonial.name"
                  label="Name"
                  required
                  :rules="nameRules"
                  placeholder="e.g., John Doe"
                  v-bind="props"
                ></v-text-field>
              </template>
              <span>Enter your full name (e.g., "Jane Smith"). This helps us identify who’s sharing their feedback.</span>
            </v-tooltip>
          </v-col>
          <v-col cols="12" md="6">
            <v-tooltip location="top">
              <template #activator="{ props }">
                <v-text-field
                  v-model="testimonial.title"
                  label="Title/Position"
                  required
                  :rules="titleRules"
                  placeholder="e.g., Software Engineer"
                  v-bind="props"
                ></v-text-field>
              </template>
              <span>Your job title or role (e.g., "Project Manager"). This adds context to your testimonial.</span>
            </v-tooltip>
          </v-col>
          <v-col cols="12">
            <v-tooltip location="top">
              <template #activator="{ props }">
                <v-textarea
                  v-model="testimonial.content"
                  label="Testimonial"
                  required
                  :rules="contentRules"
                  rows="4"
                  placeholder="e.g., [Your Name]’s project management kept us on track, and their innovative tech solutions were a game-changer!"
                  v-bind="props"
                ></v-textarea>
              </template>
              <span>Share your experience (20-500 characters). Highlight [Your Name]’s project management, tech skills, or creative problem-solving.</span>
            </v-tooltip>
            <v-select
              v-model="selectedTemplate"
              :items="['Clear', ...testimonialTemplates.map(t => t.text)]"
              label="Example Templates"
              placeholder="Select a template to insert"
              @update:modelValue="insertTemplate"
              class="mt-4"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              type="submit"
              :disabled="!valid || submitting"
              :loading="submitting"
            >
              Submit Testimonial
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const submitting = ref(false)
const testimonial = ref({
  name: '',
  title: '',
  content: '',
})

const nameRules = [
  v => !!v || 'Name is required',
  v => v.length <= 50 || 'Name must be less than 50 characters'
]
const titleRules = [
  v => !!v || 'Title is required',
  v => v.length <= 50 || 'Title must be less than 50 characters'
]
const contentRules = [
  v => !!v || 'Testimonial content is required',
  v => v.length >= 20 || 'Testimonial must be at least 20 characters',
  v => v.length <= 500 || 'Testimonial must be less than 500 characters'
]

const submitTestimonial = async () => {
  if (valid.value) {
    submitting.value = true
    console.log('Submitting payload:', JSON.stringify(testimonial.value, null, 2))
    try {
      const response = await fetch('https://59g9zt5bzf.execute-api.us-east-1.amazonaws.com/dev/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonial.value),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('API response:', result)
        alert('Testimonial submitted successfully!')
        resetForm()
      } else {
        const errorData = await response.json()
        console.error('Submission error:', errorData)
        alert(`Failed to submit testimonial: ${errorData.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      alert('An error occurred while submitting')
    } finally {
      submitting.value = false
    }
  }
}

const resetForm = () => {
  testimonial.value = { name: '', title: '', content: '' }
  selectedTemplate.value = null
}

const testimonialTemplates = [
  {
    text: "Our IT project thrived with Tim Carrender’s network expertise, delivering scalable systems on time."
  },
  {
    text: "Tim Carrender ensured our project’s security with top-notch cybersecurity skills, meeting every deadline."
  },
  {
    text: "Workflows improved drastically under Tim Carrender’s coordination, yielding reliable network solutions."
  },
  {
    text: "With Tim Carrender optimizing our cloud setup, our project hit goals with efficient systems."
  },
  {
    text: "Major blockers vanished thanks to Tim Carrender’s quick problem-solving, keeping us on track."
  },
  {
    text: "Tim Carrender’s skill in system rollouts aligned our teams for a flawless project launch."
  },
  {
    text: "Complex IT integrations? Tim Carrender handled them smoothly, delivering within scope."
  },
  {
    text: "Our tech project soared because Tim Carrender led with clarity and strong oversight."
  },
  {
    text: "Thanks to Tim Carrender’s leadership, our software rollout was seamless and on budget."
  },
  {
    text: "Tim Carrender drove our project forward, fixing tech issues with creative solutions."
  },
  {
    text: "Our network upgrades succeeded with Tim Carrender’s expertise at the helm."
  },
  {
    text: "Tim Carrender’s planning kept our cybersecurity tight, ensuring project success."
  },
  {
    text: "Stakeholders stayed aligned because Tim Carrender managed our IT project so well."
  },
  {
    text: "Tim Carrender’s focus on efficiency turned our cloud project into a win."
  },
  {
    text: "Under pressure, Tim Carrender resolved issues fast, saving our project timeline."
  },
  {
    text: "Our system migration was smooth, thanks to Tim Carrender’s technical know-how."
  },
  {
    text: "Tim Carrender’s team coordination made our network overhaul a total success."
  },
  {
    text: "With Tim Carrender guiding us, our tech integration finished ahead of schedule."
  },
  {
    text: "Project risks dropped with Tim Carrender’s smart cybersecurity strategies in place."
  },
  {
    text: "Tim Carrender’s oversight ensured our IT goals were met with precision."
  }
]

const selectedTemplate = ref(null)

const insertTemplate = (value) => {
  if (value === 'Clear') {
    testimonial.value.content = ''
    selectedTemplate.value = null
  } else if (value) {
    testimonial.value.content = value
    selectedTemplate.value = value
  }
}
</script>

<style scoped>
.v-card {
  background-color: rgba(96, 241, 0, 0.8);
  backdrop-filter: blur(10px);
}
</style>