import React from 'react'

function ApiFetch() {

    const getData = async () => {
        try{
            const response =await fetch("https://jsonplaceholder.thttps://jsonplaceholder.typicode.com/usersypicode.com/users")
            const data = await response.json()
            console.log(data);
        }catch(error){
            
        }
    }



  return (
    <>

    </>
  )
}

export default ApiFetch

// Url="https://jsonplaceholder.typicode.com/users"