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

                    <Button addStyle="shadow-primary-orange drop-shadow-md">
                        Add to cart
                    </Button>

                    <CartLayout/>
                </div>
            </div>
        </div>
    )
}

export default ProductPage