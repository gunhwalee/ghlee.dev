<template>
  <div class="container">
    <img src="../../public/resume.jpg" alt="resume" width="600" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

iframe {
  overflow: auto;
  overflow-x: hidden;
  width: 500px;
  min-height: 703px;
}

@media (min-width: 1024px) {
  .container {
    margin-top: 0;
  }

  iframe {
    width: 600px;
    height: 845px;
  }
}
</style>
