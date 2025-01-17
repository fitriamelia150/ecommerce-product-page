const ProductImage = (props) => {
    const {images, indexImages, handleButtonImage} = props
    
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
        </>
    )
}

export default ProductImage