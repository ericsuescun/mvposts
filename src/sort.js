const invrsSort = (arry, polarity) => {
  if(polarity) {
    return arry.sort(function(a,b) { return b.votes - a.votes });
  } else {
    return arry.sort(function(a,b) { return a.votes - b.votes });  
  }
}

export default invrsSort;