export default function SkillTitle({text1, text2}){
    return(
        <h2 className="text-lg md:text-2xl">
            <span className=" text-pink-600">Import</span> 
            <span className="text-sky-400"> {text1}</span> 
            <span className=" text-pink-600"> from</span> 
            <span className=" text-amber-600"> '{text2}'</span>
        </h2>
    )
}