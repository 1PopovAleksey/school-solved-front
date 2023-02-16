<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__flex">
        <RouterLink class="header__logo" to="/">BrandName</RouterLink>
        <nav class="header__nav">
          <RouterLink class="header__link" to="/">Home</RouterLink>
          <RouterLink class="header__link" to="/">Product</RouterLink>
          <RouterLink class="header__link" to="/">Pricing</RouterLink>
          <RouterLink class="header__link" to="/">Contact</RouterLink>
        </nav>
        <RouterLink class="header__login" to="/">Login</RouterLink>
        <RouterLink class="header__join-us" to="/">
          JOIN US
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
              fill="white"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@import "./assets/mixins.scss";

.header {
  display: flex;
  align-items: center;
  height: 95px;

  &__container {
    @include container;
  }

  &__flex {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin: 0 83px 0 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 0.1px;
    color: var(--text-color);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 21px;
  }

  &__link {
    font-weight: 700;
    font-size: 14px;
    line-height: 171%;
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }

  &__login {
    margin: 0 45px 0 auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 157%;
    text-align: right;
    letter-spacing: 0.2px;
    color: var(--primary-color);
  }

  &__join-us {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 21px 15px 25px;
    margin: 0 84px 0 0;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 157%;
    letter-spacing: 0.2px;
    color: var(--light-text-color);
    background: var(--primary-color);
  }
}
</style>
