 
function Main() {

    const a = "x+y";

    const name="swapnil";

        function greet (x) {
            return `hi ${x}`
        }

        const url = "https://picsum.photos/id/237/200/300"


        const item=["item1","item2","item3"]

        const mapped=item.map((items) => {
                    return<li>{items}</li>
        })

  return (
    <div>
        <div>{10+20}</div>
        <div>{name}</div>
        <div>{greet("Good Morning")}</div>
        <img src={url}/>
        <div>
            <ol>
                {item.map((item) =>{
                    return<li>{item} </li>
                }

                )}
            </ol>
            <div>
                <ul>
                    {mapped}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Main;