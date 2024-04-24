import{_ as l,r as o,o as t,c as a,d as e,e as n,a as r,b as d}from"./app-IEn2CkPT.js";const s={},c=e("h1",{id:"colorpicker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#colorpicker","aria-hidden":"true"},"#"),n(" colorpicker")],-1),u=e("p",null,"非常漂亮的一款拾色器,支持多种颜色格式的输入输出,支持渐变色选择。",-1),v=e("p",null,"注意：本文档适用于 v2 以上版本。如果您正在使用旧版本，请参阅 v1 分支。v2 版本为破坏性更新，不再支持 v1 中的某些功能,请谨慎使用。",-1),m={href:"https://aesoper101.github.io/vue3-colorpicker/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/aesoper101/vue3-colorpicker/blob/main/README.md",target:"_blank",rel:"noopener noreferrer"},b=d(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add vue3-colorpicker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue3-colorpicker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="第一步全局注册" tabindex="-1"><a class="header-anchor" href="#第一步全局注册" aria-hidden="true">#</a> 第一步全局注册</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue3ColorPicker from &quot;vue3-colorpicker&quot;;
import &quot;vue3-colorpicker/style.css&quot;;

createApp(App)
  .use(router)
  .use(Vue3ColorPicker)
  .mount(&quot;#app&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者局部注册</p><div class="language-vue3 line-numbers-mode" data-ext="vue3"><pre class="language-vue3"><code>import { ColorPicker } from &quot;vue3-colorpicker&quot;;
import &quot;vue3-colorpicker/style.css&quot;;

export default defineComponent({
components: { ColorPicker },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><div class="language-vue3 line-numbers-mode" data-ext="vue3"><pre class="language-vue3"><code>&lt;template&gt;
  &lt;div&gt;
     &lt;color-picker v-model:pureColor=&quot;pureColor&quot; v-model:gradientColor=&quot;gradientColor&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
  import { ref } from &quot;vue&quot;;
  import { ColorInputWithoutInstance } from &quot;tinycolor2&quot;;

  export default defineComponent({
     setup() {
       const pureColor = ref&lt;ColorInputWithoutInstance&gt;(&quot;red&quot;);
       const gradientColor = ref(&quot;linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)&quot;);

       return { pureColor, gradientColor }
     }
  });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h={href:"https://aesoper101.github.io/vue3-colorpicker/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"案例代码在 src/stories 目录下",-1);function _(f,x){const i=o("ExternalLinkIcon");return t(),a("div",null,[c,u,v,e("p",null,[e("a",m,[n("在线 demo 演示"),r(i)])]),e("p",null,[e("a",p,[n("English"),r(i)])]),b,e("p",null,[n("具体文档请参考 "),e("a",h,[n("在线 demo 演示"),r(i)])]),g])}const q=l(s,[["render",_],["__file","README.ZH-cn.html.vue"]]);export{q as default};
