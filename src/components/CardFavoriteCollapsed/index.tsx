import React from 'react'
import Typography from '@mui/material/Typography';

import ExpandMore from '../../assets/img/Arrow.svg'
import Favorite from '../../assets/img/Favorite.svg'

import { ICardProps } from "./interfaces";
import {
    Actions,
    ButtonAction,
    CardCollapsed,
    CardHeader,
    CardWrapper,
    Photo,
    PhotoIcon,
    PhotoIconsWrapper,
    PhotoWrapper
} from "./styled";

export default function CollapsedCard({ favoriteItem }: ICardProps) {
    return (
        <CardCollapsed>
            <CardWrapper>
                <CardHeader>
                    <PhotoWrapper>
                        <Photo src={favoriteItem.photo} alt="Photo place" />
                        <PhotoIconsWrapper>
                            <PhotoIcon src={favoriteItem.icon} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </PhotoWrapper>
                    <Typography variant="h3">{favoriteItem.name}</Typography>
                </CardHeader>
                <Typography variant="body2">{favoriteItem.description}</Typography>
                <Actions>
                    <ButtonAction >
                        <img src={Favorite} alt="Favorite" />
                    </ButtonAction>
                    <ButtonAction >
                        <img src={ExpandMore} alt="ExpandMore" />
                    </ButtonAction>
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}