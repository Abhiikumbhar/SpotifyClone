import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify/react';
import TextWithHover from "../components/shared/TextWithHover";

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
            <div className="h-full w-4/5 bg-app-black">
                <div className="navbar w-full bg-black h-1/10 bg-opacity-40 flex items-center justify-end"> 
                    <div className="w-1/2 h-full flex">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Permiun"} />
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
                <div className="content">

                </div>
            </div>
        </div>

    )
};

export default Home;