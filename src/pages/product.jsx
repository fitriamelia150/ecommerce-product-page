import Button from "../components/Elements/Button"
import CartLayout from "../components/Layouts/CartLayout"
import ProductImagesLayout from "../components/Layouts/ProductImagesLayout"

const ProductPage = () => {

    return (
        <div className="">
            <ProductImagesLayout/>

            <div className="p-5 font-kumbh">
                <h1 className="uppercase mb-2 text-dark-grayish-blue text-xs font-semibold tracking-widest">sneaker company</h1>
                <h2 className="capitalize mb-5 text-3xl font-bold">fall limited edition sneakers</h2>
                <p className="text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.</p>

                <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-5 items-center">
                        <p className="text-3xl font-bold">$125.00</p>
                        <p className="bg-black text-white font-bold px-3 py-1 rounded-md">50%</p>
                    </div>

                    <p className="text-dark-grayish-blue line-through font-bold">$250.00</p>
                </div>

                <div className="mt-5 flex flex-col gap-4 ">
                    <div className="flex justify-between items-center bg-light-grayish-blue p-5 rounded-md">
                        <img src="/images/icon-minus.svg" alt="icon-minus" />
                        <p className="font-bold">0</p>
                        <img src="/images/icon-plus.svg" alt="icon-plus" />
                    </div>

                    <Button addStyle="flex justify-center items-center gap-3 shadow-primary-orange drop-shadow-md">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="black" fillRule="nonzero"/></svg>

                        Add to cart
                    </Button>

                    <CartLayout/>
                </div>
            </div>
        </div>
    )
}

export default ProductPage