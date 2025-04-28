<template>
  <div class="github-page">
    <div class="frame top-frame">
      <img class="github-logo" src="@/assets/Github_logo_PNG8.png" alt="GitHub Logo" />
    </div>
    <div class="frame bottom-frame">
      <img class="github-activity" src="@/assets/githubactivity.png" alt="GitHub Activity" />
    </div>
    <div class="animated-text" v-if="inView">
      <p>Explore my GitHub activity and projects!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Github",
  data() {
    return {
      inView: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView = true;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.$el);
  },
};
</script>

<style scoped>
.github-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #ffffff;
}

.frame {
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
}

.top-frame {
  margin-bottom: 40px;
}

.bottom-frame {
  margin-top: 40px;
}

.github-logo {
  width: 200px;
  height: auto;
}

.github-activity {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
}

.github-activity:hover {
  transform: scale(1.05);
}

.animated-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animated-text p {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

.animated-text.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
