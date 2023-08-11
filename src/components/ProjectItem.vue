<template>
  <div class="item">
    <div class="title">
      <h3>
        <slot name="heading"></slot>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    align-items: flex-start;
  }
}
</style>
