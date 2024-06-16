import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import MangaCard from './components/MangaCard'
import Navbar from './components/Navbar'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ViewManga from './components/ViewManga'
import { fetchMangaList } from './feature/mangadex/mangaSlice'


function App() {
  const dispatch = useDispatch()
  const status = useSelector(state => state.manga.status)
  const mangaList = useSelector(state => state.manga.manga)
  const error = useSelector(state => state.manga.error)
  const isMangaSelected = useSelector(state => state.manga.isMangaSelected)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMangaList())
    }
  }, [status, dispatch])
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }
  
  return (
<>
    <Navbar />
    <br />
    {!isMangaSelected ? <Grid container spacing={1}>
      {mangaList.map((manga) => (
        <Grid item xs={12} sm={3} md={2} lg={2} key={manga.id} padding={3}>
        <MangaCard key={manga.id} coverArtId={manga.coverArtId} Title={manga.title} description={manga.description} mangaId={manga.id} />
        </Grid>
      ))}
    </Grid> : <ViewManga />}
</>
  )
}

export default App
