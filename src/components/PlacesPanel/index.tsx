import React from 'react'
import { Typography } from '@mui/material'
import { PLACES } from '../../constants'
import { Place, Places, PlacesWrapper } from "./styled"
import { IPlacesPanelProps } from './interfaces'

export default function PlacesPanel({ selectedPlaces }: IPlacesPanelProps) {
    return (
        <Places>
            <PlacesWrapper>
                {PLACES.map(place =>
                    <Place
                        key={place.name}
                        isSelected={selectedPlaces.includes(place.name)}
                    >
                        <img src={place.icon} alt="Place icon" />
                        <Typography variant='h4'>{place.name}</Typography>
                    </Place>
                )}
            </PlacesWrapper>
        </Places>
    )
}