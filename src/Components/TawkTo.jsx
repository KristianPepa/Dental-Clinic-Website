import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TawkTo = () => {
  const [data,setData] = useState()

  useEffect(() => {
    axios.get("d2e5314422812cd83edd6713378a87b0579faa6d")
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  })

  return (
    <div>tawk.to</div>
  )
}

export default TawkTo