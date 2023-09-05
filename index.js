const random = class {
  static alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  static #Random_Number_which_smaller_Data_Array_Length = (
    size,
    dataArrayLength
  ) => {
    let finalLength = dataArrayLength - 1;
    // charater/letter size 1->1to9,2->10 to 99,3->586
    const num = Math.pow(10, size); //it craete 10 power size
    const random = Math.floor(Math.random() * num); //it gives ranom number with given size;
    // now adjusting number must be samller than data array lenth
    if (random > finalLength) {
      let x = random % finalLength;
      // console.log(x, "greater");
      return x;
    } else {
      let x = random;
      // console.log(x);
      return x;
    }
  };
  static #only_Random_Number_which_smaller_Data_Array_Length = (dataArray) => {
    let finalLength = dataArray.length - 1;
   const size=(finalLength+"").length
   const num = Math.pow(10, size); 

    const random = Math.floor(Math.random() * num); //it gives ranom number with given size;
    // now adjusting number must be samller than data array lenth
    if (random > finalLength) {
      let x = random % finalLength;
      // console.log(x, "greater");
      return x;
    } else {
      let x = random;
      // console.log(x);
      return x;
    }
  };
//   random string done random_string(how_many_char,how_many)
  static random_string = (size, how_many) => {
    const new_array = [];
   if(how_many==undefined || how_many<1){
    how_many=1;
   }
    for (let j = 0; j < how_many; j++){
      let new_str = "";
      for (let i = 0; i < size; i++) {
        let Random_Number = this.#Random_Number_which_smaller_Data_Array_Length(
          size,
          this.alphabet.length
        );
        new_str += this.alphabet[Random_Number];
      }
      
      new_array.push(new_str)
    }

    return new_array;
  };

  static random_number=(charSize,how_many)=>{
    const new_array = [];
    const size=Math.pow(10,charSize)
    if(how_many==undefined || how_many<1){
     how_many=1;
    }
    for (let j = 0; j < how_many; j++){
    const number=Math.floor(Math.random()*size)
    // console.log(number,charSize,size)
    new_array.push(number)
    }
    return new_array;
  }
  static random_boolean=(how_many)=>{
    const new_array = [];
    if(how_many==undefined || how_many<1){
     how_many=1;
    }
    for (let j = 0; j < how_many; j++){
    const number=Math.floor(Math.random()*10)
    
    new_array.push(number>=5?true:false)
    }
    return new_array;
  }
  static random_pick=(dataArray,how_many)=>{
  
    const new_array = [];
    const charSize=(dataArray-1).length;
    const size=Math.pow(10,charSize)
    if(how_many==undefined || how_many<1){
     how_many=1;
    }
    for (let j = 0; j < how_many; j++){
        const random=this.#only_Random_Number_which_smaller_Data_Array_Length(dataArray);
        new_array.push(dataArray[random])
    }
    return new_array;

}
// static random_unique_pick=(dataArray,how_many)=>{
  
//     const new_array = [];
//     const size=Math.pow(10,charSize)
//     if(how_many==undefined || how_many<1){
//      how_many=1;
//     }
//     for (let j = 0; j < how_many; j++){
//         const random=only_Random_Number_which_smaller_Data_Array_Length(dataArray);
//         new_array.push(dataArray[random])
//     }
//     return new_array;

// }
};
module.exports = random;