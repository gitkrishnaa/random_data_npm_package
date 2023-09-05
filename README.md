# random_data_npm_package


#keynote
it return array




# how to use
install it 

const data=require("get-random-data")  //import



**************** for random string ************************************************************************************
 ::::::::::::::::::::::::::
 @ when two argument/param
::::::::::::::::::::::::::
// #  code -> console.log(data.random_string(5,10))
  
//explain- 5-character size of string and ,10- how many string

// result  array [ 'mfwne', 'juuyt','ltlqh', 'iolgr','gnyrx', 'pceit','dyhgf', 'ygwgm','vqvhs', 'vxsru']


::::::::::::::::::::::::::
@ when one argument/param
::::::::::::::::::::::::::

// #  code -> console.log(data.random_string(7))
  
//explain- 5-character size of string and if second param is not given then reault will be 1 string

// result  array ['doqqhrg']


**************** for random number ******************


// #  code -> console.log(data.random_number(5,11))
  
//explain- 5-character size of number and ,11- how many number

// result  array [45731,  2889, 48264, 5614, 85032, 14899, 7084, 77963, 74061,65142,65714]





// #  code -> console.log(data.random_number(5))
  
//explain- 5-character size of number and if second param is not given then reault will be 1 number

// result  array [92573]

**************** for random boolean ******************

::::::::::::::::::::::::::
@ only one argument/param
::::::::::::::::::::::::::

const data=require("get-random-data")  //import
// #  code ->console.log(data.random_boolean(20))
  
//explain-  20- how many  boolean , it accept only one boolean

// result  array[false, true,  true,  true, true,  true,  true,  false, true,  true,  true,  false, false, true,  true,  false, true,  false, false, true]
