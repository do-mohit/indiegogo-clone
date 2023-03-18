function Card() {
    return (
        <div className="mx-4 h-full min-w-[16rem] rounded-sm bg-white outline outline-1 outline-gray-500 transition-all ease-in hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-md">
            <img
                className="w-full"
                src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/wskhq6hmbeiughww3ian"
            ></img>
            <div className="px-4 py-2 text-gray-600">
                <h1 className="my-2 text-sm text-green-700">FUNDING</h1>
                <h1 className="text-lg font-bold hover:underline">Title</h1>
                <p className="leading-5">
                    Rerum iure at et. Officia tenetur distinctio consequatur
                    fugiat. Minima ipsum iure repellendus voluptatem molestiae
                    neque.
                </p>
                <p className="my-4">Category</p>
                <div className="relative h-3 max-w-xl overflow-hidden rounded-full">
                    <div className="absolute h-full w-full bg-gray-200"></div>
                    <div className="absolute h-full w-2/3 bg-blue-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
