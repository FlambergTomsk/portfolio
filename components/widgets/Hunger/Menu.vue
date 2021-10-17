<template>
  <div class="menu">
    <div class="menu__content content">
      <div class="content__title">
        {{ $t("hunger.menu.deliciousMenu") }}
      </div>
      <div class="content__line" />
      <div class="content__subtitle">
        {{ subtitle }}
      </div>
      <div class="content__wrapper">
        <div
          v-for="(item, i) in menuTitle"
          :key="`item-${item}-${i}`"
          class="content__panel panel"
        >
          <div
            class="panel__item"
            :class="{'panel__item_choosen': menu === i}"
            @click="changeMenu(i)"
          >
            {{ item }}
          </div>
          <transition
            name="fade"
            class="panel__transition"
          >
            <div
              v-show="menu===i"
              class="panel__line"
            />
          </transition>
        </div>
      </div>
      <div
        v-for="(arr, i) in array"
        :key="`item-${arr}-${i}`"
        class="content__array"
      >
        <b-collapse
          :visible="i===menu"
          class="content__collapse"
        >
          <div class="content__grid">
            <div
              v-for="(item, j) in arr"
              :key="`item-${item}-${j}`"
              class="content__dish dish"
            >
              <div class="dish__wrapper">
                <div class="dish__title">
                  {{ item.title }}
                </div>
                <div class="dish__price">
                  {{ item.price }}
                </div>
                <img
                  :src="item.picture"
                  alt="Dish"
                  class="dish__picture"
                >
              </div>
              <div class="dish__composition">
                {{ item.compositions }}
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      menu: 5,
      array:
        [
          [
            {
              title: this.$t('hunger.menu.titles.soup'),
              price: this.$t('hunger.menu.prices.soup'),
              compositions: this.$t('hunger.menu.compositions.soup'),
              picture: require('~/static/lentil.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupChicken'),
              price: this.$t('hunger.menu.prices.chicken'),
              compositions: this.$t('hunger.menu.compositions.chicken'),
              picture: require('~/static/chicken.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupCorn'),
              price: this.$t('hunger.menu.prices.corn'),
              compositions: this.$t('hunger.menu.compositions.corn'),
              picture: require('~/static/corn.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupCream'),
              price: this.$t('hunger.menu.prices.cream'),
              compositions: this.$t('hunger.menu.compositions.cream'),
              picture: require('~/static/cream.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupAsian'),
              price: this.$t('hunger.menu.prices.asian'),
              compositions: this.$t('hunger.menu.compositions.asian'),
              picture: require('~/static/asian.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupShank'),
              price: this.$t('hunger.menu.prices.shank'),
              compositions: this.$t('hunger.menu.compositions.shank'),
              picture: require('~/static/shank.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupPumpkin'),
              price: this.$t('hunger.menu.prices.pumpkin'),
              compositions: this.$t('hunger.menu.compositions.pumpkin'),
              picture: require('~/static/pumpkin.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupVegetable'),
              price: this.$t('hunger.menu.prices.vegetable'),
              compositions: this.$t('hunger.menu.compositions.vegetable'),
              picture: require('~/static/vegetable.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupMoroccan'),
              price: this.$t('hunger.menu.prices.moroccan'),
              compositions: this.$t('hunger.menu.compositions.moroccan'),
              picture: require('~/static/morrocan.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.soupCurried'),
              price: this.$t('hunger.menu.prices.curried'),
              compositions: this.$t('hunger.menu.compositions.curried'),
              picture: require('~/static/curried.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.pizza'),
              price: this.$t('hunger.menu.prices.pizza'),
              compositions: this.$t('hunger.menu.compositions.pizza'),
              picture: require('~/static/pizza.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaBagel'),
              price: this.$t('hunger.menu.prices.bagel'),
              compositions: this.$t('hunger.menu.compositions.bagel'),
              picture: require('~/static/bagel.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaBreakfast'),
              price: this.$t('hunger.menu.prices.breakfast'),
              compositions: this.$t('hunger.menu.compositions.breakfast'),
              picture: require('~/static/breakfast.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaCalifornia'),
              price: this.$t('hunger.menu.prices.california'),
              compositions: this.$t('hunger.menu.compositions.california'),
              picture: require('~/static/california.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaChain'),
              price: this.$t('hunger.menu.prices.chain'),
              compositions: this.$t('hunger.menu.compositions.chain'),
              picture: require('~/static/chain.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaColorado'),
              price: this.$t('hunger.menu.prices.colorado'),
              compositions: this.$t('hunger.menu.compositions.colorado'),
              picture: require('~/static/colorado.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaDetroit'),
              price: this.$t('hunger.menu.prices.detroit'),
              compositions: this.$t('hunger.menu.compositions.detroit'),
              picture: require('~/static/detroit.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaFrenchBread'),
              price: this.$t('hunger.menu.prices.frenchBread'),
              compositions: this.$t('hunger.menu.compositions.frenchBread'),
              picture: require('~/static/french.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaFried'),
              price: this.$t('hunger.menu.prices.fried'),
              compositions: this.$t('hunger.menu.compositions.fried'),
              picture: require('~/static/fried.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaGreek'),
              price: this.$t('hunger.menu.prices.greek'),
              compositions: this.$t('hunger.menu.compositions.greek'),
              picture: require('~/static/greek.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaGrilled'),
              price: this.$t('hunger.menu.prices.grilled'),
              compositions: this.$t('hunger.menu.compositions.grilled'),
              picture: require('~/static/grilled.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaIndian'),
              price: this.$t('hunger.menu.prices.indian'),
              compositions: this.$t('hunger.menu.compositions.indian'),
              picture: require('~/static/indian.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaJumbo'),
              price: this.$t('hunger.menu.prices.jumbo'),
              compositions: this.$t('hunger.menu.compositions.jumbo'),
              picture: require('~/static/jumbo.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaLahmajoun'),
              price: this.$t('hunger.menu.prices.lahmajoun'),
              compositions: this.$t('hunger.menu.compositions.lahmajoun'),
              picture: require('~/static/lahmajoun.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaNewHeaven'),
              price: this.$t('hunger.menu.prices.newHeaven'),
              compositions: this.$t('hunger.menu.compositions.newHeaven'),
              picture: require('~/static/newHeaven.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaNewYork'),
              price: this.$t('hunger.menu.prices.newYork'),
              compositions: this.$t('hunger.menu.compositions.newYork'),
              picture: require('~/static/newYork.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaOhioValley'),
              price: this.$t('hunger.menu.prices.ohioValley'),
              compositions: this.$t('hunger.menu.compositions.ohioValley'),
              picture: require('~/static/ohioValley.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaOldForge'),
              price: this.$t('hunger.menu.prices.oldForge'),
              compositions: this.$t('hunger.menu.compositions.oldForge'),
              picture: require('~/static/oldForge.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaQuadCities'),
              price: this.$t('hunger.menu.prices.quadCities'),
              compositions: this.$t('hunger.menu.compositions.quadCities'),
              picture: require('~/static/quadCities.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaNeapolitan'),
              price: this.$t('hunger.menu.prices.neapolitan'),
              compositions: this.$t('hunger.menu.compositions.neapolitan'),
              picture: require('~/static/neapolitan.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pizzaRoman'),
              price: this.$t('hunger.menu.prices.roman'),
              compositions: this.$t('hunger.menu.compositions.roman'),
              picture: require('~/static/roman.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.pasta'),
              price: this.$t('hunger.menu.prices.pasta'),
              compositions: this.$t('hunger.menu.compositions.pasta'),
              picture: require('~/static/pasta.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pastaFettuccine'),
              price: this.$t('hunger.menu.prices.fettuccine'),
              compositions: this.$t('hunger.menu.compositions.fettuccine'),
              picture: require('~/static/fettucine.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pastaLinguine'),
              price: this.$t('hunger.menu.prices.linguine'),
              compositions: this.$t('hunger.menu.compositions.linguine'),
              picture: require('~/static/linguine.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pastaPapardelle'),
              price: this.$t('hunger.menu.prices.papardelle'),
              compositions: this.$t('hunger.menu.compositions.papardelle'),
              picture: require('~/static/pappardelle.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.pastaCavatappi'),
              price: this.$t('hunger.menu.prices.papardelle'),
              compositions: this.$t('hunger.menu.compositions.papardelle'),
              picture: require('~/static/cavatappi.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.desert'),
              price: this.$t('hunger.menu.prices.desert'),
              compositions: this.$t('hunger.menu.compositions.desert'),
              picture: require('~/static/applePie.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertKheer'),
              price: this.$t('hunger.menu.prices.kheer'),
              compositions: this.$t('hunger.menu.compositions.kheer'),
              picture: require('~/static/cocount.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertAlmond'),
              price: this.$t('hunger.menu.prices.almond'),
              compositions: this.$t('hunger.menu.compositions.almond'),
              picture: require('~/static/almondKulfi.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertTart'),
              price: this.$t('hunger.menu.prices.tart'),
              compositions: this.$t('hunger.menu.compositions.tart'),
              picture: require('~/static/lemonTart.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertPistachio'),
              price: this.$t('hunger.menu.prices.pistachio'),
              compositions: this.$t('hunger.menu.compositions.pistachio'),
              picture: require('~/static/pistachio.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertBrownies'),
              price: this.$t('hunger.menu.prices.brownies'),
              compositions: this.$t('hunger.menu.compositions.brownies'),
              picture: require('~/static/brownies.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.desertTiramisu'),
              price: this.$t('hunger.menu.prices.tiramisu'),
              compositions: this.$t('hunger.menu.compositions.tiramisu'),
              picture: require('~/static/tiramisu.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.wine'),
              price: this.$t('hunger.menu.prices.wine'),
              compositions: this.$t('hunger.menu.compositions.wine'),
              picture: require('~/static/cabernet.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineMerlot'),
              price: this.$t('hunger.menu.prices.merlot'),
              compositions: this.$t('hunger.menu.compositions.merlot'),
              picture: require('~/static/merlot.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineAiren'),
              price: this.$t('hunger.menu.prices.airen'),
              compositions: this.$t('hunger.menu.compositions.airen'),
              picture: require('~/static/airen.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineTempranillo'),
              price: this.$t('hunger.menu.prices.tempranillo'),
              compositions: this.$t('hunger.menu.compositions.tempranillo'),
              picture: require('~/static/tempranillo.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineChardonnay'),
              price: this.$t('hunger.menu.prices.chardonnay'),
              compositions: this.$t('hunger.menu.compositions.chardonnay'),
              picture: require('~/static/chardonay.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineGarnacha'),
              price: this.$t('hunger.menu.prices.garnacha'),
              compositions: this.$t('hunger.menu.compositions.garnacha'),
              picture: require('~/static/garnacha.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.wineSyrah'),
              price: this.$t('hunger.menu.prices.syrah'),
              compositions: this.$t('hunger.menu.compositions.syrah'),
              picture: require('~/static/syrah.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.beer'),
              price: this.$t('hunger.menu.prices.beer'),
              compositions: this.$t('hunger.menu.compositions.beer'),
              picture: require('~/static/corona.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerBrahma'),
              price: this.$t('hunger.menu.prices.brahma'),
              compositions: this.$t('hunger.menu.compositions.brahma'),
              picture: require('~/static/brahma.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerHeineken'),
              price: this.$t('hunger.menu.prices.heineken'),
              compositions: this.$t('hunger.menu.compositions.heineken'),
              picture: require('~/static/heineken.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerYanjing'),
              price: this.$t('hunger.menu.prices.yanjing'),
              compositions: this.$t('hunger.menu.compositions.yanjing'),
              picture: require('~/static/yanjing.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerHarbin'),
              price: this.$t('hunger.menu.prices.harbin'),
              compositions: this.$t('hunger.menu.compositions.harbin'),
              picture: require('~/static/harbin.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerSkol'),
              price: this.$t('hunger.menu.prices.skol'),
              compositions: this.$t('hunger.menu.compositions.skol'),
              picture: require('~/static/skol.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.beerTsingtao'),
              price: this.$t('hunger.menu.prices.tsingtao'),
              compositions: this.$t('hunger.menu.compositions.tsingtao'),
              picture: require('~/static/tsingtao.svg'),
            },
          ],
          [
            {
              title: this.$t('hunger.menu.titles.drinks'),
              price: this.$t('hunger.menu.prices.drinks'),
              compositions: this.$t('hunger.menu.compositions.drinks'),
              picture: require('~/static/coffee.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksSunset'),
              price: this.$t('hunger.menu.prices.sunset'),
              compositions: this.$t('hunger.menu.compositions.sunset'),
              picture: require('~/static/sunset.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksUnsweetened'),
              price: this.$t('hunger.menu.prices.unsweetened'),
              compositions: this.$t('hunger.menu.compositions.unsweetened'),
              picture: require('~/static/black.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksBerry'),
              price: this.$t('hunger.menu.prices.berry'),
              compositions: this.$t('hunger.menu.compositions.berry'),
              picture: require('~/static/berry.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksDecaf'),
              price: this.$t('hunger.menu.prices.decaf'),
              compositions: this.$t('hunger.menu.compositions.decaf'),
              picture: require('~/static/decaf.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksChocolate'),
              price: this.$t('hunger.menu.prices.chocolate'),
              compositions: this.$t('hunger.menu.compositions.chocolate'),
              picture: require('~/static/chocolate.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksGrapefruit'),
              price: this.$t('hunger.menu.prices.grapefruit'),
              compositions: this.$t('hunger.menu.compositions.grapefruit'),
              picture: require('~/static/grapefruit.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksCranberry'),
              price: this.$t('hunger.menu.prices.cranberry'),
              compositions: this.$t('hunger.menu.compositions.cranberry'),
              picture: require('~/static/cranberry.svg'),
            },
            {
              title: this.$t('hunger.menu.titles.drinksApple'),
              price: this.$t('hunger.menu.prices.apple'),
              compositions: this.$t('hunger.menu.compositions.apple'),
              picture: require('~/static/apple.svg'),
            },
          ],
        ],
      isChoosen: false,
    };
  },
  computed: {
    menuTitle() {
      return [
        this.$t('hunger.menu.panel.soupe'),
        this.$t('hunger.menu.panel.pizza'),
        this.$t('hunger.menu.panel.pasta'),
        this.$t('hunger.menu.panel.desert'),
        this.$t('hunger.menu.panel.wine'),
        this.$t('hunger.menu.panel.beer'),
        this.$t('hunger.menu.panel.drinks'),
      ];
    },
  },
  methods: {
    changeMenu(i) {
      this.menu = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu{
  &__content{
    padding: 100px 0;
  }
}
.content{
  transition: 1s;
  margin: 0 auto;
  @include container;
  &__title{
    @include text-title;
  }
  &__line{
    @include line;
    margin: 10px auto 20px;
  }
  &__subtitle{
    @include text-subtitle;
  }
  &__wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    margin: 50px 0;

  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 87px;
    max-width: 1280px;
    margin: 0 auto;

  }
}
.panel{
  &__line{
    @include line;
  }
  &__item{
    border-right: 1px solid rgba(51, 51, 51, 0.2);
    min-width: 120px;
    min-height: 50px;
    text-align: center;
    padding-top: 12%;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
      color: $yellow;
    }
    &_choosen{
      color: $yellow;
      font-size: 15px;
      text-shadow: $black 0 0 5px, $black 0px 0 5px,
      $black 0 1px 0, $black 0 -1px 0;
    }
  }
}
.dish__wrapper:hover .dish__picture{
  opacity: 1;
  transition: 2s;
  width: 300px;
  height: 250px;
}
.dish{
  transition: 1s;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    position: relative;

  }
  &__picture{
    position: absolute;
    opacity: 0;
    top:-280px;
    left: 30px;
    z-index: 10;
    width: 0;
    height: 0;
    transition: 1s;
    border-radius: 50%;
  }
  &__title{
    font-family: $Banny;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0em;
    transition: 0.1s;
    cursor: help;
    &:hover{
      color: $yellow;
      text-shadow: $black 0 0 5px, $black 0px 0 5px,
      $black 0 1px 0, $black 0 -1px 0;
    }
  }
  &__price{
    font-family: $Banny;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0em;
    white-space: nowrap;

  }
  &__composition{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    opacity: 0.5;
    margin-bottom: 30px;
  }
}

