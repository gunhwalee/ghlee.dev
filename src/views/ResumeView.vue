<template>
  <div class="container">
    <iframe src="../../public/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" width="80%"></iframe>
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
  .container{
    margin-top: 0;
  }

  iframe{
    width: 600px;
    height: 845px;
  }
}
</style>
