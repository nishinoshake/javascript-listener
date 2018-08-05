<template>
  <div class="code-block">
    <pre v-highlightjs>
      <code class="javascript">{{ formattedCode }}</code>
    </pre>
    <Clipboard :code="formattedCode" />
  </div>
</template>

<script>
import code from '@/config/code'

export default {
  props: {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedCode() {
      return code[this.category][this.name].replace(/^\n+/, '').replace(/\n+$/, '')
    }
  }
}
</script>

<style lang="scss">
// ==========================================================================
// !!!グローバル!!!
// ==========================================================================
.code-block {
  position: relative;
  line-height: 0;
  @include max {
    font-size: 1.4rem;
  }
  pre {
    position: relative;
    margin: -1.5rem;
    padding: 1.5rem;
    overflow: auto;
  }
  code {
    padding: 1.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    line-height: 1.4;
    background: #2f2f2f;
  }
  .copy {
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }

  /*
  Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/
  */

  .hljs {
    display: block;
    @include font-source;
  }

  .event-block {
    .hljs {
      border-radius: 0;
    }
  }

  .hljs,
  .hljs-tag,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-strong,
  .hljs-emphasis {
    color: #a8a8a2;
  }

  .hljs-bullet,
  .hljs-quote,
  .hljs-number,
  .hljs-regexp,
  .hljs-literal,
  .hljs-link {
    color: #ae81ff;
  }

  .hljs-code,
  .hljs-title,
  .hljs-section,
  .hljs-selector-class {
    color: #a6e22e;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-attr {
    color: #f92672;
  }

  .hljs-symbol,
  .hljs-attribute {
    color: #66d9ef;
  }

  .hljs-params,
  .hljs-class .hljs-title {
    color: #f8f8f2;
  }

  .hljs-string,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-selector-id,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-variable {
    color: #e6db74;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-meta {
    color: #bbb;
  }
}
</style>
