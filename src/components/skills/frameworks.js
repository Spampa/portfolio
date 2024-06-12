import SkillCard from "./skillCard";
import SkillTitle from "./skillTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Frameworks() {
    return (
        <div className="flex flex-col gap-2">
            <SkillTitle
                text1={"Frameworks"}
                text2={"skills"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillCard
                    title="Node.js"
                    description=""
                    icon={<FontAwesomeIcon icon={faNodeJs} className=" h-16" />}
                    color="bg-green-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="React"
                    description=""
                    icon={<FontAwesomeIcon icon={faReact} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}