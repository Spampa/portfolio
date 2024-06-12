import SidebarContainer from "./sidebarContainer"
import Image from "next/image"

export default function Hero() {
    return(
        <div className="bg-sky-400 text-black h-screen flex place-content-center" id="#about">
            <div className="container p-3 grid xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 place-content-start xl:place-content-center order-2 xl:order-1">
                    <h1 className="hidden xl:block font-bold text-3xl">Hello I'm <span className=" font-bold">Nicolò Spampatti</span></h1>
                    <h2 className="font-semibold text-xl md:text-2xl">I am a passionate Fullstack Developer with a deep love for computer science.</h2>
                    <SidebarContainer children={<h3 className="text-base md:text-xl text-justify">In this space, you can explore the projects I've worked on, the skills I've developed, and the experiences that have shaped my career over the years.</h3>}/>
                </div>
                <div className="flex flex-col gap-2 place-content-end xl:place-content-center items-center order-1 xl:border-none border-b-2 p-4 border-amber-300 rounded-sm">
                    <Image
                        src="/me.jpg"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                    <div className="block xl:hidden">
                        <h1 className="font-bold text-2xl md:text-3xl">Nicolò Spampatti</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}