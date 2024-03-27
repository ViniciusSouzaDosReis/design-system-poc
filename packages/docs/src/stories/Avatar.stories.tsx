import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@poc-design-system-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ViniciusSouzaDosReis.png',
    alt: 'Vinicius Souza dos Reis',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
