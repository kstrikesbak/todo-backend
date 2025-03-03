/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(arr , func) {
  const newArr = [];
  arr.forEach(function(arr){
    newArr.push(func(arr))
    });
  return newArr;
}

// const map = (arr,func) => arr.map(func)

const filter = function(arr,func) {
  const newArr = [];
  arr.forEach(function(arr){
    if (func(arr)===true) {
      newArr.push(arr)
    }
  })
  return newArr;
}

// const filter = (arr,func) => arr.filter(func)

const twoPileSort = function(arr,func) {
  const pass = []
  const fail = []
  arr.forEach(function(arr){
    if (func(arr)) {
      pass.push(arr)
    } else {
      fail.push(arr)
    }
  })
  return [...pass, ...fail]
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const getTodoAndPriorityName = function (todo) {
  if (todo.priority === 1) {
    return `${todo.text} - Low`
  } else {
    return `${todo.text} - High`
  }
}

const isComplete = function(todo) {
  return todo.complete
}



const isHighPriority = function(todo) {
  return todo.priority === 2
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = (todos) => todos.map((todo)=> todo.text)

const namesAndPriorities = (todos) => todos.map((todo)=> todo.priority === 1 ? todo.text + ' - Low' : todo.text + ' - High')


const justNotComplete = (todos) => todos.filter((todo)=> todo.complete === false)

const justComplete = (todos) => todos.filter((todo)=> todo.complete)


const priority2Only = (todos) => todos.filter((todo)=> todo.priority === 2)



const priority1Only = (todos) => todos.filter((todo)=> todo.priority === 1)


const notCompleteFirst = (todos) => twoPileSort(todos,(todo) => todo.complete === false)


const priority2First = (todos) => twoPileSort(todos,(todo) => todo.priority===2)




module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}