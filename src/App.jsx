import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([])
  const [select , setSelect] = useState('movie')
  const [search ,setSearch] = useState((''))




  const getshows = async () => {
    try {
      await fetch(`https://api.themoviedb.org/3/search/${select ? select : 'Movie'}?api_key=135eb3a34d882755162302310bfdfc0b&query=${search}`)
        .then(res => res.json())
        .then(data => setData(data.results))
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getshows()
  }, [select])

  console.log(data)


  return (
    <div>
      <button onClick={() => setSelect('movie')}>Movie</button>
      <button onClick={() => setSelect('tv')}>Tv</button>
      {data.map((source) => (
      <>
      <h2>{source.title}</h2>
      <p>{source.vote_average}</p>
      <img 
        key={source.id}
        src={`https://image.tmdb.org/t/p/w500/${source.poster_path}`} 
        alt={source.title} />
      </>
        
      ))}
    </div>

  )
}

export default App
