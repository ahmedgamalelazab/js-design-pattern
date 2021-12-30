
//singleton // create on instance from one object only one time 
//[✅] static private member 
//[✅] object
//[✅] connect the object with the data 

let bla = (function singleton(){

    //i will show u something 
    var instantiated; // private static member
    var instantiation_num = 0;

    //person class 
    function Person(){
        this.name = "jamal";
        this.age = 23;
        this.job = "software engineer"
    }

    Person.prototype.getInstance_Count = function(){
        return instantiation_num;
    }

    return {
        getInstance:function(){
            if(!instantiated){
                instantiated = new Person();
                instantiation_num++;
            }
            return instantiated;
        }
    }

})();

//one instance in the whole application 
console.log(bla.getInstance().getInstance_Count());
console.log(bla.getInstance().getInstance_Count());
console.log(bla.getInstance().getInstance_Count());


let test = (function(){

    var instantiated_count = 0; // closure 

    function Person_v2(){
        this.name = "Jimmy";
        this.age = 30;
        this.job = "software"
    }

    Person_v2.prototype.getInstanceCount = function(){
        return instantiated_count++;
    }

    return {
        getInstance : function(){
            return new Person_v2();            
        }
    }


})();

console.log(test.getInstance().getInstanceCount());
console.log(test.getInstance().getInstanceCount());
console.log(test.getInstance().getInstanceCount());
console.log(test.getInstance().getInstanceCount());

