// Create a singleton pattern
// OBJECTIVEs + Creare only just only one instance from an class
// When we say 'Singleton pattern' we means that class or constructor have just one object no more. 
var Singleton = ( function(){
  var instance; // undefined
  
  // +1 Cretae an instance
  function createInstance() 
  {
    var obj = new Object('I am new instance');
    return obj;
  }
  
  return {
    // Gatekeeper
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
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  console.log(instance1 === instance2);
}
