function Button(props) {
    return (
        <button
            className={`mx-2 h-10 min-w-[8rem] rounded-sm px-4 text-sm ${
                props.outline
                    ? 'bg-transparent text-pink-600 outline outline-1 outline-gray-300'
                    : ''
            }
             ${props.solid ? 'bg-pink-600 text-white' : ''}`}
        >
            {props.children}
        </button>
    )
}

export default Button
