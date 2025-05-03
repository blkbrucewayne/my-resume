<template>
  <v-container
    class="pa-md-12 pa-sm-7 pb-12 custom-background text-center"
    style="padding: 20px; border-radius: 15px;"
    fluid
    elevation="2"
  >
    <v-container max-width="900px">
      <v-responsive class="text-center mx-auto mb-6 mb-md-12" max-width="700">
        <p class="font-weight-medium text-primary">My Work</p>
        <h1 class="text-h4 font-weight-bold mb-4">Past Projects</h1>
        <p class="text-subtitle-1 text-medium-emphasis">
          Highlights of my technical expertise and innovative solutions—ranging from military systems to advanced, modern applications.
        </p>
      </v-responsive>

      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
          :src="project.image"
          cover
        >
          <v-container class="pa-6 text-center">
            <h2 class="text-h5 font-weight-bold mb-2">{{ project.title }}</h2>
            <p class="text-subtitle-2 mb-2 text-medium-emphasis">{{ project.subtitle }}</p>
            <p class="text-body-1 mb-4 font-weight-medium">{{ project.duration }}</p>
            <v-list class="py-0" density="compact">
              <v-list-item
                v-for="(highlight, index) in project.highlights"
                :key="index"
                class="px-0 text-body-2"
              >
                <v-icon class="mr-2" :icon="project.icons[index]" size="small" />
                {{ highlight }}
              </v-list-item>
            </v-list>
            <v-btn
              v-if="project.link"
              class="mt-4 text-none"
              :color="project.status === 'current' ? 'primary' : 'black'"
              text="Visit Site"
              variant="flat"
              :href="project.link"
              target="_blank"
            />
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-container>
</template>

<script setup>
const projects = [
  {
    title: 'Infrastructure Management Project',
    subtitle: 'Director of IT Operations and Strategy',
    duration: '2018 - 2020',
    status: 'current',
    highlights: [
      'Ensured 100% uptime of mission-critical communication systems.',
      'Maintained secure, resilient infrastructure supporting 70,000 global clients.',
      'Oversaw strict compliance with operational and cybersecurity standards.',
      'Deployed server architecture on VMware Hypervisor.',
    ],
    icons: [
      'mdi-server',
      'mdi-security',
      'mdi-network',
      'mdi-cloud-upload',
    ],
    image: 'path/to/image1.jpg',
  },
  {
    title: 'Enterprise Training initiative',
    subtitle: 'Data Systems Engineer',
    duration: '2017-2018',
    status: 'past',
    highlights: [
      'Designed and implemented IT training programs for over 120 personnel.',
      'This resulted in a 35% boost in workforce technical capabilities',
      'and a 25% increase in team productivity.',
    ],
    icons: [
      'mdi-school',
      'mdi-account-multiple',
      'mdi-',
      'mdi-',
    ],
    image: 'path/to/image2.jpg',
  },
  {
    title: 'Agile Transformation for IT Deployments',
    subtitle: 'Director of IT Future Operations and Strategy',
    duration: 'Sep 2023 - Present',
    status: 'current',
    highlights: [
      'Accelerated deployment timelines by 25%.',
      'Improved responsiveness to operational requirements.',
      'Enhanced project delivery through Agile methodologies.',
      'Ensuring project completion through effective management and IT leadership.',
    ],
    icons: [
      'mdi-code-tags',
      'mdi-web',
      'mdi-developer-board',
      'mdi-briefcase-check',
    ],
    image: 'path/to/image5.jpg',
  },
  {
    title: 'Strategic Communications Modernization with 204 Telecom Teams',
    subtitle: 'Director of IT Operations and Strategy',
    duration: 'March 2025 - Present',
    status: 'current',
    highlights: [
      'Optimized performance of 204 telecommunications asset teams.',
      'Improved service delivery to a 70,000-user global client base.',
      'Streamlined communications across 50+ agencies and units.',
    ],
    icons: [
      'mdi-cellphone',
      'mdi-map-marker-radius',
      'mdi-handshake',
      'mdi-broom',
    ],
    image: 'path/to/image6.jpg',
  },
];
</script>

<style scoped lang="scss">
.custom-background {
  background-color: rgb(0, 0, 0, 0.15);
}

.v-carousel-item {
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>