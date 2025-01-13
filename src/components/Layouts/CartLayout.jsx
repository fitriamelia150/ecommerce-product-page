import { useSelector } from "react-redux"

const CartLayout = () => {
    const navCart = useSelector(state => state.navCart)
    console.log('navCart : ', navCart)
    const hidden = navCart ? '' : 'hidden'

    const style = `w-[95%] h-56 rounded-lg shadow-2xl absolute top-0 right-0 z-10  bg-white -translate-x-2 translate-y-20 ${hidden}`

    return (
        <div className={style}>
            <div className="p-5 border-b border-dark-grayish-blue">
                <h1 className="font-bold">Cart</h1>
            </div>

            <div className="flex items-center justify-center h-4/6">
                <p className="text-center font-bold text-dark-grayish-blue">Your cart is empty.</p>
            </div>
        </div>
    )
}

export default CartLayout