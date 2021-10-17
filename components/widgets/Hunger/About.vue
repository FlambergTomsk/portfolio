<template>
  <div class="about">
    <div class="about__content content">
      <div class="content__block block">
        <div class="block__title">
          {{ $t("hunger.aboutTitle") }}
        </div>
        <div class="block__line" />
        <div class="block__subtitle">
          {{ subtitle }}
        </div>
        <div class="block__text">
          {{ text }}
        </div>
      </div>
      <div class="content__image">
        <img
          src="~/static/coals.png"
          alt="Coals"
          class="content__image"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      text: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
    };
  },
};
</script>

<style lang="scss" scoped>
.about{
  font-family: $Open_Sans;
  &__content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 1500px;
    margin: 0 auto;
  }
}
.content{
  &__block{
    max-width: 600px;
    justify-self: center;
    align-self: center;
    margin-left: 81px;
    padding: 0 20px;
  }
  &__image{
    justify-self: center;
    align-self: center;
  }
}
.block{
  text-align: center;
  &__title{
    @include text-title;
  }
  &__line{
    @include line;
  }
  &__subtitle{
    @include text-subtitle;
   margin-bottom: 30px;
  }
  &__text{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
}
@include _991{
  .about{
    &__content{
      padding-top: 40px;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
  .content{
    &__image{
      max-width: 450px;
         }
    &__block{
    margin-left: 0;
    }
  }
}
@include  _480{
  .content {
    &__image {
      max-width: 380px;
      margin: 0 auto;
    }
  }
}
@include  _380{
  .content {
    &__image {
      max-width: 300px;
    }
  }
}
</style>
