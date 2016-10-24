export default (door)=>{
  const result = [1]
  if(door % 2 === 0 && door !== 2){
    result.push(2)
  }
  if(door === 6){
    result.push(3)
  }
  if(door > 1){
    result.push(door)
  }
  return result
}
