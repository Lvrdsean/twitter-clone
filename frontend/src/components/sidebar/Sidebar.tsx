import "./Sidebar.scss";
import HomeFill from "../../assets/svg/HomeFill";
import Search from "../../assets/svg/Search";
import BellOutline from "../../assets/svg/BellOutline";
import MailOutline from "../../assets/svg/MailOutline";
import GrokOutline from "../../assets/svg/GrokOutline";
import ListOutline from "../../assets/svg/ListOutline";
import BookmarkOutline from "../../assets/svg/BookmarkOutline";
import BriefcaseOutline from "../../assets/svg/BriefcaseOutline";
import PeopleOutline from "../../assets/svg/PeopleOutline";
import Logo from "../../assets/svg/Logo";
import VerifiedOutline from "../../assets/svg/VerifiedOutline";
import PersonOutline from "../../assets/svg/PersonOutline";
import EllipsisOutline from "../../assets/svg/EllipsisOutline";
import Button from "../button/Button";
import SidebarButton from "./SidebarButton";
import SidebarProfile from "./SidebarProfile";

const sidebarButtons = [
    { icon: <HomeFill />, label: "Home", to: "/" },
    { icon: <Search fill="#ffffffff" />, label: "Explore", to: "/explore" },
    { icon: <BellOutline />, label: "Notifications", to: "/notifications" },
    { icon: <MailOutline />, label: "Messages", to: "/messages" },
    {
        icon: <GrokOutline fill="#ffffffff" />,
        label: "Grok",
        to: "/grok",
    },
    { icon: <ListOutline />, label: "Lists", to: "/lists" },
    { icon: <BookmarkOutline />, label: "Bookmarks", to: "/bookmarks" },
    { icon: <BriefcaseOutline />, label: "Jobs", to: "/jobs" },
    { icon: <PeopleOutline />, label: "Communities", to: "/communities" },
    {
        icon: <Logo className="sidebar__logo" />,
        label: "Premium",
        to: "/premium",
    },
    { icon: <VerifiedOutline />, label: "Verified Orgs", to: "/orgs" },
    { icon: <PersonOutline />, label: "Profile", to: "/profile" },
    { icon: <EllipsisOutline />, label: "More", to: "/more" },
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button onClick={() => {}} className="sidebar__logo_button">
                <Logo />
            </Button>
            {sidebarButtons.map(({ icon, label, to }) => (
                <SidebarButton
                    key={label}
                    icon={icon}
                    label={label}
                    to={to}
                    active={label === "Home"} // temporary
                />
            ))}
            <Button onClick={() => {}} className="p1-b sidebar__post_button">
                Post
            </Button>
            <SidebarProfile />
        </div>
    );
};

export default Sidebar;
