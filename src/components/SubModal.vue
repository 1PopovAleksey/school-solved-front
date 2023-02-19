<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div class="modal" v-show="showModal" @click="close">
    <div class="modal__container" @click.stop>
      <header class="modal__header">
        <h5 class="modal__title">Notification</h5>
        <button class="modal__close" @click="close">X</button>
      </header>
      <div class="modal__body">
        <p class="modal__text">You have successfully subscribed!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(37, 43, 66, 0.5);
  z-index: 1000;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border-radius: 5px;
    background-color: var(--faded-primary-color);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1px;
    color: var(--primary-color);
  }

  &__close {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1px;
    color: var(--second-text-color);
  }

  &__body {
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }
}
</style>
