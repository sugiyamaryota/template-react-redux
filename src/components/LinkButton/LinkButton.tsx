import React, { FC, ReactChild } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  page: string
  children: ReactChild
}

export const LinkButton: FC<Props> = ({ page, children }) => {
  return <Link to={page}>{children}</Link>
}
