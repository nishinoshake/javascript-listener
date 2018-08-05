<template>
  <ul class="event-crumb">
    <li v-for="event in events" :key="event">
      <a :href="eventLinks[event]" target="_blank">{{ event }}</a>
    </li>
  </ul>
</template>

<script>
const eventLinks = {
  Event: 'https://developer.mozilla.org/ja/docs/Web/API/Event',
  UIEvent: 'https://developer.mozilla.org/ja/docs/Web/API/UIEvent',
  MouseEvent: 'https://developer.mozilla.org/ja/docs/Web/API/MouseEvent',
  TouchEvent: 'https://developer.mozilla.org/ja/docs/Web/API/TouchEvent',
  FocusEvent: 'https://developer.mozilla.org/ja/docs/Web/API/FocusEvent',
  KeyboardEvent: 'https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent',
  TransitionEvent: 'https://developer.mozilla.org/ja/docs/Web/API/TransitionEvent',
  AnimationEvent: 'https://developer.mozilla.org/ja/docs/Web/API/AnimationEvent',
  DeviceOrientationEvent: 'https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent',
  DeviceMotionEvent: 'https://developer.mozilla.org/ja/docs/Web/API/DeviceMotionEvent'
}

export default {
  props: {
    events: {
      type: Array,
      required: true,
      validator(value) {
        return value.filter(v => Object.keys(eventLinks).indexOf(v) === -1).length === 0
      }
    }
  },
  data() {
    return { eventLinks }
  }
}
</script>

<style lang="scss" scoped>
.event-crumb {
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  @include min {
    margin-bottom: 1.6rem;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    @include min {
      font-size: 2rem;
    }
    &:nth-child(n + 2) {
      &:before {
        content: '/';
        margin: 0 0.6rem;
        @include min {
          margin: 0 0.8rem;
        }
      }
    }
    a {
      color: $color-link;
      &:hover {
        color: darken($color-link, 10%);
      }
    }
  }
}
</style>
