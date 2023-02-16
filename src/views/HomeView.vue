<script></script>

<template>
  <section id="hero" class="hero">
    <div class="hero__container">
      <div class="hero__offset">
        <h5 class="hero__header-tag">Online training</h5>
        <h1 class="hero__headline">25K+ STUDENTS TRUST US</h1>
        <h4 class="hero__sub-headline">
          Our goal is to make online education work for everyone
        </h4>
        <div>
          <RouterLink to="/">Get Quote Now</RouterLink>
          <RouterLink to="/">Learn More</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

.hero {
  &__container {
    @include container;
  }

  &__offset {
    padding: 89px 0 127px 0;
  }

  &__header-tag {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1px;
    color: var(--primary-color);
  }

  &__headline {
    font-weight: 700;
    font-size: 58px;
    line-height: 138%;
    letter-spacing: 0.2px;
    color: var(--text-color);
  }

  &__sub-headline {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }
}
</style>
