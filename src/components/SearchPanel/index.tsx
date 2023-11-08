import React from 'react'

import {Typography} from '@mui/material';

import Search from '../svg/Search'

import PlacesPanel from '../PlacesPanel';
import { ButtonSearch, RadiusBox, RadiusInput, SearchPanelWrapper } from './styled'
import { ISearchPanelProps } from './interfaces';

export default function SearchPanel({ selectedPlaces }: ISearchPanelProps) {
    return (
        <SearchPanelWrapper data-testid='search-panel'>
            <Typography variant='h2'>Искать</Typography>
            <PlacesPanel selectedPlaces={selectedPlaces} />
            <Typography variant='h2'>В радиусе</Typography>
            <RadiusBox>
                <RadiusInput name='radius' id='radius' />
                <Typography variant='h3'>км</Typography>
            </RadiusBox>
            <ButtonSearch data-testid='button-search'>
                <Search />
            </ButtonSearch>
        </SearchPanelWrapper>
    )
}