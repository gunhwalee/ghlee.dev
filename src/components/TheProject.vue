<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <h1 class="title">Projects</h1>
  <ProjectItem>
    <template #heading>Spy Cat</template>

    <p class="description">Spy Cat은 사용자의 서버에서 발생한 트래픽과 에러 정보를 모니터링해주는 웹 애플리케이션입니다.</p>
    <nav>
      <a href="">Github</a>
    </nav>
  </ProjectItem>

  <ProjectItem>
    <template #heading>Reactree</template>

    <p class="description">Reactree는 React 프로젝트의 컴포넌트 계층구조를 트리 형태로 시각화해주는 Electron 기반의 데스크톱 앱 애플리케이션입니다.</p>
    <nav>
      <a href="">Github</a>
    </nav>
  </ProjectItem>
</template>

<style scoped>
.title {
  color: #f2f2f2;
  text-align: center;
  margin-top: 3rem;
}

.description {
  text-align: center;
}

@media (min-width: 1024px) {
  .description {
    text-align: left;
  }

  .title {
    margin-top: 0;
    text-align: left;
  }
}
</style>
