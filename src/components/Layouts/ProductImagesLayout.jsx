import { useState } from "react"

const ProductImagesLayout = () => {

    const images = ["/images/image-product-1.jpg", "/images/image-product-2.jpg", "/images/image-product-3.jpg", "/images/image-product-4.jpg"]
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
        <div className="relative">
            <div className="w-full h-72 bg-cyan-400 overflow-hidden">
                <img src={images[indexImages]} alt="image-product" />

                <div className="px-5 flex w-full justify-between absolute top-0 translate-y-28">
                    <img src="/images/icon-previous.svg" alt="icon-previous" className="w-10 h-10 p-3 bg-white rounded-full" onClick={()=>handleButtonImage('prev')}/>
                    <img src="/images/icon-next.svg" alt="icon-next" className="w-10 h-10 p-3 bg-white rounded-full" onClick={()=>handleButtonImage('next')}/>
                </div>
            </div>
        </div>
    )
}

export default ProductImagesLayout