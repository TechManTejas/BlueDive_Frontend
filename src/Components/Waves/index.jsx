import './waves.css'

function Waves() {
    return (
        <>
            <div className="header">
                <div className="inner-header">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div>
                            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                                    Title Here{' '}
                                </span> 
                                Some Text.
                            </h1>
                        </div>
                        <div>
                            <button type="button" class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">
                                Green
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                // fill="rgb(23, 151, 255, 0.8)"
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={0}
                                fill="rgba(0,159,255,0.7)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={3}
                                fill="rgba(0,41,158,0.5)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={5}
                                fill="rgba(0,68,200,0.3)"
                            />
                            <use xlinkHref="#gentle-wave" x={48} y={8} fill="rgba(0,179,255,1)" />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Waves;
