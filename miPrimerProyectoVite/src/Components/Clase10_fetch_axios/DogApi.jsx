import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DogApi = () => {
    const [dog, setDog] = useState({})
    const url = 'https://dog.ceo/api/breeds/image/random'

    const fetchApi = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setDog(data))
        .catch(err => console.log(err))
    }

    useEffect(fetchApi, [])

  return (
    <div>
        <button onClick={fetchApi}>Cambiar perrito</button>
        <img src={dog.message} />
    </div>
  )
}

export default DogApi