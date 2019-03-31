var chocolateBars = ["snickers", "hundrad grand", "kitkat", "skittles"]
chocolateBars.unshift("hersheys")
console.log(chocolateBars[0])

Function addElementToBeginningOfArray(arrayA,ElementA){
  return [ElementA,...arrayA]
  
}

Function destructivelyAddElementToBeginningOfArray(arrayA,ElementA){
  return arrayA=[ElementA,...arrayA]
}

Function addElementToEndOfArray(arrayA,ElementA){
  
}

Function destructivelyAddElementToEndOfArray(arrayA,ElementA){
  
}