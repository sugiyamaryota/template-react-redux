import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo, UserType } from 'modules/userModules'
import { Presenter } from './presenter'

export default () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({} as UserType)
  useEffect(() => {
    dispatch(
      getUserInfo(result => {
        setUserInfo(result)
      })
    )
  }, [])

  return (
    <Presenter
      avatar_url={userInfo.avatar_url}
      name={userInfo.name}
      url={userInfo.url}
    />
  )
}
