 
// function CompRecive(Props) {
//   console.log(Props)
//   return (
//         <div>
//           <h1>CompRecive Component</h1>
//           <p>{Props.x}</p>
//           <p>{Props.name}</p>
//           <p>{Props.a}</p>


//         </div>
//   )
// }

// export default CompRecive


function CompRecive({x,name,a}) {
  return (
    <div>
        <h1>CompRecive Component</h1>
        <p>{x}</p>
        <p>{name}</p>
        <p>{a}</p>


  </div>
  )
}

export default CompRecive