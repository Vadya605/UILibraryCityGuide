import React, { useState } from 'react'
import { ListItem } from '@mui/material'

import Favorite from '../svg/Favorite'
import Search from '../svg/Search'
import ExitIcon from '../../assets/img/Exit.svg'
import LogoIcon from '../../assets/img/Logo.svg'
import { AsideButtonFavorites, AsideButtonSearch, AsideWrapper, AvatarAside, Column, Exit, ListSections, Logo } from "./styled"
import { AsideProps } from './interfaces'

export default function Aside({ selectedSection }: AsideProps) {
    return (
        <AsideWrapper className='aside'>
            <Logo>
                <img src={LogoIcon} alt="Logo" />
            </Logo>
            <Column>
                <ListSections>
                    <ListItem disablePadding>
                        <AsideButtonSearch isActive={selectedSection === 'search'}>
                            <Search />
                        </AsideButtonSearch>
                    </ListItem>
                    <ListItem disablePadding>
                        <AsideButtonFavorites isActive={selectedSection === 'favorite'}>
                            <Favorite />
                        </AsideButtonFavorites>
                    </ListItem>
                </ListSections>
                <Exit>
                    <img src={ExitIcon} alt="ExitIcon" />
                </Exit>
            </Column>
        </AsideWrapper>
    )
}