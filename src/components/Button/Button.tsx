import React, { FC } from 'react'

interface Props {
  onClick: () => void
}

export const Button: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>button</button>
}
