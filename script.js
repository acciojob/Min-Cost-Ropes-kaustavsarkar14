function mincost(arr)
{ 
//write your code here
// return the min cost
	 if (!arr || arr.length === 0) {
    return 0;
  }
  let total = 0
  while(arr.length>1){
    const min1 = Math.min(...arr)
    const min1_ind = arr.indexOf(min1)
    arr.splice(min1_ind,1)

    const min2 = Math.min(...arr)
    const min2_ind = arr.indexOf(min2)
    arr.splice(min2_ind,1)

    total = total + min1 + min2
    arr.push(min1+min2)

  } 
  return total
}

module.exports=mincost;
