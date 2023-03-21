function IconTile(props) {
    return (
        <div className="flex min-w-[10rem] cursor-pointer flex-col items-center justify-center px-2 py-4 text-xs text-pink-600 hover:bg-slate-100">
            {props.children}
            <h1 className="mt-4 text-gray-600">{props.title}</h1>
        </div>
    )
}

export default IconTile
