import { useSelector } from "react-redux"
import Button from "../Elements/Button"
import CartLists from "../Fragments/CartLists"

const CartLayout = () => {
    const cart = useSelector(state => state.cart.data)
    const navCart = useSelector(state => state.navCart)
    const hidden = navCart ? '' : 'hidden'
    
    // console.log('cart : ', cart)

    const style = `font-kumbh w-[97%] h-60 rounded-lg shadow-2xl absolute top-0 right-0 z-10  bg-white -translate-x-[0.3rem] translate-y-[4.5rem] md:w-80  md:-translate-x-[3.3rem] md:translate-y-[6.5rem] md:w-[20rem] md:h-fit ${hidden}`

    return (
        <div className={style}>
            <div className="p-5 border-b border-light-grayish-blue ">
                <h1 className="font-bold">Cart</h1>
            </div>

            <div className="p-5 h-2/3">
                {cart.length > 0 &&(
                    cart.map(item => (
                        <CartLists key={item.title} title={item.title} price={item.price} qty={item.qty}/>
                    ))
                )}

                {cart.length > 0 &&(
                    <Button>Checkout</Button>
                )}

                {cart.length === 0 &&(    
                    <div className="flex items-center justify-center h-full ">
                        <p className="text-center font-bold text-dark-grayish-blue">Your cart is empty.</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default CartLayout