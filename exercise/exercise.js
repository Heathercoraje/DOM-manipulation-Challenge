/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function () {
  document.querySelector(".introduction").classList.toggle("highlight")

};

toggleHighlight(); // uncomment me to test
/*

Write a function which returns all text content of the introduction paragraph
*/

var getText = function () {
  var text = document.querySelector(".introduction").innerText;
  return text
}

getText();

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function (word) {
  var text = document.querySelector(".introduction").innerText;
  console.log(text.includes(word));
  return text.includes(word);
}

//containsString('dolor'); //uncomment me to test


/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
  console.log(document.querySelector("input[name='firstName']").value);
  return document.querySelector("input[name='firstName']").value;

}

//getFirstNameValue(); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){
  //console.log(document.querySelector("form input[name='"+inputName+"']").value);
  return document.querySelector("form input[name='"+inputName+"']").value
  //return document.querySelector(`form input[name='${inputName}']`).value
};
//getValue('lastName'); //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName) {
  var stateCopy = Object.keys(formState).reduce(function(accumulator, newKey){
    accumulator[newKey] = formState[newKey];
    return accumulator;
  }, {});
  stateCopy[inputName] = getValue(inputName);
  return stateCopy;

}

//updateStateValue({}, "firstName"); //uncomment me to test


/*
Write a function which takes an object,`formState`, and an array of string
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputNames){
  var stateCopy = Object.keys(formState).reduce(function(accumulator, key){
    accumulator[key] = formState[key];
    return accumulator;
  }, {});

  inputNames.forEach(function(inputName) {
    stateCopy[inputName] = getValue(inputName)})
  console.log(stateCopy);
  }
//updateStateValues({}, ['firstName', 'lastName']); //uncomment me to test


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){
  return Array.from(document.querySelectorAll("."+className)).map(function(element){
  return element.value
})
}

//getInputValues("test"); //uncomment me to test


/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){
  var ulNode = document.createElement('ul')
  var liNode;
  var textNode;
  array.map(function(element){
    liNode = document.createElement('li')
    textNode = document.createTextNode(element)
    liNode.appendChild(textNode)
    ulNode.appendChild(liNode)
  });
  //console.log(ulNode);
  return ulNode
}
generateUl(['breakfast','lunch','dinner']); //uncomment me to test
