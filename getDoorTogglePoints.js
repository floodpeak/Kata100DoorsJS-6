export default (door)=>{
  const result = [1]
  if(door === 4){
    result.push(2)
  }
  if(door === 2 || door === 3 || door === 4){
    result.push(door)
  }
  return result
}
