import { useState } from "react"
import ProductImage from "../Fragments/ProductImage"
import ProductImages from "../Fragments/ProductImages"
import ProductImagesPopup from "../Fragments/ProductImagesPopup"

const ProductImagesLayout = () => {

    const images = ["/images/image-product-1.jpg", "/images/image-product-2.jpg", "/images/image-product-3.jpg", "/images/image-product-4.jpg"]
    const imagesThumb = ["/images/image-product-1-thumbnail.jpg", "/images/image-product-2-thumbnail.jpg", "/images/image-product-3-thumbnail.jpg", "/images/image-product-4-thumbnail.jpg"]
    const [ indexImages, setIndexImages ] = useState(0)

    const handleButtonImage = (par) => {

        if ((indexImages < images.length - 1) && par === 'next') {
            setIndexImages(indexImages + 1)
        }

        if((indexImages < images.length) && par === 'prev') {
            if(indexImages === 0) return
            setIndexImages(indexImages - 1)
        }
    }


    return (
        <>
            {/* mobile */}
            <ProductImage images={images} indexImages={indexImages} handleButtonImage={handleButtonImage}/>
            {/* desktop */}
            <ProductImages images={images} imagesThumb={imagesThumb} indexImages={indexImages} setIndexImages={setIndexImages}/>
            <ProductImagesPopup images={images} imagesThumb={imagesThumb} indexImages={indexImages} setIndexImages={setIndexImages}/>
        </>
    )
}

export default ProductImagesLayout