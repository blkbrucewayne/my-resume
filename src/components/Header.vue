<template>
    <v-layout>
      <v-main>
        <v-img
          cover
          height="200"
          src="@/assets/high-quality-desktop-wallpaper.jpg"
        />
  
        <v-container fluid>
          <v-breadcrumbs :items="items">
            <template #prepend>
            </template>
          </v-breadcrumbs>
  
          <div
            class="d-flex flex-column align-center position-relative"
            style="margin-top: -128px"
          >
            <v-avatar class="mb-4" image="@/assets/dsc_3462.jpeg" size="170" />
  
            <h1 class="text-h4 font-weight-bold">Ralpheal A. Jenkins</h1>
  
            <div class="text-subtitle-1 text-medium-emphasis mb-4">Technical Project Manager</div>
  
            <div class="d-flex ga-2 align-center">
              <v-btn color="primary" rounded="pill" variant="flat">Email</v-btn>
  
              <v-btn rounded="pill" variant="outlined">Resume</v-btn>
  

            </div>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  </script>
  