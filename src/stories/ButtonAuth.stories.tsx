import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAuth } from '../components/ButtonAuth';

const meta = {
    title: 'Buttons/ButtonAuth',
    component: ButtonAuth,
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
            options: ['contained', 'outlined', 'text'],
            defaultValue: 'contained',
            control: {
                type: 'select'
            }
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
        }
    },
} satisfies Meta<typeof ButtonAuth>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        loading: false,
        variant: 'contained',
        size: 'medium',
        children: 'Default',
    }
}

export const Contained: Story = {
    args: {
        variant: 'contained',
        children: 'Contained'
    }
}

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outtlined'
    }
}

export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Text'
    }
}

export const Loading: Story = {
    args: {
        loading: true,
        variant: 'contained',
        children: 'Loading',
    }
}

export const Large: Story = {
    args: {
        children: 'Large',
        variant: 'contained',
        size: 'large'
    }
}

export const Medium: Story = {
    args: {
        children: 'Medium',
        variant: 'contained',
        size: 'medium'
    }
}

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'contained',
        size: 'small'
    }
}