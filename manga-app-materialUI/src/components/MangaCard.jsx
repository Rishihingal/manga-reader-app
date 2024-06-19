import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMangaItem } from "../feature/mangadex/mangaSlice";

function MangaCard({ coverArtId, Title, description, mangaId }) {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const getCoverimage = async () => {
    const coverImage = await fetch(
      `https://api.mangadex.org/cover/${coverArtId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        let fileName = data.data.attributes.fileName;
        const url = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
    setImageUrl(coverImage);
  };
  getCoverimage();

  var mangaItem = {
    coverImage: imageUrl,
    title: Title,
    description: description,
  };

  const handleSelectManga = (mangaItem) => {
    dispatch(setMangaItem(mangaItem));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleSelectManga(mangaItem)}>
        <CardMedia
          component="img"
          alt={`${Title} cover art`}
          height={512}
          width={241}
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MangaCard;
