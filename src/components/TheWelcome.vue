<script setup lang="ts">
import { RouterLink } from "vue-router";
import WelcomeItem from "./WelcomeItem.vue";
import ProjectIcon from "./icons/IconProject.vue";
import GithubIcon from "./icons/IconGithub.vue";
import NoteIcon from "./icons/IconNote.vue";
import PhoneIcon from "./icons/IconPhone.vue";
</script>

<template>
  <RouterLink to="/projects">
    <WelcomeItem>
      <template #icon>
        <ProjectIcon />
      </template>
      <template #heading>Projects</template>
    </WelcomeItem>
  </RouterLink>
  <a href="https://github.com/gunhwalee" target="_blank">
    <WelcomeItem>
      <template #icon>
        <GithubIcon />
      </template>
      <template #heading>Github</template>
    </WelcomeItem>
  </a>
  <a href="https://instinctive-bay-8e6.notion.site/Study-b4a75b3242d9490c8dc4ff77597c3454?pvs=4" target="_blank">
    <WelcomeItem>
      <template #icon>
        <NoteIcon />
      </template>
      <template #heading>Study Note</template>
    </WelcomeItem>
  </a>
  <RouterLink to="/contact">
    <WelcomeItem>
      <template #icon>
        <PhoneIcon />
      </template>
      <template #heading>Contact</template>
    </WelcomeItem>
  </RouterLink>
</template>
