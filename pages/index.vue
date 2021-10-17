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
import About from '~/components/widgets/Hunger/About';
import Contacts from '~/components/widgets/Hunger/Contacts';
import Events from '~/components/widgets/Hunger/Events';
import Book from '~/components/widgets/Hunger/Book';
import Menu from '~/components/widgets/Hunger/Menu';
import Team from '~/components/widgets/Hunger/Team';
import Specialties from '~/components/widgets/Hunger/Specialties';

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
</style>
