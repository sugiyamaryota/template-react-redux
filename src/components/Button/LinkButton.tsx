import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    path: string
}

export const LinkButton: FC<Props> = ({ path }) => {
    return (
        <Link to={path}>
            button
        </Link>
    )
}