import Links from "./links"

export default function Menu({setIsOpen}) {
    return (
        <div className=" h-screen flex md:hidden p-1 bg-zinc-900  flex-col gap-4" onClick={() => setIsOpen(false)}>
            <Links />
        </div>
    )
}