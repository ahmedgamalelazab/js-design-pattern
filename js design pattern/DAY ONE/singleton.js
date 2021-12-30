let singletonFull = (function Singleton() {
    
  let instantiated;

  class Person {
    #age;
    #name;
    #job;

    constructor() {
      this.#age = 0;
      this.#name = "";
      this.#job = "";
    }

    setAge(age) {
      this.#age = age;
    }
    setName(name) {
      this.#name = name;
    }
    setJob(job) {
      this.#job = job;
    }

    getAll() {
      return [this.#age, this.#job, this.#name];
    }
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = new Person();
        return instantiated;
      } else {
        return instantiated;
      }
    },
  };
})();


console.log(singletonFull.getInstance().getAll());
console.log(singletonFull.getInstance().setAge(26));
console.log(singletonFull.getInstance().setName("jimmy"));
console.log(singletonFull.getInstance().setJob("software engineering"));
console.log(singletonFull.getInstance().getAll());
console.log(singletonFull.getInstance().getAll());
console.log(singletonFull.getInstance().getAll());
