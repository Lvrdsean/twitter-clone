import "./PostOptions.scss";
import Button from "../../../components/button/Button";
import Media from "../../../assets/svg/Media";
import Gif from "../../../assets/svg/Gif";
import GrokOutline from "../../../assets/svg/GrokOutline";
import Poll from "../../../assets/svg/Poll";
import Smiley from "../../../assets/svg/Smiley";
import Schedule from "../../../assets/svg/Schedule";
import Location from "../../../assets/svg/Location";

const PostOptions = () => {
    return (
        <div className="post_options__container">
            <Button onClick={() => {}} className="post_options__button--media">
                <Media />
            </Button>
            <Button onClick={() => {}} className="post_options__button">
                <Gif />
            </Button>
            <Button onClick={() => {}} className="post_options__button">
                <GrokOutline className="post_options__grok" fill="#1d9bf0" />
            </Button>
            <Button onClick={() => {}} className="post_options__button">
                <Poll />
            </Button>
            <Button onClick={() => {}} className="post_options__button">
                <Smiley />
            </Button>
            <Button onClick={() => {}} className="post_options__button">
                <Schedule />
            </Button>
            <Button
                onClick={() => {}}
                className="post_options__button--location"
            >
                <Location />
            </Button>
            <Button
                onClick={() => {}}
                className="p1-b post_options__button--options"
            >
                Post
            </Button>
        </div>
    );
};

export default PostOptions;
