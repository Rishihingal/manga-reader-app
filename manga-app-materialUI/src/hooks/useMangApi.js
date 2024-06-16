
export const useMangApi = async () => {
    try {
        const response = await fetch('https://api.mangadex.org/manga');
        const data = await response.json();
        return data.data.map(manga => ({
            id: manga.id,
            title: manga.attributes.title.en,
            description: manga.attributes.description.en,
            coverArtId: manga.relationships.filter(relationship => relationship.type === 'cover_art').map(coverArt => coverArt.id)[0],
        }));
    } catch (error) {
        console.log(error);
        return [];
    }
};
