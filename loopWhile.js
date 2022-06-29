function padIt(str,n){
  //coding here
   let times = n;
  let result = str;

  while (times !== 0) {
    if (times % 2) {
      result = result.replace(/^/, "*");
    } else {
      result = result.replace(/$/, "*");
    }
    times -= 1;
  }
  return result;
}
