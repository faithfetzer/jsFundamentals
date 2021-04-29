/*first pass- stores our variables declarations but does not assign them their values-- 
    -anything that needs to be hoisted is done then
 secnd pass-assigns the values o our variables and executes any hoisted source code */

 testFunction();

 function testFunction() {
     console.log('I have been hoisted');
 }