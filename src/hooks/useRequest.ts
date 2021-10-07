import axios from 'axios'

const client = axios.create({
    baseURL: process.env.API_BASE_URL
})

export default function useRequest() {
    async function request(config: any, header?: boolean) {

        const requestConfig = { ...config, headers: config.headers || {}}
        const headers = requestConfig.headers

        if(headers['content-type']){
            requestConfig.headers['content-type'] = headers['content-type']
        }
        try {
            const result = await client(requestConfig)
            if(header) return {headers: result.headers, data: result}
            return result
        } catch(error) {
            console.error('error', requestConfig)
            throw error
        }
    }
    async function noAuthRequest(config: any) {

        const requestConfig = { ...config, headers: config.headers || {}}
        try {
            const result = await client(requestConfig)
            return result
        } catch(error) {
            console.error('error', requestConfig)
            throw error
        }
    }
    return { request, noAuthRequest}
}