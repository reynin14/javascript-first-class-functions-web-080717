function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function callback(){
    "hi"
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    "hi"
  }
}
