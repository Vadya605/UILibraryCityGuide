import type { Meta, StoryObj } from '@storybook/react';
import { ButtonRoute } from '../components/ButtonRoute';

const meta = {
    title: 'Buttons/ButtonRoute',
    component: ButtonRoute,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
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
        },
    },
} satisfies Meta<typeof ButtonRoute>;

export default meta

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        variant: 'contained',
        children: 'Default',
    }
}

export const Large: Story = {
    args: {
        children: 'Large',
        variant: 'contained',
        size: 'large',
    }
}

export const Medium: Story = {
    args: {
        children: 'Medium',
        variant: 'contained',
        size: 'medium',
    }
}

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'contained',
        size: 'small',
    }
}