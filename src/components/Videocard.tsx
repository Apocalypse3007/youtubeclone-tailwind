export function Videocard(props:any) {
    return(
        <div className="p-3 cursor-pointer">
            <img className = "rounded-md h-96 w-50"src = {props.thumbnail} />
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <img className= "rounded-full h-50 w-20" src = {props.logo} />
                </div>
                <div className="col-span-11 pl-4"> 
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.views} | {props.timeduration}
                    </div>
                </div>
            </div>
        </div>
    )
}