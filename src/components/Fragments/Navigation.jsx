import { useDispatch } from "react-redux"
import { handleNavCart } from "../../redux/slices/navSlice"

const Navigation = () => {
    const dispatch = useDispatch()
    
    return (
        <nav className="flex justify-between items-center p-5">
            <div className="flex items-center justify-center gap-4">
                <img src="/images/icon-menu.svg" alt="icon-menu" className="cursor-pointer"/>
                <img src="/images/logo.svg" alt="icon-logo" className="cursor-pointer"/>
            </div>

            <div className="flex items-center gap-5">
                <img src="/images/icon-cart.svg" alt="icon-cart" className="cursor-pointer" onClick={() => dispatch(handleNavCart())}/>
                <img src="/images/image-avatar.png" alt="icon-avatar" className="w-6 cursor-pointer"/>
            </div>
        </nav>
    )
}

export default Navigation