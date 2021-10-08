import React from 'react'
import { UserType } from 'modules/userModules'
import { LinkButton, Button } from 'components/Button'

export const Presenter: React.FC<UserType> = ({ avatar_url, name, url }) => {
  return (
    <div>
      TOP
      <br />
      {avatar_url}
      <br />
      {name}
      <br />
      {url}
      <br />
      <LinkButton page={'/archive'}>test</LinkButton>
      <Button
        onClick={() => {
          console.log('ok')
        }}
      />
    </div>
  )
}
