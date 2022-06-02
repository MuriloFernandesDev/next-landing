import { Embed } from './Embed'
import { Icons } from './Icons'
import { Clients } from './Clients'
import { Main } from './Main'
import { Resellers } from './Resellers'

export function Home() {
    return (
        <>
            <Main />
            <Embed />
            <Icons />
            <Clients />
            <Resellers />
        </>
    )
}
