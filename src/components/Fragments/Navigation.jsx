import { useDispatch, useSelector } from "react-redux"
import { handleNavCart } from "../../redux/slices/navSlice"
import { handleSidebar } from "../../redux/slices/sidebarSlice"

const Navigation = () => {
    const dispatch = useDispatch()
    const totalQty = useSelector(state => state.cart.totalQty)
    
    return (
        <nav className="flex justify-between items-center p-5 md:mb-10 md:border-b-[1px] md:border-b-light-grayish-blue md:py-10">
            <div className="flex items-center justify-center gap-4 md:gap-16">
                <img src="/images/icon-menu.svg" alt="icon-menu" className="cursor-pointer md:hidden" onClick={() => dispatch(handleSidebar())}/>
                <img src="/images/logo.svg" alt="icon-logo" className="cursor-pointer"/>

                <ul className="hidden md:flex gap-5 cursor-pointer text-dark-grayish-blue text-sm">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex items-center gap-5 relative">
                <img src="/images/icon-cart.svg" alt="icon-cart" className="cursor-pointer" onClick={() => dispatch(handleNavCart())}/>
                <img src="/images/image-avatar.png" alt="icon-avatar" className="w-6 cursor-pointer"/>
                
                {totalQty > 0 &&(
                    <span className="bg-orange-400 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center absolute translate-x-2 -translate-y-2">{totalQty}</span>
                )}
            </div>
        </nav>
    )
}

export default Navigation