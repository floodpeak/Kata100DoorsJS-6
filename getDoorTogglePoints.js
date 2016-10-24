export default (door)=>{
  if(door === 4){
    return [1,2,4]
  }
  if(door === 2 || door === 3){
    return [1,door]
  }
  return [1]
}
