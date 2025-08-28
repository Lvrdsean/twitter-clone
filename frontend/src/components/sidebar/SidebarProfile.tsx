import "./SidebarProfile.scss";
import Profile from "../../assets/images/default-profile.png";
import { truncate } from "../../utils/truncate";
import Ellipsis from "../../assets/svg/Ellipsis";

const SidebarProfile = () => {
    return (
        <div className="sidebar_profile__container">
            <img
                src={Profile}
                className="sidebar_profile__profile"
                alt="profile"
            />
            <div className="sidebar_profile__user_container">
                <p className="p1-b">{truncate("John Doe", 18)}</p>
                <p className="sidebar_profile__username">
                    {truncate("@johndoe", 18)}
                </p>
            </div>
            <Ellipsis className="sidebar_profile__ellipsis" fill="#ffffffff" />
        </div>
    );
};

export default SidebarProfile;
