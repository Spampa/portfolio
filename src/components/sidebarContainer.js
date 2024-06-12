export default function SidebarContainer({ title = '', children }) {
    return(
        <div>
            {
                title === '' ? null : <h2 className="text-3xl font-bold text-sky-400">{title}</h2>
            }
            <div className="flex flex-col gap-6 border-l-2 border-gray-500 p-2">
                {children}
            </div>
        </div>
    )
}