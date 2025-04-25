<template>
    <v-container
      class="pa-md-12 pa-sm-7 pb-12 custom-background"
      fluid
      elevation="2"
    >
      <v-responsive
        class="text-center mx-auto mb-6 mb-md-12"
        max-width="700"
      >
        <p class="font-weight-medium text-primary">My Work</p>
        <h1 class="text-h4 font-weight-bold mb-4">
          Past Porject
        </h1>
        <p class="text-subtitle-1 text-medium-emphasis">
          Highlights of my technical expertise and innovative solutions—ranging from military systems to advanced, modern applications.
        </p>
      </v-responsive>
  
      <div class="d-flex justify-center mb-6 mx-auto">
        <v-sheet
          class="pa-1"
          rounded="xl"
          elevation="2"
        >
          <v-btn
            class="mr-1 text-none"
            :color="selectedFilter === 'current' ? 'primary' : 'default'"
            rounded
            text="Current"
            variant="flat"
            @click="handleChangeFilter('current')"
          />
          <v-btn
            class="text-none"
            :color="selectedFilter === 'past' ? 'primary' : 'default'"
            rounded
            text="Past"
            variant="flat"
            @click="handleChangeFilter('past')"
          />
        </v-sheet>
      </div>
  
      <v-row
        :justify="filteredProjects.length === 1 ? 'center' : 'space-around'"
        class="flex-md-wrap"
      >
        <v-col
          v-for="(project, i) in filteredProjects"
          :key="i"
          cols="12"
          lg="4"
          md="6"
          sm="12"
        >
          <v-card
            border
            class="pa-6 d-flex flex-column"
            flat
            height="650"
            max-width="450"
            rounded="xl"
            elevation="1"
          >
            <p class="mb-2 font-weight-bold text-h6">{{ project.title }}</p>
            <v-img
              :src="project.image"
              :alt="`${project.title} Project Image`"
              height="150"
              class="mb-4 rounded-lg"
              contain
            />
            <p class="text-subtitle-2 mb-2 text-medium-emphasis">{{ project.subtitle }}</p>
            <p class="text-body-1 mb-4 font-weight-medium">{{ project.duration }}</p>
            <v-list
              class="flex-grow-1 py-0"
              density="compact"
            >
              <v-list-item
                v-for="(highlight, index) in project.highlights"
                :key="index"
                class="px-0 text-body-2"
              >
                <v-icon
                  class="mr-2"
                  :color="project.status === 'current' ? 'primary' : 'default'"
                  :icon="project.icons[index]"
                  size="small"
                />
                {{ highlight }}
              </v-list-item>
            </v-list>
            <v-btn
              v-if="project.link"
              class="mt-auto text-none"
              :color="project.status === 'current' ? 'primary' : 'black'"
              max-height="36"
              text="Visit Site"
              variant="flat"
              width="50%"
              :href="project.link"
              target="_blank"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { shallowRef, computed } from 'vue';
   
  const selectedFilter = shallowRef('current');
  
  const handleChangeFilter = (value) => {
    selectedFilter.value = value;
  };
  
  const projects = [
    {
      title: 'Infrastructure Management Project',
      subtitle: 'Project Manager & Lead Developer',
      duration: 'OCT 2018 - 2019',
      status: 'current',
      highlights: [
        'Leading React Native mobile app development for alerts and newsletters.',
        'Integrating AWS AppSync, DynamoDB, and GraphQL with backend team.',
        'Implementing Stripe payments and AWS Cognito for secure authentication.',
        'Deploying serverless architecture using AWS Serverless Framework.',
      ],
      icons: [
        'mdi-cellphone',
        'mdi-database',
        'mdi-credit-card',
        'mdi-cloud-upload',
      ],
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
    },
    {
      title: 'SaddleFit',
      subtitle: 'Project Manager & Lead IT',
      duration: 'Sep 2023 - Present',
      status: 'current',
      highlights: [
        'Overseeing development of C++ and C# software for 3D scanning technology.',
        'Leading creation of a React-based custom website for saddle fitting and shopping.',
        'Revolutionizing the equine industry with innovative tech solutions.',
        'Ensuring project completion through effective management and IT leadership.',
      ],
      icons: [
        'mdi-code-tags',
        'mdi-web',
        'mdi-horse',
        'mdi-briefcase-check',
      ],
    },
    {
      title: 'MaidDay App',
      subtitle: 'Project Manager & Lead Developer',
      duration: 'March 2025 - Present',
      status: 'current',
      highlights: [
        'Developing a gig-style app with React Native for maid service booking and tracking.',
        'Implementing geo-fencing to connect customers with nearby maids efficiently.',
        'Streamlining the bid process based on personal hiring experience.',
        'Building a comprehensive platform to enhance service delivery for maids.',
      ],
      icons: [
        'mdi-cellphone',
        'mdi-map-marker-radius',
        'mdi-handshake',
        'mdi-broom',
      ],
    },
  ];
  
  const filteredProjects = computed(() => {
    return projects.filter((project) => project.status === selectedFilter.value);
  });
  </script>
  
  <style scoped lang="scss">
  @use '@/styles/settings.scss' as *;
  
  .custom-background {
    background-color: $custom-background-color;
  }
  
  h1 {
    font-family: $font-family-times;
    text-align: center; // Center the title
    margin-bottom: 2rem; // Add more spacing below the title
  }
  
  h2 {
    font-family: $font-family-times;
  }
  
  p {
    font-family: $font-family-open-sans;
  }
  
  .v-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add smooth transition for scaling and shadow */
  }

  .v-card:hover {
    transform: translateY(-10px); /* Move the card slightly upward on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a shadow effect on hover */
  }
  
  .v-img {
    object-fit: contain; /* Ensures the image fits within the container */
    transition: transform 0.3s ease-in-out; /* Add smooth transition for scaling */
  }

  .v-img:hover {
    transform: scale(1.1); /* Slightly enlarge the image on hover */
  }

  .v-card p.text-h6 {
    text-align: center; // Ensure the title of the card is aligned to the left
    margin-bottom: 1rem; // Add spacing below the title
    
  }

  .v-card .v-btn {
    margin: 0 auto; /* Center the button horizontally */
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Add smooth transition for scaling and color */
    width: 100%; /* Make the button responsive */
    max-width: 200px; /* Set a maximum width for the button */
  }

  .v-card .v-btn:hover {
    transform: scale(1.1); /* Slightly enlarge the button on hover */
    background-color: #2196f3; /* Use a lighter color directly */
  }
  </style>