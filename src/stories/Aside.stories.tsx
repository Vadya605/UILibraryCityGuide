import type { Meta, StoryObj } from '@storybook/react';
import Aside from '../components/Aside';

const meta = {
    title: 'SideBar/Aside',
    component: Aside,
    parameters: {
        layout: 'centered',
    },
    // tags: ['autodocs'],
    argTypes: {
        selectedSection: {
            type: 'string',
            options: ['search', 'favorite'],
            control: {
                type: 'select'
            }
        }
    },
} satisfies Meta<typeof Aside>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selectedSection: ''
    }
}

export const ActiveSearch: Story = {
    args: {
        selectedSection: 'search'
    }
}

export const ActiveFavorite: Story = {
    args: {
        selectedSection: 'favorite'
    }
}