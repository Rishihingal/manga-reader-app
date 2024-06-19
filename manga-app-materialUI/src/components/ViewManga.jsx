import { CardContent, CardMedia, Grid, Typography, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function ViewManga() {
  var mangaItem = useSelector((state) => state.manga.mangaItem);
  console.log(mangaItem);
  return (
    <Card
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "auto",
        flexGrow: 1,
        backgroundColor: "darkgray",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <CardMedia
            component="img"
            sx={{ width: 300, height: 400 }}
            image={mangaItem.coverImage}
            alt={`${mangaItem.title} cover art`}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs alignItems={"center"} justifyContent={"center"}>
              <Typography gutterBottom variant="h5" component="div">
                {mangaItem.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {mangaItem.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ViewManga;
