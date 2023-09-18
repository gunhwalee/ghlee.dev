<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <h1 class="title">Projects</h1>
  <ProjectItem>
    <template #heading>Algolendar</template>

    <p class="description">
      Algolendar는 알고리즘 문제를 푼 기록을 연동해서 관리하는 달력형
      애플리케이션입니다. Google Calendar와 Leetcode를 연동해 스케줄을 관리하고
      기록을 공유할 수 있습니다. 현재 작업 진행중입니다.
    </p>
    <p>TypeScript, Next.js</p>
    <nav>
      <a href="https://github.com/gunhwalee/algolendar" target="_blank"
        >Github</a
      >
    </nav>
  </ProjectItem>

  <ProjectItem>
    <template #heading>Spy Cat</template>

    <p class="description">
      Spy Cat은 사용자의 서버에서 발생한 트래픽과 에러 정보를 모니터링해주는 웹
      애플리케이션입니다. 사용자의 서버에서 발생한 트래픽 에러 정보를 차트UI로
      확인할 수 있으며, 특정 에러에 대한 상세 정보를 제공합니다.
    </p>
    <p>React, Redux, styled-components, Node.js, Express, MongoDB</p>
    <nav>
      <a href="https://github.com/gunhwalee/spycat-client" target="_blank"
        >Github</a
      >
    </nav>
  </ProjectItem>

  <ProjectItem>
    <template #heading>Reactree</template>

    <p class="description">
      Reactree는 React 프로젝트의 컴포넌트 계층구조를 트리 형태로 시각화해주는
      Electron 기반의 데스크톱 앱 애플리케이션입니다. 사용자가 작성한 React
      프로젝트의 계층 구조를 시각화해서 제공하며, 각 컴포넌트의 상세 정보와
      코드뷰어를 함께 제공합니다.
    </p>
    <p>React, Redux, styled-components, Electron</p>
    <nav>
      <a href="https://github.com/Common-LKP/reactree-frontend" target="_blank"
        >Github</a
      >
    </nav>
  </ProjectItem>
</template>

<style scoped>
.title {
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
