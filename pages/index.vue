<template>
  <div class="hunger">
    <div class="hunger__content content">
      <div
        id="about"
        class="content__section"
      >
        <About />
      </div>
      <div
        id="team"
        class="content__section"
      />
      <Team />
      <div
        id="booking"
        class="content__section"
      >
        <Book />
      </div>
      <div
        id="galerie"
        class="content__section"
      >
        <Specialties />
      </div>
      <div
        id="menu"
        class="content__section"
      >
        <Menu />
      </div>
      <div
        id="events"
        class="content__section"
      >
        <Events />
      </div>
      <div
        id="contact"
        class="content__section"
      >
        <Contacts />
      </div>
    </div>
  </div>
</template>
<script>
import About from '~/components/landing/Hunger/About';
import Contacts from '~/components/landing/Hunger/Contacts';
import Events from '~/components/landing/Hunger/Events';
import Book from '~/components/landing/Hunger/Book';
import Menu from '~/components/landing/Hunger/Menu';
import Team from '~/components/landing/Hunger/Team';
import Specialties from '~/components/landing/Hunger/Specialties';

export default {
  components: {
    About, Contacts, Events, Menu, Team, Specialties, Book,
  },
};
</script>

<style lang="scss" scoped>
.hunger{
  margin: 0 auto;
}
.content__section {
  padding-top: 50px;
}
</style>
