<template>
  <div class="book">
    <validation-observer
      v-slot="{handleSubmit}"
    >
      <div class="book__content content">
        <div class="content__table table">
          <div class="table__wrapper">
            <div class="table__title">
              {{ $t("hunger.book.bookATable") }}
            </div>
            <div class="table__line" />
            <div class="table__grid grid">
              <custom-area
                v-model="orderName"
                :placeholder="$t('hunger.book.name')"
                :is-input="true"
                rules="required|alpha_spaces"
                :name="$t('hunger.book.nameField')"
                class="grid__name grid__field"
              />
              <custom-area
                v-model="orderEmail"
                :placeholder="$t('hunger.book.email')"
                :is-input="true"
                rules="required|email"
                :name="$t('hunger.book.emailField')"
                class="grid__email grid__field"
              />
              <custom-area
                v-model="orderPhone"
                v-mask="'+# (###) ###-##-##'"
                placeholder="+_ (___) ___-__-__"
                :is-input="true"
                rules="required|phone"
                :name="$t('hunger.book.phoneField')"
                class="grid__phone grid__field"
              />
              <custom-drop
                v-model="orderPeople"
                class="grid__people  grid__field"
                :items="people"
                :placeholder="$t('hunger.book.people')"
                @click="changeDropDown"
              />
              <custom-date-picker
                v-model="orderDate"
                :placeholder="$t('hunger.book.date')"
                class="grid__field"
                rules="required"
                :name="$t('hunger.book.dateField')"
              />
              <custom-time-picker
                v-model="orderTime"
                :placeholder="$t('hunger.book.time')"
                class="grid__field"
                :name="$t('hunger.book.timeField')"
                rules="required"
              />
              <custom-button
                class="grid__button"
                mode="yellow"
                @click="handleSubmit(showMessageModal)"
              >
                {{ $t("hunger.book.bookNow") }}
              </custom-button>
            </div>
          </div>
          <div class="content__image">
            <img
              src="~/static/clock.svg"
              alt="Clock"
              class="content__picture"
            >
          </div>
        </div>
      </div>
      <div class="book__footer footer">
        <div class="footer__section">
          <div class="footer__day">
            {{ $t("hunger.book.monFri") }}
          </div>
          <div class="footer__time">
            {{ $t("hunger.book.monFriTime") }}
          </div>
        </div>
        <div class="footer__section">
          <div class="footer__day">
            {{ $t("hunger.book.satSun") }}
          </div>
          <div class="footer__time">
            {{ $t("hunger.book.satSunTime") }}
          </div>
        </div>
        <div class="footer__section">
          <div class="footer__day">
            {{ $t("hunger.book.telephone") }}
          </div>
          <div class="footer__time">
            {{ $t("hunger.book.telephoneNumber") }}
          </div>
        </div>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask';
import ElementUI, { DatePicker, TimeSelect } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import Vue from 'vue';

import modals from '~/store/modals/modals';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(DatePicker);
Vue.use(TimeSelect);

locale.use(lang);

export default {
  name: 'Book',
  directives: { mask },
  data() {
    return {
      orderName: '',
      orderEmail: '',
      orderPhone: '',
      orderDate: '',
      orderPeople: '',
      orderTime: '',
      isErrorCount: false,
      errorAny: this.$t('hunger.book.pleaseCheckData'),
      isDropDown: false,
      people:
        [
          '1 person',
          '2 persons',
          '3 persons',
          '4 people',
          '5 people',
          '6 persons',
          '7 people',
          '8 people',
          '9 people',
          '10 and more',
        ],
    };
  },
  methods: {
    showMessageModal() {
      if (this.orderPeople === '') {
        this.ShowModal({
          key: modals.oops,
          message: this.errorAny,
          name: this.orderName,
        });
      } else {
        this.ShowModal({
          key: modals.booking,
          name: this.orderName,
          email: this.orderEmail,
          phone: this.orderPhone,
          people: this.orderPeople + 1,
          day: this.orderDate,
          time: this.orderTime,
        });
      }
    },
    changeDropDown() {
      this.isDropDown = !this.isDropDown;
    },
  },
};
</script>

<style lang="scss" scoped>
.book{
  &__footer{
    margin: 40px 0;
  }
}
.content{
  &__table{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 40px 0 0 40px;
   }
}
.table{
  &__title{
    @include text-title;
  }
  &__line{
    @include line;
  }
  &__grid{
    margin-top: 20px;
    max-width: 566px;
  }
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-column-gap: 10px;
  grid-row-gap: 23px;
  &__button{
    grid-column-start: span 2;
  }
}
.date{
  height: 60px;
  width: 60px;
  margin-bottom: -10px;
}
.footer{
  display: flex;
  justify-content: center;
  &__time{
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    margin-right: 5px;
  }
  &__day{
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    margin-right: 5px;
  }
  &__section{
    display: flex;
  }
}
.el-input__inner{
background-color: red;
}
@include _1199{
  .content{
    &__picture{
      display: none;
    }
    &__table{
      padding: 40px 0 0 10px;
    }
  }
}
@include _575{
    .grid{
      transition: 1s;
      width: 378px;
      display: flex;
      flex-direction: column;
    }
  .footer{
    flex-direction: column;
    align-items: center;
    &__section{
      margin-bottom: 10px;
    }
  }
}
@include _380 {
  .grid {
    transition: 1s;
    width: 278px;
    display: flex;
    flex-direction: column;
  }
}
</style>