@include _991{
  .dish__wrapper:hover .dish__picture{
    opacity: 1;
    transition: 2s;
    width: 220px;
    height: 150px;
  }
  .dish{
    &__title, .dish__price{
      font-size: 14px;
    }
  &__picture{
    top: -180px;
  }
  }
  .content{
      &__grid{
      grid-column-gap: 40px;
    }
  }
  .panel{
    &__item{
      min-width: 100px;
    }
  }
}
@include _767{
  .content{
    &__grid{
      grid-template-columns: 1fr 1fr;
    }
  }
  .panel{
    &__item{
      min-width: 80px;
      min-height: 40px;
    }
    &__line{
      width: 40px;
      margin: 0 auto;
    }
  }
}
@include _575{
  .menu{
    &__content{
      padding: 40px 20px;
    }
  }
  .panel{
    &__item{
      min-width: 65px;
      &_choosen{
        font-size: 14px;
      }
    }
  }
  .dish{
    &__picture{
      left: 0;
    }
  }
}
@include  _480{
  .content{
    &__grid{
      grid-template-columns: 1fr ;
    }
  }
  .content{
    &__wrapper{
      display: grid;
      grid-template-columns: repeat(4, 1fr) ;
      grid-template-rows: 1fr 1fr;
    }
  }
  .dish{
    &__picture{
      left: 80px;
    }
  }
}
@include _380{
  .dish{
    &__picture{
      left: 30px;
    }
  }
}
</style>
