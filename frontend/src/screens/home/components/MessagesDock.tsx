import "./MessagesDock.scss";
import Button from "../../../components/button/Button";
import ChevronUp from "../../../assets/svg/ChevronUp";

const MessagesDock = () => {
    return (
        <div className="dock__container">
            <h3>Messages</h3>
            <Button onClick={() => {}} className="dock__chevron_button">
                <ChevronUp fill="#ffffffff" />
            </Button>
        </div>
        // TODO: Make the dock actually interactive, show messages, and add a new message modal for when button is clicked
    );
};

export default MessagesDock;
