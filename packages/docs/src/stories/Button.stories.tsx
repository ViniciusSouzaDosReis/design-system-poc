import { Button, ButtonProps } from '@poc-design-system-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
