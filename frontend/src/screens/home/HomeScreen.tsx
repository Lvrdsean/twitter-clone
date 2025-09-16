import "./HomeScreen.scss";
import { useEffect, useState } from "react";
import { Tab } from "../../types/tab";
import Sidebar from "../../components/sidebar/Sidebar";
import TabSelector from "./components/TabSelector";
import Composer from "./components/Composer";
import PostOptions from "./components/PostOptions";
import Searchbar from "../../components/searchbar/Searchbar";
import Premium from "./components/Premium";
import Trends from "./components/Trends";
import WhoToFollow from "./components/WhoToFollow";
import Footer from "./components/Footer";
import MessagesDock from "./components/MessagesDock";

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
                <WhoToFollow />
                <Footer />
            </div>
            <div className="home__messages">
                <MessagesDock />
            </div>
        </div>
    );
};

export default Home;
