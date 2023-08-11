<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 id="name">{{ msg }}</h1>
    <h3>
      JavaScript Web Developer
    </h3>
  </div>
</template>

<style scoped>
#name {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: #f2f2f2;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
