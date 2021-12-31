class Person{

    private static instantiate:Person = new Person();

    private message:string;

    private constructor(){
        this.message = "Default state Message";
    }

    static getInstance(){
       return Person.instantiate;
    }

   setMessage(_message:string):void{
        this.message = _message;
   }

   getMessage():string{
     return this.message;
   }

}


let personArr:Person[] = [Person.getInstance(),Person.getInstance()];

personArr.forEach((person)=>{
    console.log(person.getMessage());
})

personArr[0].setMessage("another message from the outSide");


personArr.forEach((person)=>{
    console.log(person.getMessage());
})
