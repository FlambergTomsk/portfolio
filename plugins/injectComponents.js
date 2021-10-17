import Vue from 'vue';

import ModalContainer from '~/components/ModalContainer';
import ModalBox from '~/components/ModalBox';
import CustomButton from '~/components/ui/CustomButton';
import CustomArea from '~/components/ui/CustomArea';
import CustomDrop from '~/components/ui/CustomDrop';
import CustomDatePicker from '~/components/ui/CustomDatePicker';
import CustomTimePicker from '~/components/ui/CustomTimePicker';

Vue.component('modal-container', ModalContainer);
Vue.component('modal-box', ModalBox);
Vue.component('custom-button', CustomButton);
Vue.component('custom-area', CustomArea);
Vue.component('custom-drop', CustomDrop);
Vue.component('custom-date-picker', CustomDatePicker);
Vue.component('custom-time-picker', CustomTimePicker);
