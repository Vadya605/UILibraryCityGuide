import React, { useState } from 'react';

import Typography from '@mui/material/Typography';

import Favorite from '../../assets/img/Favorite.svg';
import Geo from '../../assets/img/Geo.svg';
import { ButtonFavorite } from "../ButtonFavorite";
import { ButtonRoute } from '../ButtonRoute';

import { ICardProps } from './interfaces';
import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, PhotoWrapper } from "./styled";

export default function ExpandedCard({ favoriteItem }: ICardProps) {
    
    const [loading, setLoading] = useState<boolean>(false)
    
    return (
        <CardExpanded data-testid='card-expanded'>
            <CardWrapper>
                <CardHeader>
                    <PhotoWrapper>
                        <Photo src={favoriteItem.photo} alt="Photo place" />
                        <PhotoIconsWrapper>
                            <PhotoIcon src={favoriteItem.icon} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </PhotoWrapper>
                    <Typography variant='h1' >{favoriteItem.name}</Typography>
                </CardHeader>
                <Typography variant='body1'>{favoriteItem.description}</Typography>
                <Actions>
                    <ButtonFavorite startIcon={<img src={Favorite} alt="Favorite" />} loading={loading}>
                        <Typography variant='button' >Удалить</Typography>
                    </ButtonFavorite>
                    <ButtonRoute startIcon={<img src={Geo} alt="Geo" />} variant='contained'>
                        <Typography variant='button' >Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}