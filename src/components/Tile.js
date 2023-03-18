function Tile(props) {
    const { image, title, subtitle } = props
    return (
        <div className="flex h-96 flex-col justify-center pt-1">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="relative h-full flex-auto bg-cover bg-center bg-no-repeat text-4xl text-white"
            >
                <div className="h-full w-full bg-black opacity-10 transition-all ease-in hover:opacity-5"></div>
                <div className="absolute top-1/2 flex w-full justify-center font-bold">
                    {title}
                </div>
            </div>
            <div className="py-1 sm:flex sm:justify-between">
                <h1>{subtitle}</h1>
                <h1>SEE THE COLLECTION </h1>
            </div>
        </div>
    )
}

export default Tile
