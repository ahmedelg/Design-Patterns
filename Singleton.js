// "SINGLETON PATTERN" >> 'UNIQUE OBJECT'
// OBJECTIVEs:
/*
  )+1 Creare only just only one instance from the class or constructor
  )+2 When they said that 'Singleton pattern' they means that class or constructor or specific structure has just one object no more. 
*/
// IMPLEMENT SINGLETON PATTERN
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

// TEST
function run () {
  // Create first instance of 
  var instance1 = singletonPattern.getInstance();
  var instance2 = singletonPattern.getInstance();
  console.log(instance1 === instance2);
}
