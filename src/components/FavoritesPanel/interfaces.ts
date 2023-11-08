import { IFavorite } from "../../interfaces/IFavorite"

export interface IFavoritePanelProps {
    favorites: IFavorite[]
    selectedFavoriteId: string
}