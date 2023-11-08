import { IFavorite } from "../../interfaces/IFavorite";

export interface ISideBarProps {
    isOpen: boolean,
    selectedSection: string,
    selectedPlaces: string[],
    favorites: IFavorite[],
    selectedFavoriteId: string
}