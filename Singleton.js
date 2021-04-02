// "SINGLETON PATTERN" >> 'UNIQUE OBJECT'
// OBJECTIVEs:
/*
  )+1 Creare only just only one instance from the class or constructor
  )+2 When they said that 'Singleton pattern' they means that class or constructor or specific structure has just one object no more. 
*/
// +)1 'FIRST STYLE' > F > IMPLEMENT SINGLETON PATTERN
var singletonPattern = ( function(){
  // +1 Declare the unique object
  var instance; // undefined
  
  // +1 Create a unique object
  function createInstance() 
  {
    var obj = new Object('I am new instance');
    return obj;
  }
  
  return {
    // Gatekeeper of structure...
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      } 
      return instance;
    },  
  }
})();

// )+1 TEST
function run () {
  // Create first instance of 
  var instance1 = singletonPattern.getInstance();
  var instance2 = singletonPattern.getInstance();
  console.log(instance1 === instance2);
}

// +)2 'SECOND STYLE' > F > IMPLEMENT SINGLETON PATTERN
function Logger() {
  if(typeof global_log === 'undefined') {
    global_log = this;
  }
  return global_log;
}

// )+2 TEST 
var a = new Logger(); 
var b = new Logger(); 
console.log(a === b); // true
console.log(a);
