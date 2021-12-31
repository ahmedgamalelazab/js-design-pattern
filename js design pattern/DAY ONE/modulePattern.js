/**
 * 
 *~ Privacy
 *~The module pattern encapsulates 'privacy', state and organization using closures. It
 *~provides a way of wrapping a mix of public and private methods and variables, pro￾tecting pieces from leaking into the global scope and accidentally colliding with another
 *~developer's interface. With this pattern, only a public API is returned, keeping every￾thing else within the closure private.
 */

 //use this design patten if u feel that using literal objects better than classes 
 //my idea this pattern is anti-pattern because classes more better



 let moduleTest = (function(){
    
    let counter = 0;

    return {
        increment:function(){
            return counter++;
        },
        decrement:function(){
            return counter--;
        },
        reset:function(){
            counter = 0;
            return counter;
        }
    }

 })();

 console.log(moduleTest.increment());
 console.log(moduleTest.decrement());
 console.log(moduleTest.reset());


 //advantages and disadvantages 

 //advantages 
 //you can now use private functions and variables 

//  The disadvantages of the module pattern are that as you access both public and private
// members differently, when you wish to change visibility, you actually have to make
// changes to each place the member was used.


//test 2 

let personTest = (function(){

    let name;
    let age;
    let getAll = function(){
        return [name,age];
    }
    setName = function(_name){
        name = _name;
    }
    setAge = function(_age){
        age = _age;
    }

    return {
        getPerson:function(){
            return getAll();
        },
        setPersonName : function(name){
            setName(name);
        },
        setPersonAge : function(age){
            setAge(age);
        }
    }

})();


console.log(personTest.setPersonAge(26));
console.log(personTest.setPersonName("jimmy"));
console.log(personTest.getPerson());