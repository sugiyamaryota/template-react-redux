import useRequest from 'hooks/useRequest'

const { request, noAuthRequest } = useRequest()

export const getUserInfoAPI = async () => {
  return request({
    url: `/users/sugiyamaryota`,
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error('request error', error)
      throw new Error(error)
    })
}
