export function SideBar(){
    return <div className="flex">
        <div className="transition-all bg-blue-500 h-[100vh] w-[5vw] md:w-[20vw]">Sidebar</div>
        <div className="bg-amber-400 h-[100vh] w-full">Content</div>
    </div>
}