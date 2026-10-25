function booWho(item){
  if (typeof item =="boolean"){
    return true;
  }
  else{
    return false;
  }
}

console.log(booWho(true));
console.log(booWho([1,2,3]));