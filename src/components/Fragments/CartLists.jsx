import { useDispatch } from "react-redux"
import { countTotalQty, deleteFromCart } from "../../redux/slices/cartSlice"

const CartLists = (props) => {
    const dispatch = useDispatch()

    const handleDeleteFromCart = (data) => {
        dispatch(deleteFromCart({title: data}))
        dispatch(countTotalQty())
    }

    return (
        <div className="flex items-center gap-5 mb-5">
            <img src="/images/image-product-1-thumbnail.jpg" alt="img-thumbnail" className="w-14 rounded-md"/>

            <div className="">
                <h1 className="capitalize text-dark-grayish-blue md:text-sm">{props.title}</h1>
                <p className="text-dark-grayish-blue">${props.price} x {props.qty} <span className="text-black font-bold">${props.price*props.qty}</span></p>
            </div>

            <img src="/images/icon-delete.svg" alt="icon-delete" onClick={()=>handleDeleteFromCart(props.title)} className="cursor-pointer"/>
        </div>
    )
}

export default CartLists