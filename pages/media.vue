<template>
  <BasePage>
    <BaseBlock>
      <PrimaryTitle>Media</PrimaryTitle>

      <div class="media-playground">
        <section class="media-section">
          <h2 class="media-label">#video</h2>
          <div class="media-video-frame">
            <video id="video" src="/video/sad_lion_.mp4" playsinline controls></video>
          </div>
        </section>

        <section class="media-section">
          <h2 class="media-label">#audio</h2>
          <div class="media-audio-frame">
            <audio id="audio" src="/audio/firefly.mp3" controls></audio>
          </div>
          <p class="media-thanks"><a href="http://www1.nhk.or.jp/archives/creative/" target="_blank">NHK<br>CREATIVE<br>LIBRARY</a></p>
        </section>
      </div>

      <!-- loadstart -->
      <BaseSection id="loadstart">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/loadstart">loadstart</SecondaryTitle>
        <BaseText>読み込みが始まったとき。</BaseText>
        <CodeBlock category="media" name="loadstart" />
      </BaseSection>

      <!-- progress -->
      <BaseSection id="progress">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/progress">progress</SecondaryTitle>
        <BaseText>データの読み込み中。</BaseText>
        <CodeBlock category="media" name="progress" />
      </BaseSection>

      <!-- suspend -->
      <BaseSection id="suspend">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/suspend">suspend</SecondaryTitle>
        <BaseText>読み込みを一時的に中断したとき。</BaseText>
        <CodeBlock category="media" name="suspend" />
      </BaseSection>

      <!-- emptied -->
      <BaseSection id="emptied">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/emptied">emptied</SecondaryTitle>
        <BaseText>なんらかの理由で読み込みデータが空になったとき。</BaseText>
        <CodeBlock category="media" name="emptied" />
      </BaseSection>

      <!-- error -->
      <BaseSection id="error">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/error">error</SecondaryTitle>
        <BaseText>読み込み中にエラーが発生したとき。</BaseText>
        <CodeBlock category="media" name="error" />
      </BaseSection>

      <!-- loadeddata -->
      <BaseSection id="loadeddata">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/loadeddata">loadeddata</SecondaryTitle>
        <BaseText>メディアの最初のフレームの読み込みが完了したとき。</BaseText>
        <CodeBlock category="media" name="loadeddata" />
      </BaseSection>

      <!-- loadedmetadata -->
      <BaseSection id="loadedmetadata">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata">loadedmetadata</SecondaryTitle>
        <BaseText>メタデータの読み込みが完了したとき。</BaseText>
        <CodeBlock category="media" name="loadedmetadata" />
      </BaseSection>

      <!-- canplay -->
      <BaseSection id="canplay">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/canplay">canplay</SecondaryTitle>
        <BaseText>メディアが再生できるようになったとき。<br>ただ、今のペースでは最後まで停止せずに再生するのはきついかもしれない。</BaseText>
        <CodeBlock category="media" name="canplay" />
      </BaseSection>

      <!-- canplaythrough -->
      <BaseSection id="canplaythrough">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/canplaythrough">canplaythrough</SecondaryTitle>
        <BaseText>今のペースで読み込めば、メディアが最後まで再生できそうだと思ったとき。</BaseText>
        <CodeBlock category="media" name="canplaythrough" />
      </BaseSection>

      <!-- play -->
      <BaseSection id="play">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/play">play</SecondaryTitle>
        <BaseText>再生が開始されたとき。</BaseText>
        <CodeBlock category="media" name="play" />
      </BaseSection>

      <!-- playing -->
      <BaseSection id="playing">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/playing">playing</SecondaryTitle>
        <BaseText>再生中。タイミングは<BaseCode>play</BaseCode>のあとで。</BaseText>
        <CodeBlock category="media" name="playing" />
      </BaseSection>

      <!-- timeupdate -->
      <BaseSection id="timeupdate">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate">timeupdate</SecondaryTitle>
        <BaseText>再生の現在位置が更新されたとき。</BaseText>
        <CodeBlock category="media" name="timeupdate" />
      </BaseSection>

      <!-- pause -->
      <BaseSection id="pause">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/pause">pause</SecondaryTitle>
        <BaseText>停止されたとき。</BaseText>
        <CodeBlock category="media" name="pause" />
      </BaseSection>

      <!-- ended -->
      <BaseSection id="ended">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/ended">ended</SecondaryTitle>
        <BaseText>終了したとき。</BaseText>
        <CodeBlock category="media" name="ended" />
      </BaseSection>

      <!-- durationchange -->
      <BaseSection id="durationchange">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/durationchange">durationchange</SecondaryTitle>
        <BaseText>メディアの再生時間が変更されたとき。</BaseText>
        <CodeBlock category="media" name="durationchange" />
      </BaseSection>

      <!-- waiting -->
      <BaseSection id="waiting">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/waiting">waiting</SecondaryTitle>
        <BaseText>メディアの読み込みが間に合わずに待っているとき。</BaseText>
        <CodeBlock category="media" name="waiting" />
      </BaseSection>

      <!-- seeking -->
      <BaseSection id="seeking">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/seeking">seeking</SecondaryTitle>
        <BaseText>シークしているとき。</BaseText>
        <CodeBlock category="media" name="seeking" />
      </BaseSection>

      <!-- seeked -->
      <BaseSection id="seeked">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/seeked">seeked</SecondaryTitle>
        <BaseText>シークが終わったとき。</BaseText>
        <CodeBlock category="media" name="seeked" />
      </BaseSection>

      <!-- ratechange -->
      <BaseSection id="ratechange">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/ratechange">ratechange</SecondaryTitle>
        <BaseText>再生速度が変わったとき。</BaseText>
        <CodeBlock category="media" name="ratechange" />
      </BaseSection>

      <!-- volumechange -->
      <BaseSection id="volumechange">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/volumechange">volumechange</SecondaryTitle>
        <BaseText>音量が変わったとき。</BaseText>
        <CodeBlock category="media" name="volumechange" />
      </BaseSection>
    </BaseBlock>
    <PageNavigation
      prev-text="フォーム"
      prev-link="/form/"
      next-text="アニメーション"
      next-link="/animation/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'

