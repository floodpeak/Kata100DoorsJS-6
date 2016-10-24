export default (door)=>{
  const result = [1]
  for(let candidate = 2;candidate <= door;candidate++){
    if(door % candidate === 0){
      result.push(candidate)
    }
  }
  return result
}
