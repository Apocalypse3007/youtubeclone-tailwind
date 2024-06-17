import { Videocard } from './Videocard';

const videos = [{
    thumbnail:"thumbnail.jpg",
    logo:"logo.jpg",
    title:"Kota factory",  
    channel:"Netflix India",
    views:"10M",
    timeduration:"1 month ago",
},{
    thumbnail:"thumbnail2.jpg",
    logo:"logo2.jpg",
    title:"Family Man",  
    channel:"Amazon Prime",
    views:"12M",
    timeduration:"3 month ago",
},{
    thumbnail:"thumbnail3.jpg",
    logo:"logo.jpg",
    title:"Fair play",  
    channel:"Netflix",
    views:"3M",
    timeduration:"10 days ago",
},{
    thumbnail:"thumbnail4.jpg",
    logo:"logo3.jpg",
    title:"Kingsman: The Secret Service",  
    channel:"Disney+ Hotstar",
    views:"20M",
    timeduration:"2 months ago",
},{
    thumbnail:"thumbnail2.jpg",
    logo:"logo2.jpg",
    title:"Family Man",  
    channel:"Amazon Prime",
    views:"12M",
    timeduration:"3 month ago",
},{
    thumbnail:"thumbnail3.jpg",
    logo:"logo.jpg",
    title:"Fair play",  
    channel:"Netflix",
    views:"3M",
    timeduration:"10 days ago",
},{
    thumbnail:"thumbnail4.jpg",
    logo:"logo3.jpg",
    title:"Kingsman: The Secret Service",  
    channel:"Disney+ Hotstar",
    views:"20M",
    timeduration:"2 months ago",
},{
    thumbnail:"thumbnail.jpg",
    logo:"logo.jpg",
    title:"Kota factory",  
    channel:"Netflix India",
    views:"10M",
    timeduration:"1 month ago",
}


]

export const Videogrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => {
            return <Videocard
            thumbnail={video.thumbnail}
            logo={video.logo}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timeduration={video.timeduration}
            />
        })}

    </div>
}