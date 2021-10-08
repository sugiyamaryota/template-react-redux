import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import { LinkButton } from '../'

storiesOf('Example/LinkButton', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('LinkButton', () => <LinkButton page={'/'}>test</LinkButton>)
