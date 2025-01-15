import Sidebar from "../components/Fragments/Sidebar"
import CartLayout from "../components/Layouts/CartLayout"
import ProductImagesLayout from "../components/Layouts/ProductImagesLayout"
import ProductDetail from "../components/Fragments/ProductDetail"

const data = {
    title: "fall limited edition sneakers",
    price: 125.00,
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.",
    discount: 50,
    discountPrice: 250.00
}

const ProductPage = () => {

    return (
        <div className="md:flex items-center justify-center gap-10 md:px-10">
            <ProductImagesLayout/>
            <ProductDetail data={data}/>
            <CartLayout/>
            <Sidebar/>
        </div>
    )
}

export default ProductPage