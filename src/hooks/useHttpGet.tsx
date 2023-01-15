import { useState } from 'react'
import { AxiosInterceptor } from "@/interceptors"

export const useHttpGet = () => {

    const [HttpGetResult, setHttpGetResult] = useState({})
    const [HttpGetLoading, setHttpGetLoading] = useState(false)

    const HttpGet = async (url: string, params?: any) => {
        try {
            setHttpGetLoading(true)
            const results = await AxiosInterceptor.get(url, params)
            setHttpGetResult(results)
            setHttpGetLoading(false)
        } catch (error: any) {
            console.log(error, 'error')
            setHttpGetResult(error)
            setHttpGetLoading(false)
        }
    }

    return {
        HttpGet,
        HttpGetResult,
        HttpGetLoading
    }

}
