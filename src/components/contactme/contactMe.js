import ContactCard from "./contactCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactMe() {
    return(
        <div className="bg-red-400 min-h-screen py-14 flex items-center" id="contact">
            <div className="container flex flex-col gap-2">
                <h2 className="text-3xl font-bold ">Contact Me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <ContactCard
                        text={"nicolo.spampa@gmail.com"}
                        icon={<FontAwesomeIcon icon={faEnvelope} className=" h-16" />}
                        color="bg-blue-400"
                        textColor="text-white"
                    />
                    <ContactCard
                        text={"+39 3312835175"}
                        icon={<FontAwesomeIcon icon={faPhone} className=" h-16" />}
                        color="bg-green-400"
                        textColor="text-white"
                    />
                    <ContactCard
                        text={"Spampa"}
                        icon={<FontAwesomeIcon icon={faGithub} className=" h-16" />}
                        color="bg-black"
                        textColor="text-white"
                    />
                    <ContactCard
                        text={"nico.spampa"}
                        icon={<FontAwesomeIcon icon={faInstagram} className=" h-16" />}
                        color="bg-pink-400"
                        textColor="text-white"
                    />
                    <ContactCard
                        text={"@NicoSpampa"}
                        icon={<FontAwesomeIcon icon={faTelegram} className=" h-16" />}
                        color="bg-blue-400"
                        textColor="text-white"
                    />

                </div>
            </div>
        </div>
    )
}