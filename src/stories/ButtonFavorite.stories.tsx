import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonFavorite } from '../components/ButtonFavorite';
import Favorite from "../assets/img/Favorite.svg";

const meta = {
    title: 'Buttons/ButtonFavorite',
    component: ButtonFavorite,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        loading: {
            type: 'boolean',
            description: 'Loading',
            defaultValue: false
        },
        variant: {
            type: 'string',
            description: 'Variant',
        },
        size: {
            type: 'string',
            description: 'Size',
            defaultValue: 'medium',
            options: ['large', 'medium', 'small'],
            control: {
                type: 'select',
            }
        },
        children: {
            type: 'string',
            description: 'Label'
        },
    },
} satisfies Meta<typeof ButtonFavorite>;

export default meta

type Story = StoryObj<typeof meta>;

const startIcon = <img src={Favorite} alt="Favorite" />

export const Default: Story = {
    args: {
        loading: false,
        variant: 'outlined',
        size: 'medium',
        children: 'Default',
        startIcon: startIcon
    }
}

export const Loading: Story = {
    args: {
        loading: true,
        variant: "outlined",
        children: 'Loading',
        startIcon: startIcon 
    }
}

export const Large: Story = {
    args: {
        children: 'Large',
        variant: 'outlined',
        size: 'large',
        startIcon: startIcon
    }
}

export const Medium: Story = {
    args: {
        children: 'Medium',
        variant: 'outlined',
        size: 'medium',
        startIcon: startIcon 
    }
}

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'outlined',
        size: 'small',
        startIcon: startIcon 
    }
}