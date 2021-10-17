<template>
  <modal-box
    :is-header="false"
  >
    <div class="booking">
      <div class="booking__title">
        {{ $t("hunger.contacts.dear") }}
        {{ options.name }}
      </div>
      <div class="booking__line" />
      <div class="booking__subtitle">
        {{ $t("hunger.book.thankUYouForYourOrder") }}
      </div>
      <img
        src="~/static/reserved.svg"
        alt="email"
        class="booking__picture"
      >
      <div class="booking__text">
        {{ $t("hunger.book.weAreWaitingForYou") }}
        {{ options.day.toLocaleDateString() }}
        {{ $t("hunger.book.in") }}
        {{ options.time }}.
        <br>
        {{ $t("hunger.book.numberOfGuests") }}:
        {{ options.people }}.
        <br>
      </div>
      <div class="booking__footer">
        {{ $t("hunger.book.notice") }}:
        {{ $t("hunger.book.telephoneNumber") }}.
      </div>
      <custom-button
        class="booking__button"
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
.booking{
  background-image: url(static/food.png);
  background-position: 50% 50%;
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
    font-size: 12px;
  }
  &__picture{
    min-width: 200px;
    margin: 20px auto;
  }
  &__button{
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>
