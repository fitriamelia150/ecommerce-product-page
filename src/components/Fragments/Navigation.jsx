const Navigation = () => {
    return (
        <nav className="flex justify-between items-center p-5">
            <div className="flex items-center justify-center gap-4">
                <img src="/images/icon-menu.svg" alt="icon-menu" />
                <img src="/images/logo.svg" alt="icon-logo" />
            </div>

            <div className="flex items-center gap-5">
                <img src="/images/icon-cart.svg" alt="icon-cart" />
                <img src="/images/image-avatar.png" alt="icon-avatar" className="w-6"/>
            </div>
        </nav>
    )
}

export default Navigation