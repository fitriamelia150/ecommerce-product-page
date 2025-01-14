import { useDispatch, useSelector } from "react-redux"
import { handleSidebar } from "../../redux/slices/sidebarSlice"

const Sidebar = () => {
    const dispatch = useDispatch()
    const sidebar = useSelector(state => state.sidebar)
    const style = sidebar ? '' : 'hidden'

    return(
        <div className={style}>
            <div className="bg-black w-full absolute left-0 top-0 h-full opacity-60"></div>
            <div className="p-6 bg-white w-2/3 h-full absolute top-0 left-0 z-10">
                <img src="/images/icon-close.svg" alt="icon-close" className="cursor-pointer mb-10" onClick={() => dispatch(handleSidebar())}/>

                <ul className="flex flex-col gap-5 font-bold text-lg cursor-pointer">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar