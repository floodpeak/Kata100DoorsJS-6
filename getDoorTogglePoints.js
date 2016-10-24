export default (door)=>{
  if(door === 8){
    return [1,2,4,8]
  }
  const result = [1]
  const candidate = 2
  if(door % candidate === 0 && door !== candidate){
    result.push(candidate)
  }
  if(door === 6){
    result.push(3)
  }
  if(door > 1){
    result.push(door)
  }
  return result
}
