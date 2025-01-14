const CartLists = (props) => {
    return (
        <div className="flex items-center gap-5 mb-5">
            <img src="/images/image-product-1-thumbnail.jpg" alt="img-thumbnail" className="w-14 rounded-md"/>

            <div className="">
                <h1 className="capitalize text-dark-grayish-blue ">{props.title}</h1>
                <p className="text-dark-grayish-blue">${props.price} x {props.qty} <span className="text-black font-bold">${props.price*props.qty}</span></p>
            </div>

            <img src="/images/icon-delete.svg" alt="icon-delete" />
        </div>
    )
}

export default CartLists