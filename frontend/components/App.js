import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const axiosURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

function App() {
  const [apod, setApod] = useState()
  
  useEffect(() => {
    function fetchPhoto() {
      axios.get(axiosURL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
      // fetchPhoto()
      setApod({
        "copyright": "Markus Horn",
        "date": "2024-04-26",
        "explanation": "In northern hemisphere spring, bright star Regulus is easy to spot above the eastern horizon. The alpha star of the constellation Leo, Regulus is the spiky star centered in this telescopic field of view. A mere 79 light-years distant, Regulus is a hot, rapidly spinning star that is known to be part of a multiple star system. Not quite lost in the glare, the fuzzy patch just below Regulus is diffuse starlight from small galaxy Leo I. Leo I is a dwarf spheroidal galaxy, a member of the Local Group of galaxies dominated by our Milky Way Galaxy and the Andromeda Galaxy (M31). About 800 thousand light-years away, Leo I is thought to be the most distant of the known small satellite galaxies orbiting the Milky Way. But dwarf galaxy Leo I has shown evidence of a supermassive black hole at its center, comparable in mass to the black hole at the center of the Milky Way.",
        "hdurl": "https://apod.nasa.gov/apod/image/2404/Regulus_Dwarf_by_Markus_Horn2048.png",
        "media_type": "image",
        "service_version": "v1",
        "title": "Regulus and the Dwarf Galaxy",
        "url": "https://apod.nasa.gov/apod/image/2404/Regulus_Dwarf_by_Markus_Horn1024.png"
    })
    }, [])
  
  return (
    apod && 
    <section>
      <Card 
        title={apod.title} 
        text={apod.explanation} 
        importURL={apod.url} 
        date={apod.date} 
      />
    </section>
  )
}

export default App
