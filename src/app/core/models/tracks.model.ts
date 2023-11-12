import { ArtistModel } from "./artist.model";

export interface TackModel {
    name: string;
    album: string;
    cover: string;
    duration: number;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}