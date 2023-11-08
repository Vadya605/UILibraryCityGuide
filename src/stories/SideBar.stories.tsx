import type { Meta, StoryObj } from '@storybook/react';
import SideBar from '../components/SideBar';
import { PLACES } from '../constants/places';
import { favorites } from '../constants/favorites';

const meta = {
    title: 'SideBar/SideBar',
    component: SideBar,
    parameters: {
        layout: 'centered',
    },
    // tags: ['autodocs'],
    argTypes: {
        isOpen: {
            type: 'boolean',
            description: 'Is open',
            defaultValue: false
        },
        selectedSection: {
            type: 'string',
            description: 'Selected section',
            options: ['search', 'favorite'],
            control: {
                type: 'select'
            }
        },
        selectedPlaces: {
            type: 'string',
            description: 'Selected places',
            options: PLACES.map(place => place.name),
            control: {
                type: 'check',
                // multi-select
            }
        },
        selectedFavoriteId: {
            type: 'string',
            description: 'Selected favorite id',
            defaultValue: '',
        }
    },
} satisfies Meta<typeof SideBar>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: false,
        selectedSection: '',
        selectedPlaces: [],
        favorites: favorites,
        selectedFavoriteId: ''
    }
}

export const ActiveSearch: Story = {
    args: {
        isOpen: true,
        selectedSection: 'search',
        selectedPlaces: [],
        favorites: favorites,
        selectedFavoriteId: ''
    }
}

export const ActiveFavorite: Story = {
    args: {
        isOpen: true,
        selectedSection: 'favorite',
        selectedPlaces: [],
        favorites: favorites,
        selectedFavoriteId: ''
    }
}