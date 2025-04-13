<template>
  <v-container class="pa-md-12 pa-sm-6 pe-md-0" fluid>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <!-- Project Management Expertise with dynamic font size -->
        <p
          class="font-weight-medium text-primary"
          :style="{ fontSize: textSize }"
        >
          Project Management Expertise
        </p>
        <!-- Bridging the Gap Between Teams with dynamic font size -->
        <p
          class="mt-2 text-h5 font-weight-bold text-sm-h4 custom-title"
          :style="{ fontSize: textSize }"
        >
          Bridging the Gap Between Teams
        </p>
        <!-- Description with dynamic font size -->
        <p
          class="my-4 text-body-1 text-medium-emphasis"
          :style="{ fontSize: textSize }"
        >
          As a PMP and Security+ certified project manager with a Top Secret Clearance, I leverage full-stack development expertise cultivated over the past 10 years outside the Army, alongside 20 years of military service. By translating these skills into impactful Army projects, I deliver solutions on time and to specification, fostering seamless collaboration between developers and stakeholders to achieve mission success.
        </p>

        <!-- Features List with dynamic font size -->
        <v-list-item
          v-for="(item, i) in features"
          :key="i"
          class="px-0 py-2"
          :subtitle="item.subtitle"
        >
          <template #title>
            <p
              class="text-body-2 font-weight-bold pb-2"
              :style="{ fontSize: textSize }"
            >
              <v-icon
                class="mr-2"
                color="primary"
                :icon="item.icon"
                size="small"
              />
              {{ item.title }}
            </p>
          </template>
        </v-list-item>
      </v-col>

      <!-- Background Image -->
      <v-col
        class="d-flex align-center"
        cols="12"
        md="6"
        offset-md="1"
      >
        <v-img
          :src="backgroundImage"
          alt="Professional Background"
          cover
          max-height="500"
          max-width="500"
          position="right"
          :rounded="$vuetify.display.smAndDown ? true : 's-lg'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';


const theme = useTheme();

// Define features highlighting your capabilities
const features = [
  {
    title: 'University of Louisville',
    subtitle: 'CompTIA instructor teaching over 200 students in the last 5 years.',
    icon: 'mdi-school-outline',
  },
  {
    title: 'Certified Project Leadership',
    subtitle: 'PMP certification ensures disciplined project management, delivering projects on time and within budget.',
    icon: 'mdi-account-tie',
  },
  {
    title: '20 Years of Military Service',
    subtitle: 'Extensive experience in high-pressure environments, ensuring effective communication and collaboration. Held multiple ranks throughout my career.',
    icon: 'mdi-tank',
  },
  {
    title: 'Full-Stack Development Skills',
    subtitle: 'Proficient in front-end and back-end technologies for over 10 years, enabling seamless communication with development teams.',
    icon: 'mdi-code-tags',
  },
  {
    title: 'Security Expertise',
    subtitle: 'Security+ certification ensures secure project practices, safeguarding data and systems.',
    icon: 'mdi-shield-lock-outline',
  },
  {
    title: 'Agile Methodologies',
    subtitle: 'Experience with Agile practices, ensuring flexibility and adaptability in project management.',
    icon: 'mdi-swap-horizontal',
  },
];

// Define a dynamic prop for text size
const props = defineProps({
  textSize: {
    type: String,
    default: '16px', // Default text size (adjust this as needed)
  },
});
</script>

<style scoped lang="scss">
@use '../styles/settings.scss' as *;

.custom-title {
  font-family: $font-family-times;
  text-align: center;
  margin-bottom: 2rem;
}

h1, h2, p {
  font-family: $font-family-open-sans;
  font-size: inherit; /* Allow the font size to be inherited from the dynamic prop */
  margin: 0; /* Ensure no additional margins are applied */
}
</style>
