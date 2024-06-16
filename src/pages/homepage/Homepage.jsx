import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { testAPI } from '../../apis/Api'

const Homepage = () => {

    useEffect(()=>{
        console.log("Hello!!!")

        //trigger testAPI
        testAPI().then((res)=>{
            console.log(res) //Test API is working!!
        })
    })

  return (
    <div>
      
    </div>
  )
}

export default Homepage
