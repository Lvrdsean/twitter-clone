import "./HomeScreen.scss";
import Button from "../../components/button/Button";
import Logo from "../../assets/svg/Logo";
import HomeFill from "../../assets/svg/HomeFill";
import Search from "../../assets/svg/Search";
import BellOutline from "../../assets/svg/BellOutline";
import MailOutline from "../../assets/svg/MailOutline";
import GrokOutline from "../../assets/svg/GrokOutline";
import ListOutline from "../../assets/svg/ListOutline";
import BookmarkOutline from "../../assets/svg/BookmarkOutline";
import BriefcaseOutline from "../../assets/svg/BriefcaseOutline";
import PeopleOutline from "../../assets/svg/PeopleOutline";
import VerifiedOutline from "../../assets/svg/VerifiedOutline";
import PersonOutline from "../../assets/svg/PersonOutline";
import EllipsisOutline from "../../assets/svg/EllipsisOutline";
import Profile from "../../assets/images/default-profile.png";
import Ellipsis from "../../assets/svg/Ellipsis";
import { useState } from "react";
import Globe from "../../assets/svg/Globe";
import Media from "../../assets/svg/Media";
import Gif from "../../assets/svg/Gif";
import Poll from "../../assets/svg/Poll";
import Smiley from "../../assets/svg/Smiley";
import Schedule from "../../assets/svg/Schedule";
import Location from "../../assets/svg/Location";
import XCircleFill from "../../assets/svg/XCircleFill";
import ChevronUp from "../../assets/svg/ChevronUp";

