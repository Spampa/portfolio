export default function ContactCard({ text, icon, color = 'bg-white', textColor = 'text-black'}) {
    return(
        <div className={`flex flex-row gap-2 p-4 rounded-md shadow-md items-center ${color} ${textColor}`}>
            {icon}
            <h2 className="text-lg md:text-xl font-bold text-center">{text}</h2>
        </div>
    )
}