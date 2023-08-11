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

    <a href="https://spycat.netlify.app/" target="_blank" rel="noopener">Spy Cat</a>
    은 사용자의 서버에서 발생한 트래픽과 에러 정보를 모니터링해주는 웹 애플리케이션입니다.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://github.com/gunhwalee">
        <GithubIcon />
      </a>
    </template>
    <template #heading>Github</template>

    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Reactree</a>
    는 React 프로젝트의 컴포넌트 계층구조를 트리 형태로 시각화해주는 Electron 기반의 데스크톱 앱 애플리케이션입니다.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://instinctive-bay-8e6.notion.site/Study-b4a75b3242d9490c8dc4ff77597c3454?pvs=4">
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
