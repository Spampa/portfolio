import Image from "next/image"
import Link from "next/link"

export default function Projects() {
    return(
        <div className="bg-green-400 min-h-screen py-14 flex items-center" id="projects">
            <div className="container flex flex-col gap-2">
                <h2 className="text-3xl font-bold ">Projects</h2>
                <div className="grid grid-sols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="grid grid-rows-2 border-green-800 border-2 rounded-md">
                        <div className="bg-green-100 rounded-t-md p-2 min-h-36 flex items-center place-content-center">
                            <Image
                                src="/GH.png"
                                alt="Green Hortus"
                                width={100}
                                height={100}
                                className="shadow-md rounded-full"
                            />
                        </div>
                        <div className="bg-white text-black rounded-b-md p-2">
                            <Link href="https://greenhortus.life" target="_blank">
                                <h2 className="text-lg font-bold text-violet-800">Green Hortus</h2>
                            </Link>
                            <p className="text-base">
                                Our <span className="font-bold">React-based</span> greenhouse management system utilizes real-time weather data API integration 
                                to monitor plant health and optimize growing conditions. With an intuitive interface, 
                                users can track plant status, adjust environmental settings, and receive alerts for optimal plant care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}