export default {
  head() {
    return meta.media
  },
  mounted() {
    const ids = ['video', 'audio']
    const eventNames = [
      'loadstart',
      'progress',
      'suspend',
      'emptied',
      'error',
      'loadeddata',
      'loadedmetadata',
      'canplay',
      'canplaythrough',
      'play',
      'playing',
      'timeupdate',
      'pause',
      'ended',
      'durationchange',
      'waiting',
      'seeking',
      'seeked',
      'ratechange',
      'volumechange'
    ]
    const separateEvents = ['pause', 'seeked']

    ids.forEach(id => {
      eventNames.forEach(eventName => {
        addListener(document.querySelector(`#${id}`), eventName, e => {
          if (separateEvents.indexOf(eventName) !== -1) {
            separate()
          }
          group(eventName, () => {
            console.log(`#${id}`)
            console.log(e)
          })
          e.preventDefault()
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.media {
  &-playground {
    margin: 6rem 0;
    border-radius: 0.5rem;
    @include min {
      width: 100%;
      display: flex;
      align-items: flex-end;
      margin: 8rem 0;
    }
  }
  &-section {
    display: flex;
    flex-direction: column-reverse;
    @include max {
      &:nth-child(n + 2) {
        margin-top: 6rem;
      }
    }
    @include min {
      width: 50%;
    }
  }
  &-video {
    &-frame {
      width: 100%;
      position: relative;
      @include max {
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;
      }
      &:before {
        content: '';
        display: block;
        height: 0;
        padding-top: 56.25%;
      }
      video {
        @include fit-full;
      }
    }
  }
  &-audio {
    &-frame {
      display: flex;
      justify-content: center;
    }
  }
  &-label {
    margin-top: 2.5rem;
    font-size: 2.8rem;
    line-height: 1;
    text-align: center;
    @include min {
      margin-top: 3.6rem;
      font-size: 3.6rem;
    }
  }
  &-thanks {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    line-height: 1.4;
    text-align: center;
    @include min {
      margin-bottom: 5rem;
      font-size: 3rem;
    }
  }
}
</style>
