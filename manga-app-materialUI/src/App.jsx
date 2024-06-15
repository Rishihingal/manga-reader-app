import { useSelector } from 'react-redux'
import './App.css'
import MangaCard from './components/MangaCard'
import Navbar from './components/Navbar'
import { Grid } from '@mui/material'
import { useState } from 'react'

async function fetchManga(func) {
  
   func(await useSelector(state => state.manga))
}

function App() {
 const [mangaList, setMangaList] = useState([])
  fetchManga(setMangaList)
  return (
<>
    <Navbar />
    <br />
    <Grid container spacing={3}>
      {mangaList.map((manga) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={manga.id} padding={3}>
        <MangaCard coverArtId={manga.coverArtId} Title={manga.title} description={manga.description} mangaId={manga.id} />
        </Grid>
      ))}
    </Grid>
</>
  )
}

export default App
