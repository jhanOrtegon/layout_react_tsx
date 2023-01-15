import { useState } from 'react'
import { AxiosInterceptor } from "@/interceptors"

export const useHttpPost = () => {

    const [HttpPostResult, setHttpPostResult] = useState({})
    const [HttpPostLoading, setHttpPostLoading] = useState(false)

    const HttpPost = async (url: string, params?: any) => {
        try {
            setHttpPostLoading(true)
            const results = await AxiosInterceptor.post(url, params)
            setHttpPostResult(results)
            setHttpPostLoading(false)
        } catch (error: any) {
            console.log(error, 'error')
            setHttpPostResult(error)
            setHttpPostLoading(false)
        }
    }

    return {
        HttpPost,
        HttpPostResult,
        HttpPostLoading
    }

}
