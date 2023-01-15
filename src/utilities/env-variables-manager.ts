export const getEnvVariables = ()=>{
    
    const formatEnvVariables = {
        PROTOCOL : import.meta.env.VITE_PROTOCOL,
        DOMAIN : import.meta.env.VITE_DOMAIN,
        PORT : import.meta.env.VITE_PORT,
        API : import.meta.env.VITE_API_VERSION,
    }

    return formatEnvVariables
}