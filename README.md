# get-random-data
npm i get-random-data


## Installation

To install get-random-data, use [npm](http://github.com/npm/npm):

```
npm install get-random-data
```

## Usage
```javascript
//import
const data=require("get-random-data") 


# for random string  

// * when two argument/param 
console.log(data.random_string(5,10))
//explain- 5-character size of string and ,10- how many string
// result [ 'mfwne', 'juuyt','ltlqh', 'iolgr','gnyrx', 'pceit','dyhgf', 'ygwgm','vqvhs', 'vxsru']

//* when one argument/param
 console.log(data.random_string(7))
//explain- 5-character size of string and if second param is not given then reault will be 1 string
// result  ['doqqhrg']


# for random number 

// * when two argument/param
console.log(data.random_number(5,11))
//  explain- 5-character size of number and ,11- how many number 
//   result  [45731, 2889, 48264, 5614, 85032, 14899, 7084, 77963, 74061,65142,65714] 

// * when two argument/param
console.log(data.random_number(5))
//  explain- 5-character size of number and if second param is not given then reault will be 1 number 
//  result array [92573] 


#for random boolean

// * only need one argument/param
console.log(data.random_boolean(20))
//explain- 20- how many boolean , it accept only one argument
// result array[false, true, true, true, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true]


```





## Command Line Usage

    $ npm install -g get-random-data

## Tests

```
npm install
npm test
```

## LICENSE

node- get-random-data is licensed under the MIT license.
