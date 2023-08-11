<script setup lang="ts">
import { RouterLink } from "vue-router";
import WelcomeItem from "./WelcomeItem.vue";
import ProjectIcon from "./icons/IconProject.vue";
import GithubIcon from "./icons/IconGithub.vue";
import NoteIcon from "./icons/IconNote.vue";
import PhoneIcon from "./icons/IconPhone.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <RouterLink to="/projects">
        <ProjectIcon />
      </RouterLink>
    </template>
    <template #heading>Projects</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://github.com/gunhwalee" target="_blank">
        <GithubIcon />
      </a>
    </template>
    <template #heading>Github</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://instinctive-bay-8e6.notion.site/Study-b4a75b3242d9490c8dc4ff77597c3454?pvs=4" target="_blank">
        <NoteIcon />
      </a>
    </template>
    <template #heading>Study Note</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RouterLink to="/contact">
        <PhoneIcon />
      </RouterLink>
    </template>
    <template #heading>Contact</template>
  </WelcomeItem>
</template>
