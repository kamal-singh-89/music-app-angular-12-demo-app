export interface IMusic {
    recently: IMusicAlbum[]
}

export interface IMusicAlbum {
    artist: string,
    image: string,
    song: string
}
