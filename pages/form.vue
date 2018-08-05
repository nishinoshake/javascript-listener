<template>
  <BasePage>
    <BaseBlock>
      <PrimaryTitle>Form</PrimaryTitle>

      <BasePlayground>
        <form class="form" id="form">
          <p class="form-title">#form</p>
          <div class="form-block">
            <input type="text" id="text" class="form-text" placeholder="#text">
          </div>
          <div class="form-block">
            <div class="form-select-wrap">
              <select name="select" id="select" class="form-select">
                <option value="Paterson">#select</option>
                <option value="Paterson">Paterson</option>
                <option value="Star Wars">Star Wars</option>
                <option value="Baby Driver">Baby Driver</option>
                <option value="INTO THE WILD">INTO THE WILD</option>
              </select>
            </div>
          </div>
          <button class="form-submit" type="submit">submit</button>
        </form>
      </BasePlayground>

      <!-- keydown -->
      <BaseSection id="keydown">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/keydown">keydown</SecondaryTitle>
        <BaseText>キーが押されたとき。</BaseText>
        <CodeBlock category="form" name="keydown" />
      </BaseSection>

      <!-- keypress -->
      <BaseSection id="keypress">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/keypress">keypress</SecondaryTitle>
        <BaseText>キーが押されたとき。<br>ただし、shiftやaltなどの装飾キーやIMEなどでは実行されません。</BaseText>
        <CodeBlock category="form" name="keypress" />
      </BaseSection>

      <!-- keyup -->
      <BaseSection id="keyup">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/keyup">keyup</SecondaryTitle>
        <BaseText>キーが離されたとき。</BaseText>
        <CodeBlock category="form" name="keyup" />
      </BaseSection>

      <div class="form-sorry">
        <FormKeyboardEvent />
      </div>

      <!-- input -->
      <BaseSection id="input">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/input">input</SecondaryTitle>
        <BaseText>値が変更されたとき。<br>テキストボックスの場合、入力されて値が変更されるたびに実行されます。</BaseText>
        <CodeBlock category="form" name="input" />
      </BaseSection>

      <!-- change -->
      <BaseSection id="change">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/change">change</SecondaryTitle>
        <BaseText>値の変更が確定されたとき。<br>テキストボックスの場合、入力中には発生せず、値が変更された後にEnterを押された場合や、フォーカスが外れたときに実行されます。</BaseText>
        <CodeBlock category="form" name="change" />
      </BaseSection>

      <!-- focus -->
      <BaseSection id="focus">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/focus">focus</SecondaryTitle>
        <BaseText>要素がフォーカスされたとき。</BaseText>
        <CodeBlock category="form" name="focus" />
      </BaseSection>

      <!-- blur -->
      <BaseSection id="blur">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/blur">blur</SecondaryTitle>
        <BaseText>要素からフォーカスが外れたとき。</BaseText>
        <CodeBlock category="form" name="blur" />
      </BaseSection>

      <div class="form-sorry">
        <FormFocusEvent />
      </div>

      <!-- submit -->
      <BaseSection id="submit">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/submit">submit</SecondaryTitle>
        <BaseText>フォームがsubmitされたとき。</BaseText>
        <CodeBlock category="form" name="submit" />
      </BaseSection>
    </BaseBlock>
    <PageNavigation
      prev-text="マウス"
      prev-link="/mouse/"
      next-text="メディア"
      next-link="/media/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'
import FormKeyboardEvent from '@/components/partial/form/FormKeyboardEvent'
import FormFocusEvent from '@/components/partial/form/FormFocusEvent'

