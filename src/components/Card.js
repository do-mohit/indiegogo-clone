import Image from 'next/image'

function Card(props) {
    return (
        <div className="mx-2 h-full min-w-[16rem] rounded-sm bg-white outline outline-1 outline-gray-500 transition-all ease-in hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-md">
            <Image
                id="cardimg"
                className="hidden w-full sm:block"
                src={props.image}
                height={100}
                width={100}
                alt=""
            />
            <div className="px-4 py-2 text-gray-600">
                <h1 className="my-2 text-sm text-green-700">FUNDING</h1>
                <div className="flex">
                    <div>
                        <h1 className="text-lg font-bold hover:underline">
                            Title
                        </h1>
                        <p className="inline text-xs leading-5 sm:text-base">
                            Rerum iure at et. Officia tenetur distinctio
                        </p>
                        <p className="hidden text-xs leading-5 sm:inline sm:text-base ">
                            consequatur fugiat. Minima ipsum iure repellendus
                            voluptatem molestiae neque.
                        </p>
                    </div>
                    <Image
                        className="ml-1 block h-24 w-24 sm:hidden"
                        src={props.image}
                        height={100}
                        width={100}
                        alt=""
                    />
                </div>
                <p className="my-4">Category</p>
                <div className="relative mb-4 h-3 max-w-xl overflow-hidden rounded-full">
                    <div className="absolute h-full w-full bg-gray-200"></div>
                    <div className="absolute h-full w-2/3 bg-blue-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
