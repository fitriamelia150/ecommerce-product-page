const Button = (props) => {
    const { children, addStyle } = props
    const style = `bg-primary-orange w-full py-3 rounded-md font-bold ${addStyle} `

    return (
        <button className={style}>
            {children}
        </button>
    )
}

export default Button