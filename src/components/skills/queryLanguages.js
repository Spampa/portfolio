import SkillCard from "./skillCard";
import SkillTitle from "./skillTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function QueryLanguages(){
    return(
        <div className="flex flex-col gap-2">
            <SkillTitle
                text1={"Query Languages"}
                text2={"skills"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillCard 
                    title="SQL" 
                    description=""
                    icon={<FontAwesomeIcon icon={faDatabase} className=" h-16" />}
                    color="bg-blue-400"
                    textColor="text-white"
                />
                <SkillCard
                    title="NoSQL"
                    description=""
                    icon={<FontAwesomeIcon icon={faLeaf} className=" h-16" />}
                    color="bg-green-400"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}