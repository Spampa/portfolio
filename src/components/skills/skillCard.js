export default function SkillCard({ title = '', description = '', icon = '', color='bg-white', textColor='text-black'}) {
    return(
        <div className={`flex flex-col gap-2 p-4 rounded-md shadow-md ${color} ${textColor}`}>
            {icon}
            <h2 className="text-lg md:text-2xl font-bold text-center">{title}</h2>
        </div>
    )
}