import SkillCard from "./skillCard";
import SkillTitle from "./skillTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faCheck, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faComment, faThumbsUp, faClock } from "@fortawesome/free-regular-svg-icons";

export default function SoftSkills() {
    return(
        <div className="flex flex-col gap-2">
            <SkillTitle
                text1={"Soft Skills"}
                text2={"skills"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillCard
                    title="Creativity"
                    description=""
                    icon={<FontAwesomeIcon icon={faLightbulb} className=" h-16" />}
                    color="bg-yellow-400"
                    textColor="text-slate-800"
                />
                <SkillCard
                    title="Communication"
                    description=""
                    icon={<FontAwesomeIcon icon={faComment} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="Problem Solving"
                    description=""
                    icon={<FontAwesomeIcon icon={faThumbsUp} className=" h-16" />}
                    color="bg-green-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="Teamwork"
                    description=""
                    icon={<FontAwesomeIcon icon={faUserPlus} className=" h-16" />}
                    color="bg-blue-600"
                    textColor="text-white"
                />
                <SkillCard
                    title="Time Management"
                    description=""
                    icon={<FontAwesomeIcon icon={faClock} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="Leadership"
                    description=""
                    icon={<FontAwesomeIcon icon={faCheck} className=" h-16" />}
                    color="bg-black"
                    textColor="text-white"
                />
                <SkillCard
                    title="Personal Motivation"
                    description=""
                    icon={<FontAwesomeIcon icon={faArrowUpRightDots} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}