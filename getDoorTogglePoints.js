export default (door)=>{
  const result = [1]
  let candidate = 2
  while(candidate < door){
    if(door % candidate === 0 && door !== candidate){
      result.push(candidate)
    }
    candidate++
  }
  if(door > 1){
    result.push(door)
  }
  return result
}
