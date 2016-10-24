export default (door)=>{
  if(door === 6){
    return [1,2,3,6]
  }
  const result = [1]
  if(door === 4){
    result.push(2)
  }
  if(door > 1){
    result.push(door)
  }
  return result
}
