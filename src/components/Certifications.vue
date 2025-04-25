<template>
  <v-container class="pa-md-12 pa-sm-6 pe-md-0" fluid>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <!-- Project Management Expertise with dynamic font size -->
        <p
          class="font-weight-medium text-primary"
          :style="{ fontSize: textSize }"
        >
          Cybersecurity Professional
        </p>
        <!-- Bridging the Gap Between Teams with dynamic font size -->
        <p
          class="mt-2 text-h5 font-weight-bold text-sm-h4 custom-title"
          :style="{ fontSize: textSize }"
        >
        Mission-Focused. Cloud-Smart. Security-Driven
        </p>
        <!-- Description with dynamic font size -->
        <p
          class="my-4 text-body-1 text-medium-emphasis"
          :style="{ fontSize: textSize }"
        >
        I am an accomplished systems engineer with a proven track record in the military industry, complemented by strategic leadership roles such as Project Manager, Operations Manager of the Communications Planning Division, Deputy of Data Systems Management, and Data Systems Engineer/Deputy Chief Information Officer. My technical expertise spans VMware Server management, Local Area Network (LAN) administration, and Help Desk implementation. I am also proficient in Information Security, holding both a CISSP and CompTIA Cloud+ certification, as well as an active TS/SCI Clearance. These credentials reflect my ability to secure, design, and manage resilient enterprise systems in cloud and hybrid environments. I hold a Master of Science in Cyber Security from Webster University, and my broad experience and advanced education have equipped me to deliver high-impact solutions in complex and secure computing environments.
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
    title: 'Webster University',
    subtitle: 'Masters of Science in Cybersecurity.',
    icon: 'mdi-school-outline',
  },
  {
    title: 'Campbell University',
    subtitle: 'Bachelor of Science in Information Systems Management.',
    icon: 'mdi-school-outline',
  },
  {
    title: '21 Years of Military Service',
    subtitle: 'Proven success in high-pressure environments, ensuring clear communication, effective collaboration, and mission success. Held multiple ranks and executive-level leadership roles throughout my career.',
    icon: 'mdi-tank',
  },
  {
    title: 'On-Premise Server Management',
    subtitle: 'Proficient in managing VMware and on-premise server environments, ensuring optimal performance, scalability, and security for enterprise systems.',
    icon: 'mdi-server'
  },
  {
    title: 'Cloud Deployment Skills',
    subtitle: 'I hold a CompTIA Cloud+ certification, demonstrating my expertise in cloud infrastructure and services. Additionally, I have received training in both Microsoft Azure and AWS environments, equipping me with a well-rounded understanding of multi-cloud operations and deployment strategies.',
    icon: 'mdi-cloud-tags',
  },
  {
    title: 'Security Expertise',
    subtitle: 'The CISSP certification validates expertise in implementing secure practices, protecting both data and systems throughout the project lifecycle.',
    icon: 'mdi-shield-lock-outline',
  },
  {
    title: 'Project Management Skills',
    subtitle: 'Formally trained in project management and experienced with Agile methodologies, ensuring adaptable and responsive project execution in dynamic environments.',
    icon: 'mdi-swap-horizontal',
  },
  {
    title: 'Network Operations Management',
    subtitle: 'Proficient in managing and optimizing network operations, ensuring seamless connectivity and performance across systems.',
    icon: 'mdi-network'
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
