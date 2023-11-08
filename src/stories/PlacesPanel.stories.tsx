import type { Meta, StoryObj } from '@storybook/react';
import PlacesPanel from '../components/PlacesPanel';
import { PLACES } from '../constants/places';

const meta = {
    title: 'SideBar/PlacesPanel',
    component: PlacesPanel,
    parameters: {
        layout: 'centered',
    },
    // tags: ['autodocs'],
    argTypes: {
        selectedPlaces: {
            type: 'string',
            description: 'Selected places',
            options: PLACES.map(place => place.name),
            control: {
                type: 'check',
                // multi-select
            }
        }
    },
} satisfies Meta<typeof PlacesPanel>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selectedPlaces: []
    }
}