const Button = (props) => {
    const { children, addStyle, onClick } = props
    const style = `bg-primary-orange w-full py-3 rounded-md font-bold hover:bg-primary-pale-orange ${addStyle} `

    return (
        <button className={style} onClick={() => onClick()}>
            {children}
        </button>
    )
}

export default Button