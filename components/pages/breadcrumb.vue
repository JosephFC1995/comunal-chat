<template>
  <div class="breadcrumb">
    <div class="breadcrumb--content container">
      <div class="breadcrumb--content--title">
        <h1>{{ title }}</h1>
      </div>
      <div class="breadcrumb--content--link">
        <ul class="breadcrumb--content--ul">
          <li
            class="breadcrumb--content--li"
            v-for="(link, index) in links"
            :key="index"
          >
            <nuxt-link
              :to="{ name: link.to }"
              class="breadcrumb--content--a"
              :class="[link.linked ? 'linked' : '']"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    links: { type: Array, default: [] },
  },
}
</script>

<style lang="scss">
.breadcrumb {
  padding: 1rem;
  box-shadow: 1px 10px 15px #00000014;
  &--content {
    &--title {
      font-size: 32px;
      @media (max-width: 768px) {
        font-size: 24px;
      }
      h1 {
        margin-top: 0;
        font-size: 48px;
        margin-bottom: 0.6rem;
        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
    }
    &--ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      a {
        margin-right: 0.5rem;
        color: #9c9c9c;
        padding: 0 0.5rem;
        text-decoration: none;
        position: relative;
        padding-right: 20px;
        &:first-child {
          padding-left: 0;
        }
        &.linked {
          color: #05bce8;
        }

        &::after {
          content: '';
          background: url(/images/arrow.png);
          width: 10px;
          height: 17px;
          background-size: contain;
          position: absolute;
          background-position: center;
          background-repeat: no-repeat;
          right: 0px;
          top: 2px;
        }
      }
    }
    &--li {
      &:last-child {
        a {
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
