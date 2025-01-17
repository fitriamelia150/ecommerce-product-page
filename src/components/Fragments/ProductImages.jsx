const ProductImages = (props) => {
    const {images, imagesThumb, indexImages, setIndexImages} = props

    const handleThumbnailImage = (i) => {
        setIndexImages(i)
    }

    return(
        <>
            <div className="hidden md:flex flex-col">
                <img src={images[indexImages]} alt="image-product" className="rounded-lg"/>
                <div className="flex gap-5 mt-5 justify-between">
                    {imagesThumb.map((item, index) => (
                         <img key={index} id={index} src={imagesThumb[index]} alt="image-thumb" className="w-[80px] rounded-lg hover:opacity-50 cursor-pointer" onClick={() => handleThumbnailImage(index)}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductImages