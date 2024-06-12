import SkillCard from "./skillCard";
import SkillTitle from "./skillTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs, faPython, faJava, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function ProgramLanguages() {
    return(
        <div className="flex flex-col gap-2">
            <SkillTitle
                text1={"Program Languages"}
                text2={"skills"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillCard 
                    title="JavaScript" 
                    description=""
                    icon={<FontAwesomeIcon icon={faSquareJs} className=" h-16" />}
                    color="bg-yellow-400"
                    textColor="text-slate-800"
                />
                <SkillCard
                    title="Python"
                    description=""
                    icon={<FontAwesomeIcon icon={faPython} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="Java"
                    description=""
                    icon={<FontAwesomeIcon icon={faJava} className=" h-16" />}
                    color="bg-red-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="PHP"
                    description=""
                    icon={<FontAwesomeIcon icon={faPhp} className=" h-16" />}
                    color="bg-blue-600"
                    textColor="text-white"
                />
                <SkillCard
                    title="Flutter"
                    description=""
                    icon={<FontAwesomeIcon icon={faMobile} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="C++"
                    description=""
                    icon={<FontAwesomeIcon icon={faRobot} className=" h-16" />}
                    color="bg-black"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}