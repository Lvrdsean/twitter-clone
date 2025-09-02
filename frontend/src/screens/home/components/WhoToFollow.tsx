import "./WhoToFollow.scss";
import Profile from "../../../assets/images/default-profile.png";
import Button from "../../../components/button/Button";
import { whoToFollow } from "../../../types/explore";
import { truncate } from "../../../utils/truncate";

const WhoToFollow = () => {
    return (
        <div className="wtf__container">
            <h3 className="wtf__header">Who to follow</h3>
            {whoToFollow.map((account, index) => (
                <div key={index} className="wtf__wtf_container">
                    <img src={Profile} className="wtf__profile" alt="profile" />
                    <div className="wtf__user_container">
                        <p className="p1-b">{truncate(account.fullname, 20)}</p>
                        <p className="wtf__username">
                            {truncate(account.username, 20)}
                        </p>
                    </div>
                    <Button onClick={() => {}} className="p1-b wtf__button">
                        Follow
                    </Button>
                </div>
            ))}
            <Button onClick={() => {}} className="p1-r wtf__link">
                Show more
            </Button>
        </div>
        // TODO: Add underline on hover for fullname and modal for profile preview + actually show more wtf's
        // and make follow button work as intended
    );
};

export default WhoToFollow;
