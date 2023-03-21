function Tile(props) {
    const { image, title, subtitle, top } = props
    return (
        <div
            className={`flex flex-col justify-center pt-1 ${
                top ? 'h-96' : 'h-80 sm:h-[26rem] md:h-[30rem] lg:h-72'
            }`}
        >
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="bg relative flex-auto bg-cover bg-no-repeat text-4xl text-white"
            >
                <div className="h-full w-full bg-black opacity-10 transition-all ease-in hover:opacity-5"></div>
                {top && (
                    <div className="absolute top-1/2 flex w-full justify-center font-bold">
                        {title}
                    </div>
                )}
            </div>
            <div className="py-1 text-sm sm:flex sm:justify-between">
                <h1>{subtitle}</h1>
                <h1>SEE THE COLLECTION </h1>
            </div>
        </div>
    )
}

export default Tile
