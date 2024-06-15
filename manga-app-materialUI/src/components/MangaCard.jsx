import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function MangaCard({coverArtId, Title, description, mangaId}) {
 const [imageUrl, setImageUrl] = useState('')

  const getCoverimage = async () => {
    const coverImage = await fetch(`https://api.mangadex.org/cover/${coverArtId}`).then(response => response.json()).then(data => {
      let fileName = data.data.attributes.fileName
      const url = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`
      return url
    }).catch(error => {
      console.log(error)
    })
    setImageUrl(coverImage)
  }
  getCoverimage();

  return (
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea onClick={()=>console.log(description.length)}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={512}
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title.length > 20 ? Title.substring(0, 17) + '...' : Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 381 ? description.substring(0, 378) + '...' : description}
        </Typography>
    </CardContent>
  </CardActionArea>
</Card>

)
}

export default MangaCard
