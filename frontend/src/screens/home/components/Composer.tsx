import "./Composer.scss";
import Button from "../../../components/button/Button";
import Profile from "../../../assets/images/default-profile.png";
import Globe from "../../../assets/svg/Globe";

type ComposerProps = {
    isComposing: boolean;
    setIsComposing: (value: boolean) => void;
};

const Composer: React.FC<ComposerProps> = ({ isComposing, setIsComposing }) => {
    return (
        <div className="composer__container">
            <Button onClick={() => {}} className="composer__profile--button">
                <img
                    src={Profile}
                    className="composer__profile"
                    alt="profile"
                />
            </Button>
            <div
                className={`composer__post_container ${
                    isComposing ? "composer__divider" : ""
                }`}
            >
                <input
                    type="text"
                    className="composer__input"
                    placeholder="What's happening?"
                    onFocus={() => setIsComposing(true)}
                />
                {isComposing && (
                    <Button
                        onClick={() => {}}
                        className="composer__who_can_reply"
                    >
                        <Globe /> Everyone can reply
                    </Button>
                    // TODO: add accounts you follow, verified accounts, only accounts you mention + modal for all the options
                )}
            </div>
        </div>
    );
};

export default Composer;
