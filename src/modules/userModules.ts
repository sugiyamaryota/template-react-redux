import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store, RootState } from 'store/store'
import { getUserInfoAPI } from 'api/Endpoints'

export interface UserType {
  avatar_url: string
  name: string
  url: string
}

const initialState = {
  loading: false,
  error: null,
  result: {},
}

type Reducer = {
  getSuccessInfo: (state: any, action: PayloadAction<Object>) => void
  getStart: (state: any, action: PayloadAction<Array<Object>>) => void
  getFailure: (state: any, action: PayloadAction<Array<Object>>) => void
}

const userModules = createSlice<any, Reducer>({
  name: 'userInfo',
  initialState,
  reducers: {
    getSuccessInfo: (state, action) => {
      state.loading = false
      state.error = null
      state.result = action.payload
    },
    getStart: (state, action) => {
      state.loading = true
      state.error = null
      state.result = null
    },
    getFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getSuccessInfo, getStart, getFailure } = userModules.actions

export const getUserInfo =
  (successCallback = null, failureCallback = null, isForceFetch = false) =>
  async dispatch => {
    try {
      await dispatch(getStart())
      await dispatch(getSuccessInfo(await getUserInfoAPI()))
      if (successCallback) successCallback(store.getState().userModules.result)
    } catch (error) {
      await dispatch(getFailure())
      if (failureCallback) failureCallback(store.getState().userModules.error)
    }
  }

export const selectUserInfo = (state: RootState) => state.userModules
export default userModules
