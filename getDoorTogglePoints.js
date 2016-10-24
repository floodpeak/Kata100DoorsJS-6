export default (door)=>{
  const result = [1]
  if(door === 4){
    result.push(2,4)
  }
  if(door === 2 || door === 3){
    result.push(door)
  }
  return result
}
