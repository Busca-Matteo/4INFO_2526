export const same = (arr1, arr2) => {
   return arr1 == arr2 ? true : false
   return arr1.length === arr2.length && arr1.map((el, id) => arr2[id] === el).every(item => item == true)
}