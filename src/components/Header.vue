<template>
    <v-layout>
      <v-main>
        <v-img
          cover
          height="400"
          src="@/assets/26961.jpg"
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
            <v-avatar class="mb-4" image="@/assets/dsc_3462.jpeg" size="300" />
  
            <h1 class="text-h4 font-weight-bold">Ralpheal A. Jenkins</h1>
  
            <div class="text-subtitle-1 text-medium-emphasis mb-4">Cloud Solutions Architect</div>
  
            <div class="d-flex ga-2 align-center">
              <v-btn color="primary" rounded="pill" variant="flat" href="mailto:ralphealajenkins@gmail.com">Email</v-btn>
              <v-btn color="primary" rounded="pill" variant="flat" href="https://www.linkedin.com/in/ralphealjenkins" target="_blank">LinkedIn</v-btn>
            </div>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  </script>
