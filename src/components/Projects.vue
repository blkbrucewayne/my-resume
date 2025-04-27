<template>
  <v-container class="pa-md-12 pa-sm-7 pb-12 custom-background" fluid elevation="2">
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
        <v-container class="pa-6">
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
</template>

<script setup>
const projects = [
  {
    title: 'Infrastructure Management Project',
    subtitle: 'Director of IT Operations and Strategy',
    duration: 'OCT 2018 - 2020',
    status: 'current',
    highlights: [
      'Ensured 100% uptime of mission-critical communication systems.',
      'Maintained secure, resilient infrastructure supporting 70,000 global clients.',
      'Oversaw strict compliance with operational and cybersecurity standards.',
      'Deployed server architecture on VMware Hypervisor.',
    ],
    icons: [
      'mdi-cellphone',
      'mdi-database',
      'mdi-credit-card',
      'mdi-cloud-upload',
    ],
    image: 'path/to/image1.jpg',
  },
  {
    title: 'PMP Audio Study Guide',
    subtitle: 'Mobile App for PMP Exam Prep',
    duration: 'Past Project (Completed) 2023',
    status: 'past',
    highlights: [
      'Developed with Flutter for cross-platform use.',
      'Features audio-visual lessons and mindset coaching.',
      'Published on Apple and Google Play stores.',
      'Sunset 2023 on both platforms.',
    ],
    icons: [
      'mdi-dev-to',
      'mdi-headphones',
      'mdi-store',
      'mdi-archive',
    ],
    image: 'path/to/image2.jpg',
  },
  {
    title: 'Ask Chief App',
    subtitle: 'Global Tool for U.S. Army Soldiers',
    duration: 'Past Project (Completed) 2021 - 2022',
    status: 'past',
    highlights: [
      'Crafted a fine-tuned LLM with Flutter for soldier support, pre-dating ChatGPT.',
      'Enabled global access to AI-driven insights for soldiers.',
      'Deployed scalable infrastructure to support worldwide use.',
      'Demonstrated early leadership in mobile AI innovation.',
    ],
    icons: [
      'mdi-robot',
      'mdi-earth',
      'mdi-server',
      'mdi-lightbulb-on',
    ],
    image: 'path/to/image3.jpg',
  },
  {
    title: 'Crypto Secure Vault',
    subtitle: 'Cybersecurity Business Solution',
    duration: 'Nov 2017 - Jun 2019',
    status: 'past',
    highlights: [
      'Founded a business focused on data breach prevention.',
      'Utilized AWS for secure infrastructure.',
      'Provided consultations using Python and network expertise.',
      'Protected client assets with a "everyone deserves protection" ethos.',
    ],
    icons: [
      'mdi-briefcase',
      'mdi-cloud-lock',
      'mdi-code-braces',
      'mdi-shield-check',
    ],
    image: 'path/to/image4.jpg',
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
      'mdi-horse',
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
  background-color: grey;
}

.v-carousel-item {
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>