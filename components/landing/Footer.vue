<template>
  <div class="footer">
    <div class="footer__content content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2203.1712413137225!2d84.94881311592133!3d56.4820373807547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x432693741c785ab9%3A0x1247b481235bcf7e!2z0KHRgtCw0YDRi9C5INCX0LDQvNC-0Lo!5e0!3m2!1sru!2sru!4v1633303517984!5m2!1sru!2sru"
        style="border:0;"
        allowfullscreen="true"
        loading="lazy"
        class="content__map"
      />
      <div class="content__signature signature">
        <span class="icon-copyright signature__text" />
        <span class="signature__text">
          {{ $t("hunger.copyright") }}
        </span>
        <span class="signature__text signature__text_fat">
          {{ $t("hunger.mindblister") }}
        </span>
        <span class="signature__text">2019</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};

</script>

<style lang="scss" scoped>
.footer{
  transition: 1s;
  &__content{
    margin: 50px auto 0;
  }
}
.content{
  transition: 1s;
  &__map{
    height: 475px;
    width: 100%;
  }
  &__signature{
    display: flex;
    min-height: 100px;
    justify-content: center;
    background-color: $black;
    align-items: center;
    margin-top: -10px;
  }
}
.signature{
  &__text{
    color: $white;
    opacity: 0.5;
    margin-right: 5px;
    &_fat{
      font-weight: 700;
    }
  }
}
@include _575{
  .footer{
    &__content{
      padding: 5px;
    }
  }
}

</style>
