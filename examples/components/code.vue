<template>
  <div class="highlight" style="padding:0;">
    <div class="bd-clipboard">
      <button class="btn-clipboard copy" title="复制到剪贴板" @click="clip">复制</button>
    </div>
    <pre :class="{bg: bg}"><code :class="language" ref="code" style="background-color: #f7f7f9;padding:15px;"><slot></slot></code></pre>
  </div>
</template>
<script>
  import hljs from 'highlightjs/highlight.pack.js';
  import Clipboard from 'clipboard';
  export default {
    props: {
      lang: {
        type: String,
        default: 'javascript'
      },
      bg: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        openScale: false,
        code: '',
        copied: false,
        docLang: this.$lang,
        title: 'Code'
      }
    },
    computed: {
      language() {
        if (this.lang == 'auto') {
          return ''
        } else {
          return this.lang;
        }
      }
    },
    mounted() {
      this.code = this.$refs.code.innerHTML.replace(/\n/, '');
      this.$refs.code.innerHTML = this.code;
      hljs.highlightBlock(this.$refs.code);
    },
    methods: {
      clip() {
        const code = this.code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        const clipboard = new Clipboard('.copy', {
          text() {
            return code
          }
        });

        clipboard.on('success', (e) => {
          e.clearSelection();
          clipboard.destroy();
          this.copied = true;
          alert('代码已复制到剪贴板')
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        });
      },
    }
  }
</script>
