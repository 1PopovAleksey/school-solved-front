<script setup>
import IconComputer from "../components/icons/IconComputer.vue";
import IconTelescope from "../components/icons/IconTelescope.vue";
import IconFlask from "../components/icons/IconFlask.vue";
</script>

<script>
export default {
  props: {
    title: String,
    paragraph: String,
    computer: Boolean,
    telescope: Boolean,
    flask: Boolean,
  },
};
</script>

<template>
  <div class="card">
    <IconComputer v-if="computer" />
    <IconTelescope v-if="telescope" />
    <IconFlask v-if="flask" />
    <h3 class="card__title">{{ title }}</h3>
    <span class="card__line"></span>
    <p class="card__paragraph">{{ paragraph }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px 31px 35px 40px;
  width: 328px;
  height: 296px;
  background: var(--light-text-color);
  box-shadow: var(--accentued-drop-shadow);

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 0.1px;
    color: var(--text-color);
  }

  &__line {
    width: 50px;
    height: 2px;
    background-color: var(--danger-color);
  }

  &__paragraph {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }
}
</style>
