import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faPaperPlane, faPenRuler } from "@fortawesome/free-solid-svg-icons"

export default function Links() {
    return (
        <React.Fragment>
            <Link href="#about">
                <div className="w-full md:w-fit">
                    <h2 className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faUser} className="h-5" />
                        About
                    </h2>
                </div>
            </Link>
            <Link href="#skills">
                <div className="w-full md:w-fit text-center">
                    <h2 className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faCode} className="h-5" />
                        Skills
                    </h2>
                </div>
            </Link>
            <Link href="#projects">
                <div className="w-full md:w-fit text-center">
                    <h2 className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faPenRuler} className="h-5" />
                        Projects
                    </h2>
                </div>
            </Link>
            <Link href="#contact">
                <div className="w-full md:w-fit text-end">
                    <h2 className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faPaperPlane} className="h-5" />
                        Contact Me
                    </h2>
                </div>
            </Link>
        </React.Fragment>
    )
}