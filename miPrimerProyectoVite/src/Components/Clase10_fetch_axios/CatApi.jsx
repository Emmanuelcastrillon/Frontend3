import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CatApi = () => {
    const [cat, setCat] = useState({})
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url)
        .then(res => setCat(res.data[0]))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <img src={cat.url} alt="" />
    </div>
  )
}

export default CatApi