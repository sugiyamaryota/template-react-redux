import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../'

test('Button snapshot testing', () => {
    const component = renderer.create(
        <Button
            onClick={() => {
                console.log('ok')
            }}
        />
    )
    expect(component).toMatchInlineSnapshot(`
        <button
          onClick={[Function]}
        >
          button
        </button>
    `)
})
