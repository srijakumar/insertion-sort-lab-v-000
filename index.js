function findMinAndRemove(array){

  var min = array.reduce(
    function(a,b){
      return Math.min(a,b)
    }
  )

  array.slice(indexOf(min),1)

}

function insertionSort(array){

}
