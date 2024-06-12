import ProgramLanguages from "./programLanguages"
import QueryLanguages from "./queryLanguages"
import Frameworks from "./frameworks"
import Others from "./others"
import SoftSkills from "./softSkills"

export default function Skills() {
    return(
        <div className="container min-h-screen py-14 flex flex-col gap-6" id="skills">
            <ProgramLanguages />
            <QueryLanguages />
            <Frameworks />
            <Others />
            <SoftSkills />
        </div>
    )
}