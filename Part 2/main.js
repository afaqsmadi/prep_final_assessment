//=======================================================================
/*                                     Q1                              */
//=======================================================================
  //lets make a user profile using closures
  //create a function person when invoked returns the name of that person

  function person(name){
    //your code is here
    // var yourName=name;
    return{
      sayMyName:function(){
        return name;
      },
      sayHello:function(){
        return "hello"+" "+name
      },
      addFriend:function(obj){
        if(obj.name===name){
          return "you just became friend with"+" "+name
        }
      },
        listFriends:function(){
         return  name+" "+"! you have 2 friends"
       
      }
    }
  }
  var personA=person("jack")
  var personB=person("Mark")
  var personC=person("Sara")

  // personA.sayMyName(); // "jack"
  // personB.sayMyName(); // "Mark"

  //now modify that closure and add a function that says hello to the person name;
  
  // personA.sayHello(); // hello jack
  // personB.sayHello(); // hello Mark

  //how about we let jack and mark meet toghter!
  //modify your closure and add function addFriend that accepts object of functions, and let jack meets his friends.

  // personA.addFriend(personB); // "you just became friend with Mark"
  // personA.addFriend(personC); // "you just became friend with Mark and Sara"

  //modify your closure to tell mark how many friends does he have

  // personA.listFriends(); // "Mark! you have 2 friends"


//=======================================================================
/*                                  Q2                                 */
//=======================================================================
  //lets create a football team using OOP concept,
  // a - we need to create the players (lets create only one for now), the player declaration should take the name of the player   
    
  // var player1 = Player("messi")

  // b - we need function to add the other info for the player with addInfo function
  
  // player1.addInfo(age, position, level, availability );

  // c- create another function to increase the the level for the player by n value 
   
  // player1.increaseLevel(4); 

  // d - we need another function to check the player state, if the player is available it should return true , if not it should return false
  //      note that the default state of the player is false.
    
  // player1.isAvailable();  // true / false

  // f- in order to change the state of the player, create a function called chageState, when called it will make the player avaliablity true,
  //    and when called again it will make it false.

  // player1.chageState(); // true
  // player1.chageState(); // false

  //writ your code here .....
  function makeTeam(ininal){
    var player={};
    var player.name=ininal;
    var player.age=undefined;
    var player.position=undefined;
    var player.level=0;
    var player.availability=undefined;
    var player.state=false;
        player.addInfo=addInfo;
        player.increaseLevel=increaseLevel;
        player.isAvailable=isAvailable;
        return player;
  }
  var addInfo=function(){
    return this.name+" "+this.age+" "this.position+" "+this.position+" "+this.level+" "+this.availability
  }
  var increaseLevel=function(){
    return this.level=this.level+1
  }
  var isAvailable=function (){
    if(this.state==="availability"){
      return true
    }
    return false
  }
  var chageState=function (){
    if(this.state===false){
      return true
    }
    return true
  }

  
//=======================================================================
/*                                  Q3                                 */
//=======================================================================
  //Depending on data modeling concept that you have learned:
  //create a factory function called makeCar that represents cars,
  // what different attributes cars may have? create two cars object from your factory function and save them in one array called cars!

  function makeCar(model,color,num,old ){
    // TODO: Your code here
    return{
      model:model,
      color:color,
      num:num,
      old:old
    }
  }
  var car1=makeCar('marsids',"red",88888,12)
  var car2=makeCar("jip","yello",99999,3)
  var cars=[];
  function addCars(cars,car){
    cars.push(car)
  }
  // cars=[car1,car2] 

                   
  // write function displayCar that can be used to display one car

  function displayCar(car) {
    // TODO: Your code here
    return car.model+" "+car.color+" "+car.num+" "+car.old
  }
  //displayCar(car1)
   //displayCar(car2)

