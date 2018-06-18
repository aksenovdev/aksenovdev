<template lang="pug">
  .resume.roboto-thin.mw7.center.ph3-ns.mv5
    .cf
      .fl.w-100.w-30-ns
        img.w-100(src="../assets/images/i.jpg" alt="Sergei Aksenov")
        // a.pv2.bg-black.white.tc.lh-copy.f6.db.link(href="../assets/resume.docx") Скачать резюме
      .fl.w-100.w-70-ns.pl3
        h1.ma0 Аксёнов Сергей Владимирович
        ul.list.pl0.mt2.w-100.mt3
          li.flex.items-center.lh-copy.ph0-l.pb1
            span Возраст: &nbsp {{ age }} (7 декабря 1996)
          li.flex.items-center.lh-copy.ph0-l.pb1
            span Телефон: &nbsp
            a.f6.link.blue.hover-dark-gray(href="tel:") 89996487065
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Email: &nbsp
            a.f6.link.blue.hover-dark-gray(href="mailto:aksenovdev@gmail.com") aksenovdev@gmail.com
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Skype: &nbsp
            a.f6.link.blue.hover-dark-gray(href="skype:sadinthesad?call") sadinthesad
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Telegram: &nbsp
            a.f6.link.blue.hover-dark-gray(href="tg://resolve?domain=aksenovdev") @aksenovdev
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Место проживания: &nbsp г. Кемерово
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Гражданство: &nbsp Россия
          li.flex.items-center.lh-copy.ph0-l.pb2
            span Образование: &nbsp высшее
    h2.w-100.bb.pv2.mt0 Желаемая должность
    .flex
      span.flex-auto.roboto.fw7.f4 Juniour fronend developer
      span.fw7.f4 30 000 ₽
    .mv3 Занятость
      ul.list.ph3.mt3
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Стажировка
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Частичная занятость
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Проектная работа
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Полная занятость
    .mv3 График работы
      ul.list.ph3.mt3
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Удалённая работа
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Гибкий график
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Сменный график
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Полный день
    h2.w-100.bb.pb2.mt0 Ключевые навыки
    span Навыки (базовый уровень)
    .mv3
      ul.list.ph3.mt3
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 C#
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Javascript
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 HTML 5
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 CSS 3
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Angular 2
    span Знание языков
    .mv3
      ul.list.ph3.mt3
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Русский <br>
            span.f7.green родной
        li.dib.mr1.mb2
          a.f6.b.db.pa2.link.dim.dark-gray.ba.b--black-20 Английский <br>
            span.f7.dark-pink чтение документации
    h2.w-100.bb.pb2.mt0 Образование
    .cf
      .fl.w-100.w-30-ns
        .f6.lh-copy Бакалавр <br> г. Кемерово <br> 2018
      .fl.w-100.w-70-ns.lh-copy Кузбасский государственный технический университет им. Т.Ф. Горбачева <br> ИИТМА, Прикладная информатика
    h2.w-100.bb.pv2.mt0 Конкурсы и публикации
    article.center.mw5.mw6-ns.hidden.mv4.roboto
      .bg-yellow-acient
        h1.f4.tc.pv3.ma0 I WANT TO GET OUT OF HERE
        .cf.pv3.bg-black.yellow-acient.ph3.tc.lh-copy.f6
          .fl.w-100.w-50-ns "Хакатон DevTime"
          .fl.w-100.w-50-ns Кемерово
          .fl.w-100.w-50-ns 2016
          .fl.w-100.w-50-ns команда Zero Ambition
          .fl.w-100
            a.yellow-acient(href="https://bit.ly/2tgTtFL") Подробнее
        p.f6.f5-ns.lh-copy.measure.mv0.pa3 Сервис предназначался для рекомендации пользователю различных заведений на основе его увлечений. Интересы определялись посредством анализа социальных сетей. За сутки был реализован MVP, дальнейшая разработка прекратилась. В команде занимал должность backend разработчика.
    h2.w-100.bb.pv2.mt0 Опыт работы
    .cf
      .fl.w-100.w-30-ns
        .f6.lh-copy Февраль 2018 — Май 2018
      .fl.w-100.w-70-ns
        h2.ma0.pb2 Alpha candidat &nbsp
          a.link.blue(href="https://aksenovdev.bitbucket.io/") (dev версия)
        h3.ma0.pb2 Juniour frontend developer (Angular 2)
        p.ma0.pb3.lh-copy Разработка сервиса для сбора информации о пользователе на <span class="underline">Angular 2</span> с использованием CSS фреймворка <span class="underline">materialize-css</span>, препроцессора <span class="underline">SASS</span>, <span class="underline">JQuery</span>. Также в рамках данного решения было реализовано небольшое API с использованием технологии <span class="underline">.Net Core 2</span>
    .cf
      .fl.w-100.w-30-ns
        .f6.lh-copy Декабрь 2016 — Декабрь 2017
      .fl.w-100.w-70-ns
        h2.ma0.pb2 AznResearch
        h3.ma0.pb2 Juniour backend developer (VB.NET, ASP.NET)
        p.ma0.pb3.lh-copy Разрабатывал систему архивирования данных из БД с использованием хранимых процедур и <span class="underline">VB.NET</span> в рамках платформы <span class="underline">ASP.NET.</span> Также занимался исправлением ошибок и добавлением незначительного функционала по типу выгрузки отчётов в формате xlsx, отображения данных в виде графиков/таблиц, добавления возможности фильтрации данных (по дате, типу и т.д.)
</template>

<script>
const BIRTH_DATE = new Date(1996, 12, 7);
export default {
  name: 'resume',
  computed: {
    age() {
      const dateBirth = new Date(1996, 12, 7);
      const ageDifMs = Date.now() - dateBirth.getTime();
      return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
    }
  }
};
</script>

<style lang="scss" scoped>
  .bg-yellow-acient {
    background-color: #FFFF00;
  }

  .yellow-acient {
    color: #FFFF00;
  }
</style>
