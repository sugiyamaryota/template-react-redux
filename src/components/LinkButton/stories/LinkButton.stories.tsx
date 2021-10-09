import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Meta } from '@storybook/react'

import { LinkButton } from '../'

/**
 * storiesOf
 * storiesOfをimportします。
 */
// storiesOf('Example/LinkButton', module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
//   ))
//   .add('LinkButton', () => <LinkButton page={'/'}>test</LinkButton>)

/**
 * SCF
 */
export default {
  title: 'Example/LinkButton',
  decorators: [
    Story => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} as Meta

export const Primary = () => <LinkButton page={'/'}>test</LinkButton>
