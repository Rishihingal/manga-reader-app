import React from "react";

export const useMangaSearchApi = async (title) => {
  const mangaList = await fetch(`https://api.mangadex.org/manga?title=${title}`)
    .then((response) => response.json())
    .then((data) => {
      return data.data.map((manga) => ({
        id: manga.id,
        title: manga.attributes.title.en,
        description: manga.attributes.description.en,
        coverArtId: manga.relationships
          .filter((relationship) => relationship.type === "cover_art")
          .map((coverArt) => coverArt.id)[0],
      }));
    })
    .catch((error) => {
      console.log(error);
    });
  return mangaList;
};
