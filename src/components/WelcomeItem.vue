<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
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
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  position: relative;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  color: hsla(160, 100%, 37%, 1);
;
}

.title {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin: 2rem 0;
    padding: 1rem 0 1rem calc(var(--section-gap) / 2);
    display: flex;
    justify-content: left;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}

.item:hover h3, .item:hover i {
  color: rgb(27, 158, 228)
}
</style>
