import SkillCard from "./skillCard";
import SkillTitle from "./skillTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Others() {
    return (
        <div className="flex flex-col gap-2">
            <SkillTitle
                text1={"Others"}
                text2={"skills"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillCard
                    title="GitHub"
                    description=""
                    icon={<FontAwesomeIcon icon={faGithub} className=" h-16" />}
                    color="bg-black"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}