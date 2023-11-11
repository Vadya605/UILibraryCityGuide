import React from 'react';

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

import BackIcon from '../../assets/img/Arrow.svg'
import CollapsedCard from "../CardFavoriteCollapsed";
import ExpandedCard from "../CardFavoriteExpanded";

import { ButtonBack, HeaderPanel } from "./styled";
import { IFavoritePanelProps } from './interfaces';

export default function FavoritesPanel({ selectedFavoriteId, favorites }: IFavoritePanelProps) {
    const selectedFavorite = favorites.length && favorites.find(item => item.place_id === selectedFavoriteId)

    const renderCollapsedCards = () => {
        return favorites.map(favoriteItem => (
            <CollapsedCard
                favoriteItem={favoriteItem}
                key={favoriteItem.place_id}
            />
        ))
    }

    return (
        <Box>
            <HeaderPanel>
                {selectedFavorite && <ButtonBack><img src={BackIcon} alt='Back' /></ButtonBack>}
                <Typography variant='h2'>Избранное</Typography>
            </HeaderPanel>
            {
                selectedFavorite ? (
                    <ExpandedCard
                        favoriteItem={selectedFavorite}
                        key={selectedFavorite.place_id}
                    />
                ) : (
                    renderCollapsedCards()
                )
            }
        </Box>
    )
}