import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Meta, storiesOf } from '@storybook/react'

import { LinkButton } from '../'

// storiesOf('Example/LinkButton', module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
//   ))
//   .add('LinkButton', () => <LinkButton page={'/'}>test</LinkButton>)

export default {
  title: 'Example/LinkButton',
  decorators: [
    Story => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} as Meta

export const showLinkButton = () => <LinkButton page={'/'}>test</LinkButton>
