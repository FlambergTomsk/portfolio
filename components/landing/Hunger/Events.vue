<template>
  <div class="events">
    <div class="events__content content">
      <div class="content__title">
        {{ $t("hunger.events.privateEvents") }}
      </div>
      <div class="content__block block">
        <div class="block__wrapper block__wrapper_revert">
          <img
            src="~/static/wedding.png"
            alt="Wedding"
            class="block__image block__image_revert"
          >
          <div class="block__activity">
            <span class="block__text">
              {{ $t("hunger.events.weddings") }}
            </span>
          </div>
        </div>
        <div class="block__wrapper">
          <div class="block__party">
            <span class="block__text">
              {{ $t("hunger.events.corporateParties") }}
            </span>
          </div>
          <img
            src="~/static/corporat.png"
            alt="Parties"
            class="block__image"
          >
        </div>
      </div>
      <div class="content__call">
        {{ $t("hunger.events.phone") }}
      </div>
    </div>
    <div class="events__footer footer">
      <div
        v-for="(item, index) in photos"
        :key="`photos-item-${index}`"
        class="footer__array"
      >
        <div class="footer__picture">
          <img
            :src="item.image"
            alt="Photos"
            class="footer__image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      photos: [
        {
          id: Date.now(),
          image: require('~/static/mazzo.png'),
        },
        {
          id: Date.now(),
          image: require('~/static/fire.png'),
        },
        {
          id: Date.now(),
          image: require('~/static/tables.png'),
        },
        {
          id: Date.now(),
          image: require('~/static/room.png'),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.events{
  &__content{
    background-image: url(static/food.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: $white;
    padding: 40px 0;
  }
}
.content{
  &__title{
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.5em;
    text-align: center;
    margin-bottom: 40px;
  }
  &__call{
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    opacity: 0.5;
  }
}
.block{
  display: flex;
  justify-content: center;
  &__text{
    font-family: $Banny;
    font-size: 24px;
    line-height: 12px;
    letter-spacing: 0em;
  }
  &__activity{
    writing-mode: tb-rl;
    min-width: 80px;
    padding: 20px 28px;
    margin-right: 80px;
  }
  &__party{
    writing-mode: vertical-rl;
    min-width: 80px;
    padding: 20px 28px;
    transform: rotate(180deg);
  }
  &__wrapper{
    display: flex;
  }
}
.footer{
  display: flex;
  justify-content: center;
  overflow: hidden;
  &__picture{
    width: 360px;
    overflow: hidden;
    padding: 1px 1px 0;
    cursor: pointer;
    display: block;
    -webkit-box-shadow: 1px 3px 15px #7e807e;
    -moz-box-shadow: 1px 3px 15px  #7e807e;
    box-shadow: 1px 3px 15px  #7e807e;
    -webkit-transition: all 1.5s;
    -moz-transition: all 1.5s;
    -ms-transition: all 1.5s;
    -o-transition: all 1.5s;
    transition: all 1.5s;
        &:hover{
      width: 500px;
      -webkit-box-shadow: 1px 3px 15px #36c5fa;
      -moz-box-shadow: 1px 3px 15px #36c5fa;
      box-shadow: 1px 3px 15px #36c5fa;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -ms-transition: all 1s;
      -o-transition: all 1s;
      transition: all 1s;
    }
  }
  &__picture img{
    width: 600px;
  }
}
@include _1400{
  .footer{
    &__picture{
      width: 300px;
      &:hover{
        width: 450px;
      }
    }
  }
  .content{
    padding: 40px 20px;
  }
  .block{
    &__image{
      width: 400px;
    }
  }
}
@include _1199{
  .footer{
    &__picture{
      width: 250px;
      &:hover{
        width: 350px;
      }
    }
  }
  .content{
    padding: 40px 20px;
  }
  .block{
    &__image{
      width: 350px;
    }
  }
}
@include _991{
  .events{
    &__content{
      margin-bottom: 20px;
    }
  }
  .footer{
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-gap: 20px;
    &__image{
    box-shadow: none;
    }
  }
  .block{
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    &__activity{
      margin-right: 0;
    }
    &__wrapper{
      align-items: flex-end;
      &_revert{
        transform: rotate(180deg);
        margin-bottom: 20px;
       }
    }
  }
}
@include _575{

  .block{
    &__image{
      width: 270px;
    }
  }
}
@include _575{
  .block{
    &__image{
      width: 200px;
    }
  }
}
</style>
