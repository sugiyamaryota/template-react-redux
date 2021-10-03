import React from 'react'
import { UserType } from 'modules/userModules'

export const Presenter: React.FC<UserType> = ({ avatar_url, name, url }) => {
    return (
        <div>
            TOP<br/>
            {avatar_url}<br/>
            {name}<br/>
            {url}
        </div>
    )
}
