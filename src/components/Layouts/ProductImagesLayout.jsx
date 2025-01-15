import { useState } from "react"

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
            <div className="relative md:hidden">
                <div className="w-full h-72 bg-cyan-400 overflow-hidden">
                    <img src={images[indexImages]} alt="image-product" />

                    <div className="px-5 flex w-full justify-between absolute top-0 translate-y-28">
                        <img src="/images/icon-previous.svg" alt="icon-previous" className="w-10 h-10 p-3 bg-white rounded-full" onClick={()=>handleButtonImage('prev')}/>
                        <img src="/images/icon-next.svg" alt="icon-next" className="w-10 h-10 p-3 bg-white rounded-full" onClick={()=>handleButtonImage('next')}/>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-col w-[175.6%]">
                <img src={images[indexImages]} alt="image-product" className="rounded-lg"/>
                <div className="flex gap-5 mt-5 justify-between">
                    {imagesThumb.map((item, index) => (
                         <img key={index} src={imagesThumb[index]} alt="image-thumb" className="w-[80px] rounded-lg hover:opacity-80 cursor-pointer"/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductImagesLayout