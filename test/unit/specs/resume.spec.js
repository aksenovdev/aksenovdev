import Vue from 'vue';
import resume from '@/components/resume';

describe('resume.vue', () => {
  it('should render correct contents', () => {
    const ctor = Vue.extend(resume);
    const vm = new ctor().$mount();

    const dateBirth = new Date(1996, 12, 7);
    const ageDifMs = Date.now() - dateBirth.getTime();
    const res = Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);

    expect(vm.$el.querySelector('.resume .span').textContent)
      .to.equal(res.toString());
  });

  // it('should return my age', () => {
  //   const ctor = Vue.extend(resume);
  //   const vm = new ctor().$mount();


  //   expect(vm.age).to.equal(res);
  // });
});
