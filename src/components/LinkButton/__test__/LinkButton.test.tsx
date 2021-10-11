/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../stories/LinkButton.stories' // import all stories from the stories file

const { Primary } = composeStories(stories)

test('renders primary button with default args', () => {
  render(<Primary />)
  const buttonElement = screen.queryByText(/hello/i)
  expect(buttonElement).not.toBeNull()
})
