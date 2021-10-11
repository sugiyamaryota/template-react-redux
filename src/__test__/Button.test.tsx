/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../stories/Button.stories' // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary } = composeStories(stories)

test('renders primary button with default args', () => {
  render(<Primary>Hello world</Primary>)
  const buttonElement = screen.queryByText(/Hello world/i)
  expect(buttonElement).not.toBeNull()
})

test('renders primary button with overriden props', () => {
  render(<Primary>Hello world</Primary>) // you can override props and they will get merged with values from the Story's args
  const buttonElement = screen.queryByText(/Hello world/i)
  expect(buttonElement).not.toBeNull()
})
