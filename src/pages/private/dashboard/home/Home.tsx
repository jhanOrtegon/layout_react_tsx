import { useUser, useHttpGet, useHttpPost, useStore } from "@/hooks"
import { LayoutHome } from "./styled-components"

const Home = () => {

    const {
        onCreateUser,
        getUserStore,
        onUpdateUser,
        onResetUser
    } = useUser()

    const {
        HttpGet,
        HttpGetLoading,
        HttpGetResult
    } = useHttpGet()

    const {
        HttpGet: HttpGetRick,
        HttpGetLoading: HttpGetLoadingRick,
        HttpGetResult: HttpGetResultRick
    } = useHttpGet()


    return (
        <LayoutHome
            background={"primary"}
        >
            <button
                onClick={() => {
                    HttpGet('/character')
                }}
            >
                fetch Rick And Mort
            </button>

            <button
                onClick={() => {
                    HttpGetRick('/character/10')
                }}
            >
                fetch Rick And Mort 10
            </button>

            <button
                onClick={() => onCreateUser({ id: '1', name: 'jhan Carlos' })}
            >
                create user
            </button>

            <hr />

            <button
                onClick={() => onUpdateUser({ id: '10', name: 'jhan' })}
            >
                update user
            </button>

            <hr />

            <button
                onClick={() => onResetUser()}
            >
                reset user
            </button>

            <hr />

            <h1>users</h1>
            {JSON.stringify(getUserStore)}
            <hr />
            {JSON.stringify(HttpGetResultRick)}
            <hr />
            {JSON.stringify(HttpGetResult)}

        </LayoutHome>
    )
}

export default Home