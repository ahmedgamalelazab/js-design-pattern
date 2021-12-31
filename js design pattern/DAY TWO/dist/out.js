"use strict";

let personInstance = (function(){

    class Person{

        #message;

        constructor(){
            this.#message = "Default state message";
        }

        getMessage(){
            return this.#message;
        }

        setMessage(message){
            this.#message = message;
        }

        static getInstance(){
            return Person.instantiate;
        }

    }

    Person.instantiate = new Person();

    return {
        getInstance:function(){
            return Person.getInstance(); //returning for me an object
        }
    }

})();


let simpleArr = [personInstance.getInstance(),personInstance.getInstance()];

simpleArr.forEach((person)=>{
    console.log(person.getMessage());
})

simpleArr[0].setMessage("custom message for the singleton pattern");


simpleArr.forEach((person)=>{
    console.log(person.getMessage());
})


