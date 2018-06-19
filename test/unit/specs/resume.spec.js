import Vue from 'vue';
import resume from '@/components/resume';

describe('resume.vue', () => {
  it('should render correct age', () => {
    const ctor = Vue.extend(resume);
    const vm = new ctor().$mount();

    const dateBirth = new Date(1996, 12, 7);
    const ageDifMs = Date.now() - dateBirth.getTime();
    const res = Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);

    expect(vm.$el.querySelector('.resume .age').textContent)
      .to.equal(res.toString());
  });
});
