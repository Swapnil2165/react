import CompRecive from "./CompRecive";

function CompSend() {

  const x = 10;
  const y = 20;

  const name = "swapnil"
  return (
        <>
          <CompRecive x={x} name={name} a={y}/>
        </> 
  )    
}

export default CompSend