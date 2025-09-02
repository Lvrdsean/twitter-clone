import "./HomeScreen.scss";
import Button from "../../components/button/Button";
import Profile from "../../assets/images/default-profile.png";
import { useEffect, useState } from "react";
import { Tab } from "../../types/tab";
import ChevronUp from "../../assets/svg/ChevronUp";
import Sidebar from "../../components/sidebar/Sidebar";
import TabSelector from "./components/TabSelector";
import Composer from "./components/Composer";
import PostOptions from "./components/PostOptions";
import Searchbar from "../../components/searchbar/Searchbar";
import Premium from "./components/Premium";
import Trends from "./components/Trends";

const Home = () => {
    // state
    const [activeTab, setActiveTab] = useState<Tab>(() => {
        const saved = localStorage.getItem("activeTab");
        return saved === "forYou" || saved === "following" ? saved : "forYou";
    }); // Initialize from localStorage if available
    const [isComposing, setIsComposing] = useState(false);
    const [query, setQuery] = useState("");

    // Save any changes to localStorage
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    // event handlers
    const truncate = (str: string, maxLength: number) =>
        str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    return (
        <div className="home__screen">
            <div className="home__sidebar_container">
                <Sidebar />
            </div>
            <div className="home__timeline">
                <TabSelector
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="home__timeline_content">
                    <Composer
                        isComposing={isComposing}
                        setIsComposing={setIsComposing}
                    />
                    <PostOptions />
                </div>
            </div>
            <div className="home__explore">
                <Searchbar query={query} setQuery={setQuery} />
                <Premium />
                <Trends />
                <div className="home__wtf">
                    <h3 className="home__explore_header">Who to follow</h3>
                    <div className="home__wtf_container">
                        <img
                            src={Profile}
                            className="home__profile"
                            alt="profile"
                        />
                        <div className="home__user_container">
                            <p className="p1-b">FirstName LastName</p>
                            <p className="home__username">@username</p>
                        </div>
                        <Button
                            onClick={() => {}}
                            className=" p1-b home__follow_button"
                        >
                            Follow
                        </Button>
                    </div>
                    <div className="home__wtf_container">
                        <img
                            src={Profile}
                            className="home__profile"
                            alt="profile"
                        />
                        <div className="home__user_container">
                            <p className="p1-b">A Random Person</p>
                            <p className="home__username">@stranger</p>
                        </div>
                        <Button
                            onClick={() => {}}
                            className=" p1-b home__follow_button"
                        >
                            Follow
                        </Button>
                    </div>
                    <div className="home__wtf_container">
                        <img
                            src={Profile}
                            className="home__profile"
                            alt="profile"
                        />
                        <div className="home__user_container">
                            <p className="p1-b">
                                {truncate("A Very Long Full Name", 20)}
                            </p>
                            <p className="home__username">
                                {truncate("@averylongusername123", 20)}
                            </p>
                        </div>
                        <Button
                            onClick={() => {}}
                            className=" p1-b home__follow_button"
                        >
                            Follow
                        </Button>
                    </div>
                    <Button onClick={() => {}} className="p1-r home__link">
                        Show more
                    </Button>
                </div>
                <footer>
                    <p className={`p3-r ${"home__footer_text"}`}>
                        <span className="home__footer_link">
                            Terms of Service
                        </span>
                        <span>|</span>
                        <span className="home__footer_link">
                            Privacy Policy
                        </span>
                        <span>|</span>
                        <span className="home__footer_link">Cookie Policy</span>
                        <span>|</span>
                        <span className="home__footer_link">Accessibility</span>
                        <span>|</span>
                        <span className="home__footer_link">Ads Info</span>
                        <span>|</span>
                        <span className="home__footer_link">More ...</span>
                        <span>|</span>
                        <span>© 2025 LVRD Corp.</span>
                    </p>
                </footer>
            </div>
            <div className="home__messages">
                <div className="home__messages_container">
                    <h3>Messages</h3>
                    <Button onClick={() => {}} className="home__chevron_button">
                        <ChevronUp fill="#ffffffff" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
