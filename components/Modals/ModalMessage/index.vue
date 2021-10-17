<template>
  <modal-box
    :is-header="false"
  >
    <div class="message">
      <div class="message__title">
        {{ $t("hunger.contacts.dear") }}
        {{ options.name }}!
      </div>
      <div class="message__line" />
      <div class="message__subtitle">
        {{ $t("hunger.contacts.thanksForTheFeedback") }}
      </div>
      <img
        src="~/static/mail.svg"
        alt="email"
        class="message__picture"
      >
      <div class="message__text">
        {{ $t("hunger.contacts.respond") }}
        {{ options.phone }}
      </div>
      <div class="message__footer">
        {{ $t("hunger.contacts.detailedInformation") }}
        {{ options.email }}
      </div>
      <custom-button
        class="message__button"
        mode="yellow"
        @click="hide"
      >
        {{ $t("hunger.contacts.niceDay") }}
      </custom-button>
    </div>
  </modal-box>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
  methods: {
    hide() {
      this.CloseModal();
    },
  },
};
</script>

<style scoped lang="scss">
.message{
  background-image: url(static/food.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  color: $white;
  padding: 30px;
  border-radius: 10px;
  font-family: $Open_Sans;
  &__title{
    @include text-title;
  }
  &__line{
    @include line;
    margin-bottom: 20px;
  }
  &__subtitle{
    @include text-subtitle;
    max-width: 520px;
    margin: 0 auto 20px;
  }
  &__text{
    margin-bottom: 20px;
  }
  &__footer{
    margin-bottom: 20px;
  }
  &__picture{
    max-width: 150px;
    margin: 20px auto;
  }
  &__button{
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>
