<script setup>
import HeroCard from "../components/HeroCard.vue";
</script>

<script>
export default {
  data() {
    return {
      valid: true,
      cards: [
        {
          id: 1,
          title: "Certified Teacher",
          paragraph:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
          computer: true,
        },
        {
          id: 2,
          title: "2,769 online courses",
          paragraph:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
          telescope: true,
        },
        {
          id: 3,
          title: "2,769 online courses",
          paragraph:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
          flask: true,
        },
      ],
    };
  },
  methods: {
    Subscribe() {
      this.valid = true;

      const email = document.getElementById("email");

      if (email.value.trim() === "") {
        this.valid = false;
        email.focus();
        console.log("Error", this.valid);
        return this.valid;
      }

      console.log("Send", this.valid);
    },
  },
  components: { HeroCard },
};
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__background">
      <div class="hero__container">
        <img class="hero__photo" src="../assets/img/hero.png" alt="hero" />
        <div class="hero__offset">
          <div class="hero__flex">
            <h5 class="hero__header-tag">Online training</h5>
            <h1 class="hero__headline">25K+ STUDENTS TRUST US</h1>
            <h4 class="hero__sub-headline">
              Our goal is to make online education work for everyone
            </h4>
            <div class="hero__btns">
              <RouterLink
                class="hero__btn hero__btn_green"
                aria-label="Get Quote Now"
                to="/"
              >
                Get Quote Now
              </RouterLink>
              <RouterLink
                class="hero__btn hero__btn_transparent"
                aria-label="Learn More"
                to="/"
              >
                Learn More
              </RouterLink>
            </div>
          </div>
          <div class="hero__cards">
            <HeroCard
              v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :paragraph="card.paragraph"
              :computer="card.computer"
              :telescope="card.telescope"
              :flask="card.flask"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="approdable-packages" class="approdable-packages">
    <div class="approdable-packages__container">
      <div class="approdable-packages__offset">
        <div class="approdable-packages__flex approdable-packages__flex_row">
          <img
            class="approdable-packages__img"
            src="../assets/img/approdable-packages.png"
            alt="approdable-packages"
          />
          <div
            class="approdable-packages__flex approdable-packages__flex_column"
          >
            <span class="approdable-packages__line"></span>
            <h2 class="approdable-packages__title">Approdable Packages</h2>
            <p class="approdable-packages__paragraph">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
              <br />
              Newtonian mechanics
            </p>
            <button
              class="approdable-packages__learn-more"
              aria-label="Learn More"
            >
              Learn More
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.680771 0.680771C0.737928 0.623469 0.805828 0.578007 0.880583 0.546987C0.955337 0.515967 1.03548 0.5 1.11641 0.5C1.19735 0.5 1.27749 0.515967 1.35224 0.546987C1.427 0.578007 1.4949 0.623469 1.55205 0.680771L8.9358 8.06452C8.9931 8.12168 9.03857 8.18958 9.06959 8.26433C9.10061 8.33909 9.11657 8.41923 9.11657 8.50016C9.11657 8.5811 9.10061 8.66123 9.06959 8.73599C9.03857 8.81074 8.9931 8.87864 8.9358 8.9358L1.55205 16.3196C1.43651 16.4351 1.27981 16.5 1.11641 16.5C0.953015 16.5 0.79631 16.4351 0.680771 16.3196C0.565232 16.204 0.500322 16.0473 0.500322 15.8839C0.500322 15.7205 0.565232 15.5638 0.680771 15.4483L7.63011 8.50016L0.680771 1.55205C0.623469 1.4949 0.578006 1.427 0.546986 1.35224C0.515967 1.27749 0.5 1.19735 0.5 1.11641C0.5 1.03548 0.515967 0.955338 0.546986 0.880583C0.578006 0.805829 0.623469 0.737928 0.680771 0.680771Z"
                  fill="#96BB7C"
                />
              </svg>
            </button>
            <form action="" class="approdable-packages__subscribe">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Subscribe: type your email"
                aria-label="Type your email"
                formnovalidate
                required
              />
              <button type="submit" @click="Subscribe" aria-label="Subscribe">
                Subscribe
              </button>
            </form>
            <span class="approdable-packages__error" v-if="!valid">
              Type your email
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

.hero {
  &__background {
    background: url("../assets/img/hero-background.png") no-repeat;
    z-index: 0;
  }

  &__container {
    position: relative;
    @include container;
  }

  &__photo {
    position: absolute;
    top: -25px;
    right: -118px;
    z-index: 5;
  }

  &__offset {
    display: flex;
    flex-direction: column;
    padding: 89px 0 76px 0;
  }

  &__flex {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  &__header-tag {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1px;
    color: var(--primary-color);
  }

  &__headline {
    width: 500px;
    font-weight: 700;
    font-size: 58px;
    line-height: 138%;
    letter-spacing: 0.2px;
    color: var(--text-color);
  }

  &__sub-headline {
    width: 450px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 40px;
    height: 52px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 157%;
    text-align: center;
    letter-spacing: 0.2px;

    &_green {
      border: var(--primary-border);
      color: var(--light-text-color);
      background: var(--primary-color);
      @include green-btn;
    }

    &_transparent {
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      @include transparent-btn;
    }
  }

  &__cards {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 80px 0 0 0;
    z-index: 10;
  }
}

.approdable-packages {
  &__container {
    @include container;
  }

  &__offset {
    padding: 160px 0 171px 0;
  }

  &__flex {
    display: flex;

    &_row {
      flex-direction: row;
      justify-content: space-between;
    }

    &_column {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 35px;
      max-width: 381px;
    }
  }

  &__line {
    width: 94px;
    height: 7px;
    background-color: var(--danger-color);
  }

  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 125%;
    letter-spacing: 0.2px;
    color: var(--text-color);
  }

  &__paragraph {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.2px;
    color: var(--second-text-color);
  }

  &__learn-more {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 171%;
    letter-spacing: 0.2px;
    color: var(--primary-text-color);

    svg {
      transition: all 0.3s ease;
    }

    &:hover {
      svg {
        margin: 0 0 0 5px;
      }
    }

    &:focus-visible {
      svg {
        margin: 0 0 0 5px;
      }
    }

    &:active {
      svg {
        margin: 0 0 0 -5px;
      }
    }
  }

  &__subscribe {
    display: flex;
    align-items: center;

    input {
      padding: 0 14px;
      width: 265px;
      height: 58px;
      border: 1px solid #e6e6e6;
      border-radius: 5px 0px 0px 5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: 0.2px;
      color: var(--text-color);
      background-color: #f9f9f9;

      &:placeholder-shown {
        color: var(--second-text-color);
      }

      &:invalid {
        color: var(--danger-color);
      }
    }

    button {
      height: 58px;
      width: 117px;
      border: 1px solid #e6e6e6;
      border-radius: 0px 5px 5px 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 200%;
      text-align: center;
      letter-spacing: 0.2px;
      color: var(--light-text-color);
      background-color: var(--primary-color);
    }
  }

  &__error {
    position: absolute;
    bottom: 185px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.2px;
    color: var(--danger-color);
  }
}
</style>
