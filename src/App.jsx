import { useState, useEffect } from 'react'

const API_FACT = `https://catfact.ninja/fact`;
const API_IMAGE = `https://cataas.com/cat/says/`;


export const App = () => {

  const [fact, setFact] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(API_FACT)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      });

    const firstThreeWorld = fact.split(' ').slice(0, 3).join(' '); 
    console.log(firstThreeWorld);

    fetch(API_IMAGE + {firstThreeWorld}).then(res => {
      setImage(res.url)
    } )
      
  }, [])



  return (

    <>
      <h1>CatsApp</h1>
      <hr />

      {fact && <h2>{fact}</h2>}
      {image && <img src={image} alt="cat" />}  
      
    </>

  )
}