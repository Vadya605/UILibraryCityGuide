import type { Meta, StoryObj } from '@storybook/react';
import FavoritesPanel from '../components/FavoritesPanel';
import { favorites } from '../constants/favorites';

const meta = {
    title: 'SideBar/FavoritesPanel',
    component: FavoritesPanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        favorites: {

        },
        selectedFavoriteId: {
            type: 'string',
            defaultValue: ''
        }
    },
} satisfies Meta<typeof FavoritesPanel>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        favorites: favorites,
        selectedFavoriteId: ''
    }
}

export const selectedFavorite: Story = {
    args: {
        favorites: favorites,
        selectedFavoriteId: 'place_id'
    }
}