<template>
  <v-container class="pa-md-12 custom-background">
    <v-card class="mx-auto pa-6" max-width="900" rounded="lg">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(event, index) in events"
          :key="index"
          :class="index % 2 === 0 ? 'text-start' : 'text-end'"
          :color="event.color"
          dot-color="primary"
          fill-dot
          :icon="event.icon"
        >
          <div>
            <h3>{{ event.title }}</h3>
            <em>{{ event.date }}</em>
            <p>{{ event.description }}</p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script setup>
// Import the background image
const backgroundImage = new URL('../assets/56228.jpg', import.meta.url).href;

const events = [
  {
    title: 'SkillBridge Begins',
    date: 'November 11, 2025',
    description: 'Start of my 90-day SkillBridge program to gain skills and explore job opportunities.',
    color: 'blue',
    icon: 'mdi-briefcase',
  },
  {
    title: 'Terminal Leave Starts',
    date: 'February 9, 2026',
    description: 'Begin 60 days of terminal leave, wrapping up military service and starting job applications.',
    color: 'green',
    icon: 'mdi-calendar-check',
  },
  {
    title: 'Permissive TDY Begins',
    date: 'April 10, 2026',
    description: '20 days of permissive TDY to job hunt and finalize my transition plans.',
    color: 'purple',
    icon: 'mdi-home-search',
  },
  {
    title: 'Retirement & Job Opportunities',
    date: 'April 30, 2026',
    description: 'Officially retired! Ready to start my new career with skills gained from SkillBridge.',
    color: 'red',
    icon: 'mdi-party-popper',
  },
];
</script>

<style scoped lang="scss">
@use '@/styles/settings.scss' as *;

// Apply the background image to the container
.custom-background {
  background-image: url(v-bind('backgroundImage'));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  // Add a dark overlay for readability
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  // Ensure the card is above the overlay
  .v-card {
    position: relative;
    z-index: 1;
    background-color: #000000;
  }
}

// Apply font to h1 (not used in this component)
h1 {
  font-family: $font-family-times;
}

// Apply font to h2 (not used in this component)
h2 {
  font-family: $font-family-times;
}

// Apply font to h3 (used for event titles)
h3 {
  font-family: $font-family-times;
}

// Apply font to all <p> elements
p {
  font-family: $font-family-open-sans;
}

// Apply font to <em> elements (used for dates)
em {
  font-family: $font-family-open-sans;
}
</style>