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
          If we’ve worked together in any capacity, I’d be grateful for your perspective. I’m seeking feedback on my project management skills, technical expertise, and innovative thinking. Your insights help highlight the value and impact I bring to a team. Thank you for taking the time to share your thoughts!
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
    text: "Ralpheal Jenkins’s cybersecurity expertise safeguarded our systems, ensuring project success."
  },
  {
    text: "Thanks to Ralpheal Jenkins’s leadership, our software rollout was secure and seamless."
  },
  {
    text: "Ralpheal Jenkins drove our project forward, resolving security vulnerabilities with innovative solutions."
  },
  {
    text: "Our network upgrades were fortified with Ralpheal Jenkins’s cybersecurity expertise."
  },
  {
    text: "Ralpheal Jenkins’s planning ensured our systems remained secure and compliant."
  },
  {
    text: "Stakeholders trusted our project’s security because of Ralpheal Jenkins’s meticulous management."
  },
  {
    text: "Ralpheal Jenkins’s focus on cybersecurity turned our cloud project into a secure success."
  },
  {
    text: "Under pressure, Ralpheal Jenkins mitigated security risks, keeping our project on track."
  },
  {
    text: "Our system migration was secure and smooth, thanks to Ralpheal Jenkins’s technical expertise."
  },
  {
    text: "Ralpheal Jenkins’s coordination ensured our network overhaul met the highest security standards."
  },
  {
    text: "With Ralpheal Jenkins guiding us, our tech integration was secure and ahead of schedule."
  },
  {
    text: "Project risks were minimized with Ralpheal Jenkins’s strategic cybersecurity measures."
  },
  {
    text: "Ralpheal Jenkins’s oversight ensured our IT goals were met with robust security protocols."
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