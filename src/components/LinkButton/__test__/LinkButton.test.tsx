/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../stories/LinkButton.stories' // import all stories from the stories file

const { Primary } = composeStories(stories)

test('renders primary button with default args', () => {
  // Arrange
  render(<Primary />)
  // Act
  const buttonElement = screen.queryByText(/hello/i)
  // Assert
  expect(buttonElement).not.toBeNull()
})
