<template>
  <transition name="fade">
    <div
      v-if="isShow"
      class="base-modal"
      @mousedown.self="backgroundClick"
    >
      <component :is="currentModalKey" />
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import modals from '@/store/modals/modals';

import ModalMessage from '@/components/Modals/ModalMessage';
import ModalOops from '@/components/Modals/ModalOops';
import ModalBooking from '@/components/Modals/ModalBooking';

export default {
  components: {
    'modal-message': ModalMessage,
    'modal-oops': ModalOops,
    'modal-booking': ModalBooking,

  },
  data: () => ({
    modals,
  }),
  computed: {
    ...mapGetters({
      isShow: 'modals/getIsShow',
      currentModalKey: 'modals/getCurrentModalKey',
      options: 'modals/getOptions',
    }),
  },
  methods: {
    backgroundClick() {
      if (!this.options.isUnclosable) {
        this.close();
      }
    },
    close() {
      this.$store.dispatch('modals/hide');
    },
  },
};
</script>
<style lang="scss" scoped>
.base-modal {
  @include modalKit;
}
</style>
