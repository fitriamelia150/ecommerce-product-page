import ProductImages from "./ProductImages"

const ProductImagesPopup = (props) => {
    const {images, imagesThumb, indexImages, setIndexImages} = props


    return (
        <>
            <div className="w-full h-full bg-black absolute top-0 left-0 z-10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 ">
                <div className="w-[600px]">
                    <ProductImages images={images} imagesThumb={imagesThumb} indexImages={indexImages} setIndexImages={setIndexImages}/>
                </div>
            </div>
        </>
    )
}

export default ProductImagesPopup