export const Youtube = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="hidden lg:block" >
                <img className = "h-12 w-12 md:h-8 md:w-8" src="./youtubelogo.png" />
            </div>
            <div className="lg:hidden">
                <img className = "h-8 w-8 sm:h-6 sm:w-6" src="./youtubelogo.jpg" />
            </div>
        </div>
    )
}