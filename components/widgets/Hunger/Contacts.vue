<template>
  <div class="contacts">
    <validation-observer
      v-slot="{handleSubmit}"
    >
      <div class="contacts__title">
        {{ $t("hunger.contacts.contactsTitle") }}
      </div>
      <div class="contacts__line" />
      <div class="contacts__subtitle">
        {{ subtitle }}
      </div>
      <div class="contacts__content content">
        <custom-area
          v-model="customerName"
          :placeholder="$t('hunger.contacts.name')"
          class="content__name"
          :is-input="true"
          rules="required|alpha_spaces"
          :name="$t('hunger.contacts.nameField')"
        />
        <custom-area
          v-model="customerEmail"
          :placeholder="$t('hunger.contacts.email')"
          class="content__email"
          :is-input="true"
          rules="required|email"
          :name="$t('hunger.contacts.emailField')"
        />
        <custom-area
          v-model="customerPhone"
          :placeholder="$t('hunger.contacts.phone')"
          class="content__phone"
          rules="required|phone"
          :is-input="true"
          :name="$t('hunger.contacts.phoneField')"
        />
        <custom-area
          v-model="customerMessage"
          :placeholder="$t('hunger.contacts.message')"
          class="content__message"
          :is-text-area="true"
          rules="required|min:10"
          :name="$t('hunger.contacts.messageField')"
        />
        <div class="content__connection connection">
          <span class="connection__element">
            <span class="connection__icon icon-map-marker" />
            <span class="connection__text">
              {{ $t("hunger.contacts.address") }}
            </span>
          </span>
          <span class="connection__element">
            <span class="connection__icon icon-phone" />
            <span class="connection__text">
              {{ $t("hunger.contacts.telephone") }}
            </span>
          </span>
          <span class="connection__element">
            <span class="connection__icon icon-envelope" />
            <span class="connection__text">
              {{ $t("hunger.contacts.emailAddress") }}
            </span>
          </span>
        </div>
        <custom-button
          class="content__button"
          mode="yellow"
          @click="handleSubmit(showMessageModal)"
        >
          {{ $t("hunger.contacts.sendMessage") }}
        </custom-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import modals from '~/store/modals/modals';

export default {
  name: 'Contacts',
  data() {
    return {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      customerMessage: '',
    };
  },
  methods: {
    showMessageModal() {
      this.ShowModal({
        key: modals.message,
        name: this.customerName,
        phone: this.customerPhone,
        email: this.customerEmail,
        message: this.customerMessage,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts{
  max-width: 1500px;
  margin: 0 auto;
  &__title{
    @include text-title;
    margin-top: 100px;
  }
  &__line{
    @include line;
    margin-bottom: 20px;
  }
  &__subtitle{
    @include text-subtitle;
    max-width: 520px;
    margin: 0 auto 50px;
  }
  &__content{
    padding: 0 80px 100px;
  }
}
.content{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 60px 120px 60px;
  grid-column-gap: 11px;
  grid-row-gap: 23px  ;

  &__name{
    grid-column-start: span 2;
  }
  &__email{
    grid-column-start: span 2;

  }
  &__phone{
    grid-column-start: span 2;
  }
  &__message{
    grid-column-start: span 6;
  }
  &__connection{
    grid-column-start: span 3;

  }
  &__button{
    grid-column-start: span 3;
  }
}
.connection{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  &__icon{
    color: $yellow;
    font-size: 15px;
    stroke: $blue;
  }
  &__text{
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: $lightGrey;
    margin-left: 15px;

  }
  &__element{
    display: flex;
    align-items: center;
    &:last-child{
      margin-right: 40px;
    }
  }
}
.icon-phone{
  transform: rotate(-90deg);
}
@include _1400{
  .connection{
    &__element{
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
@include _767{
  .content {
    display: flex;
    flex-direction: column;
  }
  .connection{
    &__element{
      margin-bottom: 10px;
    }
  }
  .contacts{
    &__subtitle{
      padding: 0 20px;
      margin-bottom: 20px;
    }
    &__content{
      padding: 0 40px;
    }
  }
}

@include _480 {
  .contacts{
    &__subtitle{
      padding: 0 10px;
    }
    &__content{
      padding: 0 20px;
    }
  }

}

</style>