const Home = () => {
    // state
    const [activeTab, setActiveTab] = useState<"forYou" | "following">(
        "forYou"
    );
    const [focused, setFocused] = useState(false);
    const [query, setQuery] = useState("");

    // event handlers
    const truncate = (str: string, maxLength: number) =>
        str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    return (
        <div className="home__screen">
            <div className="home__sidebar_container">
                <div className="home__sidebar">
                    <Button onClick={() => {}} className="home__logo_button">
                        <Logo />
                    </Button>
                    <Button
                        onClick={() => {}}
                        className="p1-b home__home_button"
                    >
                        <HomeFill /> Home
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <Search fill="#ffffffff" /> Explore
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <BellOutline /> Notifications
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <MailOutline /> Messages
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <GrokOutline fill="#ffffffff" /> Grok
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <ListOutline /> Lists
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <BookmarkOutline /> Bookmarks
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <BriefcaseOutline /> Jobs
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <PeopleOutline /> Communities
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <Logo className="home__logo" /> Premium
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <VerifiedOutline /> Verified Orgs
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <PersonOutline /> Profile
                    </Button>
                    <Button onClick={() => {}} className="home__home_button">
                        <EllipsisOutline /> More
                    </Button>
                    <Button
                        onClick={() => {}}
                        className="p1-b home__post_button"
                    >
                        Post
                    </Button>
                    <div className="home__profile_container">
                        <img
                            src={Profile}
                            className="home__profile"
                            alt="profile"
                        />
                        <div className="home__user_container">
                            <p className="p1-b">{truncate("John Doe", 18)}</p>
                            <p className="home__username">
                                {truncate("@johndoe", 18)}
                            </p>
                        </div>
                        <Ellipsis className="home__ellipsis" fill="#ffffffff" />
                    </div>
                </div>
            </div>
            <div className="home__timeline">
                <div className="home__preferences">
                    <Button
                        onClick={() => setActiveTab("forYou")}
                        className={`home__tab_button ${
                            activeTab === "forYou" ? "active" : ""
                        }`}
                    >
                        For you
                    </Button>
                    <Button
                        onClick={() => setActiveTab("following")}
                        className={`home__tab_button ${
                            activeTab === "following" ? "active" : ""
                        }`}
                    >
                        Following
                    </Button>
                </div>
                <div className="home__timeline_content">
                    <div className="home__create_post_container">
                        <Button
                            onClick={() => {}}
                            className="home__profile--button"
                        >
                            <img
                                src={Profile}
                                className="home__profile"
                                alt="profile"
                            />
                        </Button>
                        <div
                            className={`home__composer ${
                                focused ? "home__composer--divider" : ""
                            }`}
                        >
                            <input
                                type="text"
                                className="home__composer_input"
                                placeholder="What's happening?"
                                onFocus={() => setFocused(true)}
                            />
                            {focused && (
                                <Button
                                    onClick={() => {}}
                                    className="home__hint_button"
                                >
                                    <Globe /> Everyone can reply
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="home__post_options">
                        <Button
                            onClick={() => {}}
                            className="home__media_button"
                        >
                            <Media />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__option_button"
                        >
                            <Gif />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__option_button"
                        >
                            <GrokOutline
                                className="home__grok"
                                fill="#1d9bf0"
                            />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__option_button"
                        >
                            <Poll />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__option_button"
                        >
                            <Smiley />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__option_button"
                        >
                            <Schedule />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="home__location_button"
                        >
                            <Location />
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="p1-b home__post_button--options"
                        >
                            Post
                        </Button>
                    </div>
                </div>
            </div>
            <div className="home__explore">
                <div className="home__search_container">
                    <Search className="home__search_icon" fill="#656a6e" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="home__search"
                        placeholder="Search"
                    />
                    {query && (
                        <Button
                            className="home__clear_button"
                            onClick={() => setQuery("")}
                        >
                            <XCircleFill className="home__clear_icon" />
                        </Button>
                    )}
                </div>
                <div className="home__premium">
                    <h3>Subscribe to Premium</h3>
                    <p>
                        Subscribe to unlock new features and if eligible,
                        receive a share of revenue.
                    </p>
                    <Button
                        onClick={() => {}}
                        className=" p1-b home__subscribe_button"
                    >
                        Subscribe
                    </Button>
                </div>
                <div className="home__trends">
                    <div className="home__trends_container">
                        <h3 className="home__explore_header">
                            What's happening
                        </h3>
                        <div className="home__trend">
                            <div className="home__trend_name_container">
                                <p className="p2-r home__gray">
                                    Music · Trending
                                </p>
                                <Button
                                    onClick={() => {}}
                                    className="home__ellipsis_button"
                                >
                                    <Ellipsis
                                        className="home__ellipsis--button"
                                        fill="#71767b"
                                    />
                                </Button>
                            </div>
                            <p className="p1-b">Tyler, the Creator</p>
                            <p className="p2-r home__gray--tweets">
                                1.8M tweets
                            </p>
                        </div>
                        <div className="home__trend">
                            <div className="home__trend_name_container">
                                <p className="p2-r home__gray">
                                    Sports · Trending
                                </p>
                                <Button
                                    onClick={() => {}}
                                    className="home__ellipsis_button"
                                >
                                    <Ellipsis
                                        className="home__ellipsis--button"
                                        fill="#71767b"
                                    />
                                </Button>
                            </div>
                            <p className="p1-b">Jalen Brunson</p>
                            <p className="p2-r home__gray--tweets">
                                1.4M tweets
                            </p>
                        </div>
                        <div className="home__trend">
                            <div className="home__trend_name_container">
                                <p className="p2-r home__gray">
                                    Gaming · Trending
                                </p>
                                <Button
                                    onClick={() => {}}
                                    className="home__ellipsis_button"
                                >
                                    <Ellipsis
                                        className="home__ellipsis--button"
                                        fill="#71767b"
                                    />
                                </Button>
                            </div>
                            <p className="p1-b">Battlefield 6</p>
                            <p className="p2-r home__gray--tweets">
                                1.2M tweets
                            </p>
                        </div>
                        <Button onClick={() => {}} className="p1-r home__link">
                            Show more
                        </Button>
                    </div>
                </div>
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
