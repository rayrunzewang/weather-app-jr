export function currentDate (){
  const currentTimeMs = Date.now();
  const result = new Date(currentTimeMs);

  const year = result.getFullYear();
  const month = result.getMonth() + 1; 
  const day = result.getDate();

  return `${day} / ${month} / ${year}`
}