<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    class="custom-area"
    :rules="rules"
    :name="name"
    :vid="vid"
    mode="eager"
    slim
  >
    <div class="custom-area__body">
      <el-date-picker
        v-model="model"
        type="date"
        :placeholder="placeholder"
        class="custom-area__input"
        format="dd.MM.yyyy"
        :value="value"
        :picker-options="pickerOptions"
        first-day-of-week="1"
      />
    </div>
    <div
      v-if="!isHideError"
      class="custom-area__err"
    >
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>
import Vue from 'vue';
<script>
export default {
  props: {
    value: {
      default: null,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    errorText: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    isHideError: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: '',
    },
    name: {
      type: String,
      description: 'Input name (used for validation)',
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 86400000;
        },
        firstDayOfWeek: 1,
      },
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-area {
  font-family: $Open_Sans;
  position: relative;
  &__body {
    display: flex;
    align-items: center;
    position: relative;
    ::v-deep .el-date-editor.el-input, .el-date-editor.el-input__inner {
      min-width: 100%;
    }
  }
  &__err {
    color: $red;
    font-size: 12px;
    min-height: 23px;
  }
    &__input {
    background: $grey;
    border-radius: 5px;
    border: 1px solid $clearGrey;
    padding: 0 23px;
    transition: .5s;
    width: 100%;
    color: $blackText;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 60px;
    max-width:100%;
    &::placeholder {
      color: $lightGrey;
      opacity: 0.5;
      line-height: 19px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      border-color:$red;
      background-color: $white;
    }
     &_indent {
      padding-left: 100px;
    }
    ::v-deep .el-input__inner{
      border: none;
      background: transparent;
      height: 100%;
      width: 100%;
    }
  }
  &__textarea {
    background: $grey;
    border-radius: 5px;
    padding: 20px 23px;
    transition: .3s;
    width: 100%;
    color: $blackText;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 120px;
    justify-items: end;
    resize: none;
    border: 1px solid $grey;
    &::placeholder {
      color: $lightGrey;
      opacity: 0.5;
      line-height: 19px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      border: 1px solid $red;
      background-color: $white;
    }
    &_indent {
      padding-left: 100px;
    }
 }
}
@include _575 {
  .custom-area {
    &__left {
      padding-right: 10px;
    }
    &__err {
      min-height: 13px;
    }
  }
}

</style>
