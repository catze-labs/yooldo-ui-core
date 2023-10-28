import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const ButtonFillSunset: Story = {
  name: 'button-fill-sunset',
  args: {
    size: 'base',
    color: 'sunset',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFillBlue: Story = {
  name: 'button-fill-blue',
  args: {
    size: 'base',
    color: 'blue',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFillWhite: Story = {
  name: 'button-fill-white',
  args: {
    size: 'base',
    color: 'white',
    variant: 'fill',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonFillPurple: Story = {
  name: 'button-fill-purple',
  args: {
    size: 'base',
    color: 'purple',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFillGreen: Story = {
  name: 'button-fill-green',
  args: {
    size: 'base',
    color: 'green',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonOutlineSunset: Story = {
  name: 'button-outline-sunset',
  args: {
    size: 'base',
    color: 'sunset',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlineBlue: Story = {
  name: 'button-outline-blue',
  args: {
    size: 'base',
    color: 'blue',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlineWhite: Story = {
  name: 'button-outline-white',
  args: {
    size: 'base',
    color: 'white',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlinePurple: Story = {
  name: 'button-outline-purple',
  args: {
    size: 'base',
    color: 'purple',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlineGreen: Story = {
  name: 'button-outline-green',
  args: {
    size: 'base',
    color: 'green',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};