export default {
  components: {
    FormKeyboardEvent,
    FormFocusEvent
  },
  head() {
    return meta.form
  },
  mounted() {
    // select:focus
    addListener(document.querySelector('#select'), 'focus', e => {
      separate()
      group('focus', () => {
        this.consoleValue('select', e)
      })
      e.preventDefault()
    })

    // select:blur
    addListener(document.querySelector('#select'), 'blur', e => {
      group('blur', () => {
        this.consoleValue('select', e)
      })
      e.preventDefault()
    })

    // select:input
    addListener(document.querySelector('#select'), 'input', e => {
      group('input', () => {
        this.consoleValue('select', e)
      })
      e.preventDefault()
    })

    // select:change
    addListener(document.querySelector('#select'), 'change', e => {
      group('change', () => {
        this.consoleValue('select', e)
      })
      e.preventDefault()
    })

    // text:focus
    addListener(document.querySelector('#text'), 'focus', e => {
      separate()
      group('focus', () => {
        this.consoleValue('select', e)
      })
    })

    // text:blur
    addListener(document.querySelector('#text'), 'blur', e => {
      group('blur', () => {
        this.consoleValue('select', e)
      })
    })

    // text:keydown
    addListener(document.querySelector('#text'), 'keydown', e => {
      separate()
      group('keydown', () => {
        this.consoleValue('text', e)
      })
    })

    // text:keypress
    addListener(document.querySelector('#text'), 'keypress', e => {
      group('keypress', () => {
        this.consoleValue('text', e)
      })

      if (e.key === 'Enter') {
        e.preventDefault()
      }
    })

    // text:keyup
    addListener(document.querySelector('#text'), 'keyup', e => {
      group('keyup', () => {
        this.consoleValue('text', e)
      })
    })

    // text:input
    addListener(document.querySelector('#text'), 'input', e => {
      group('input', () => {
        this.consoleValue('text', e)
      })
    })

    // text:change
    addListener(document.querySelector('#text'), 'change', e => {
      group('change', () => {
        this.consoleValue('text', e)
      })
    })

    // submit:focus
    addListener(document.querySelector('#submit'), 'focus', e => {
      separate()
      group('focus', () => {
        console.log('#submit')
        console.log(e)
      })
      e.preventDefault()
    })

    // submit:blur
    addListener(document.querySelector('#submit'), 'blur', e => {
      group('blur', () => {
        console.log('#submit')
        console.log(e)
      })
      e.preventDefault()
    })

    // submit
    addListener(document.querySelector('#form'), 'submit', e => {
      group('submit', () => {
        console.log('#form')
        console.log(e)
      })
      e.preventDefault()
    })
  },
  methods: {
    consoleValue(id, e) {
      console.log(`#${id}: ${e.target.value}`)
      if (e.key) {
        console.log(`key: ${e.key}`)
      }
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 35rem;
  padding: 3rem;
  position: relative;
  background-color: $color-snow;
  border-radius: 0.8rem;
  @include min {
    width: 32rem;
    padding: 3rem;
  }
  &-title {
    position: absolute;
    top: -1.2rem;
    left: -0.5rem;
    margin: 0;
    font-size: 2.4rem;
    line-height: 1;
  }
  &-block {
    margin-bottom: 2.5rem;
    @include min {
      margin-bottom: 3rem;
    }
  }
  &-select {
    width: 110%;
    display: block;
    padding: 0.9rem 1rem;
    font-size: 1.6rem;
    background: none;
    outline: none;
    box-shadow: none;
    border: 0;
    appearance: none;
    @include font-serif;
    &-wrap {
      overflow: hidden;
      position: relative;
      background-color: $color-white;
      border: 2px solid $color-dark;
      border-radius: 0.4rem;
      &:after {
        content: '';
        width: 0;
        height: 0;
        right: 1rem;
        border-style: solid;
        border-width: 8px 6px 0 6px;
        border-color: $color-dark transparent transparent transparent;
        @include center-vertical;
        @include min {
          border-width: 10px 7px 0 7px;
        }
      }
    }
  }
  &-text {
    width: 100%;
    display: block;
    padding: 0.8rem 1rem;
    font-size: 1.6rem;
    border: 2px solid $color-dark;
    border-radius: 0.4rem;
    outline: none;
    box-shadow: none;
    @include font-serif;
  }
  &-submit {
    width: 100%;
    display: block;
    padding: 1.2rem;
    font-size: 2rem;
    color: $color-white;
    background-color: $color-dark;
    border-radius: 0.5rem;
    @include font-serif;
  }
  &-sorry {
    margin-bottom: 10rem;
  }
}
</style>
