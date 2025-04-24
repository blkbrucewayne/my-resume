<template>
  <v-container class="pa-sm-9 pa-md-12" fluid>
    <div class="text-center mb-md-12 mb-6">
      <div class="d-flex justify-center align-center mb-6">
        <!-- PMP Logo without Frame -->
        <v-avatar
          class="avatar-custom mx-2"
          color="primary"
          rounded
          size="120"
          elevation="8"
        >
          <img 
            src="@/assets/CISSP.jpeg" 
            alt="PMP Logo" 
            class="w-100 h-100"
          />
        </v-avatar>
        <!-- Security+ Logo without Frame -->
        <v-avatar
          class="avatar-custom mx-2"
          color="primary"
          rounded
          size="120"
          elevation="8"
        >
          <img 
            src="@/assets/cloud.png" 
            alt="Security+ Logo" 
            class="w-100 h-100"
          />
        </v-avatar>
        
      </div>
      <p class="font-weight-medium text-primary">What Sets Me Apart</p>
      <h2 class="text-h5 font-weight-bold mb-2 text-sm-h4">Core Professional Strengths</h2>
      <v-divider class="mx-auto" length="48" thickness="4" />
    </div>

    <!-- Strengths Section -->
    <v-row justify="center">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="4"
        class="d-flex"
      >
        <v-responsive
          class="mx-auto text-left"
          max-width="400"
          width="100%"
        >
          <v-list-item class="px-0 align-start">
            <template #prepend>
              <v-icon 
                :icon="item.icon" 
                size="36" 
                color="primary" 
                class="mr-4 opacity-75"
              />
            </template>
            <template #title>
              <span class="text-subtitle-1 font-weight-semibold">{{ item.title }}</span>
            </template>
            <template #subtitle>
              <span class="text-caption text-primary font-weight-medium">{{ item.subtitle }}</span>
            </template>
            <p class="text-body-2 text-medium-emphasis mt-2">
              {{ item.content }}
            </p>
          </v-list-item>
          <v-divider class="mt-4 mb-6" color="primary" length="48" thickness="2" />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const items = [
    {
      title: 'Network & Cybersecurity Expertise',
      subtitle: 'Certified Information Systems Security Professional (CISSP)',
      content: 'I am a Certified Information Systems Security Professional (CISSP) with a strong foundation in cybersecurity principles and practices. My expertise includes risk management, security architecture, and incident response, ensuring robust protection for sensitive data and systems.',
      icon: 'mdi-shield-key'
    },
    {
      title: 'Porject Management',
      subtitle: 'Trained in Agile and PMP Methodologies',
      content: 'I am trained in Agile and PMP methodologies, adept at leading cross-functional teams to deliver projects on time and within budget. My focus is on effective communication, stakeholder engagement, and continuous improvement to drive project success.',
      icon: 'mdi-account-check'
    },
    {
      title: 'On-Premise and Cloud Solutions',
      subtitle: 'Cloud + Certified',
      content: 'I am Cloud+ certified, with hands-on experience in designing and implementing on-premise and cloud solutions. My skills include cloud architecture, migration strategies, and hybrid cloud deployments, ensuring seamless integration and scalability.',
      icon: 'mdi-cloud'
    },
  ]
</script>

<style scoped lang="scss">
@use '@/styles/settings.scss' as *;

.custom-background {
  background-color: $custom-background-color;
}

h1 {
  font-family: $font-family-times;
}

h2 {
  font-family: $font-family-times;
}

p {
  font-family: $font-family-open-sans;
}

/* Frame and elevation styling for avatars */
.avatar-custom {
  border: 2px solid #ffffff; /* White border around logos */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow for elevation */
  transition: transform 0.3s ease-in-out;
}

.avatar-custom:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

/* Responsive and professional card layout for features */
.v-list-item {
  transition: all 0.3s ease-in-out;
}

.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.05); /* Light hover effect */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}
</style>
