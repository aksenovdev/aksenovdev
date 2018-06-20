<template lang="pug">
  .codestyle.mw7.center.ph3-ns.mb5
    h2.header.relative.w-100.bb.pb2.mt0 Git commit (<a class="link" href="http://udacity.github.io/git-styleguide/">udacity</a>)
      .arrow.mdi.mdi-chevron-down.active(v-on:click="slideToggle" data-slide="#gitCommit")
    #gitCommit.lh-copy
      p.mt0 Commit состоит из трёх частей, разделённых пустой линией
        ol.fw4
          li (<span class="dark-red">тип</span>) <span class="dark-green">тема</span> - обязательная часть
          li <span class="dark-blue">тело</span>
          li <span class="purple">подвал</span>
      p
        span.fw4.dark-red Тип &nbsp
        | может быть представлен одним из следующих вариантов:
        ul
          li <span class="b">feat</span>: новая возможность
          li <span class="b">fix</span>: исправление ошибки
          li <span class="b">docs</span>: изменение документации
          li <span class="b">style</span>: изменения стиля кода - добавление точки с запятой, например; сам код не изменяется
          li <span class="b">refactor</span>: рефакторинг кода
          li <span class="b">test</span>: добавление/изменение тестов
          li <span class="b">chore</span>: изменение конфигов
      p
        span.fw4.dark-green Тема &nbsp
        | должна содержать не больше 50 символов, начинаться с заглавной буквы и не заканчиваться точкой.
        | Здесь следует указывать <span class="b">что делает коммит</span> с использованием именительного падежа.
        | Например, изменение, а не изменилось или изменено.
      p
        span.fw4.dark-blue Тело.&nbsp
        | Не все коммиты достаточно сложны,чтобы в нуждаться в теле, поэтому оно необязательно и
        | используется только тогда, когда нужно пояснить контекст.
        | Тело следует использовать для описания того, <span class="b">что</span> изменилось и <span class="b">почему</span>.
        | Пустая линия после заголовком и перед телом обязательна, количество символов в одной строке не должно превышать 72.
      p
        span.fw4.dark-green Подвал &nbsp
        | необязателен и используется для ссылок на <span class="b">issue tracker IDs.</span>
      p Пример
      .bg-light-gray.pa3
        | (feat) Summarize changes in around 50 characters or less
        br
        br
        | More detailed explanatory text, if necessary. Wrap it to about 72
        | characters or so. In some contexts, the first line is treated as the
        | subject of the commit and the rest of the text as the body. The
        | blank line separating the summary from the body is critical (unless
        | you omit the body entirely); various tools like `log`, `shortlog`
        | and `rebase` can get confused if you run the two together.
        br
        br
        | Explain the problem that this commit is solving. Focus on why you
        | are making this change as opposed to how (the code explains that).
        | Are there side effects or other unintuitive consequenses of this
        | change? Here's the place to explain them.
        br
        br
        | Further paragraphs come after blank lines.
        br
        br
        |&nbsp- Bullet points are okay, too
        br
        br
        |&nbsp- Typically a hyphen or asterisk is used for the bullet, preceded
        |       by a single space, with blank lines in between, but conventions
        |       vary here
        br
        br
        | Resolves: #123
        br
        | See also: #456, #789
  </template>

<script>
export default {
  name: 'codestyle'
};
</script>

<style lang="scss" scoped>

</style>
