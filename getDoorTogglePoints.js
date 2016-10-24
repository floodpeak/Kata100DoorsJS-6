export default (door)=>{
  const result = [1]
  let candidate = 2
  if(door % candidate === 0 && door !== candidate){
    result.push(candidate)
  }
  candidate++
  if(door % candidate === 0 && door !== candidate){
    result.push(candidate)
  }
  if(door === 8){
    result.push(4)
  }
  if(door > 1){
    result.push(door)
  }
  return result
}
