import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify/react';
import TextWithHover from "../components/shared/TextWithHover";

const FocusCardData=[
    {
        title:"Peaceful Piano",
        description:"Relax and indulge with beautifull piano pieces.",
        imgUrl:"https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title:"Deep Focus", 
        description:"Keep calm and focus with ambient and post-rock music.",
        imgUrl:"https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title:"Instrumental Study",
        description:"Focus with soft study music in the background.",
        imgUrl:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title:"Focus Flow",
        description:"Uptempo instrumental hip hop beats",
        imgUrl:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title:"Reading Adventure",
        description:"Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures.",
        imgUrl:"https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    }
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];
const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* this is left aside of spotify website */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="Spotify logo" width={130} />
                    </div>
                    <div className="py-5">
                        <IconText
                            iconName={"teenyicons:home-solid"}
                            displayText={"Home"}
                            active
                        />
                        <IconText
                            iconName={"iconamoon:search-bold"}
                            displayText={"Search"}
                        />
                        <IconText
                            iconName={"ph:playlist-bold"}
                            displayText={"Your Library"}
                        />
                    </div >
                    <div className="pt-5">
                        <IconText
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
                        />
                        <IconText
                            iconName={"uiw:heart-on"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-600 text-white w-2/5 flex px-2 py-1 rounded-full item-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="eva:globe-outline"/>
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>

            </div>
            {/* this will be that main page of the spotify */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full bg-black h-1/10 bg-opacity-40 flex items-center justify-end"> 
                    <div className="w-1/2 h-full flex">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"sign up"} />
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">Log In</div>
                        </div>
                    </div>
                        
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView titleText={"Focus"} cardsData={FocusCardData}/>
                    <PlaylistView titleText={"Spotify Playlist"} cardsData={spotifyPlaylistsCardData}/>
                    <PlaylistView titleText={"Sound of India"} cardsData={FocusCardData}/>
                </div>
            </div>
        </div>

    )
};

const PlaylistView = ({titleText, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-3">
                {
                    cardsData.map((item)=>{
                        return (<Card
                                    title={item.title}
                                    description={item.description}
                                    imgUrl={item.imgUrl}
                                />);
                    })
                }
                
            </div>
        </div>
    );    
}

const Card = ({title,description,imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img 
                    className="w-full rounded-md"
                    src={imgUrl}
                    alt="thumbnail"
                />
            </div>
            <div className="text-white font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
}
export default Home;