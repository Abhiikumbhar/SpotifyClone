import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* this is left aside of spotify website */}
            <div className="h-full w-1/5 bg-black">
                <div className="logoDiv p-4">
                    <img src={spotify_logo} alt="Spotify logo" width={130}/>
                </div>
                <div>
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
                </div>

            </div>
            {/* this will be that main page of the spotify */}
            <div className="h-full">

            </div>
        </div>

    )
};

export default Home;