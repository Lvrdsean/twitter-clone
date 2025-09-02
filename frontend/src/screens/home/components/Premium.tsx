import "./Premium.scss";
import Button from "../../../components/button/Button";

const Premium = () => {
    return (
        <div className="premium__container">
            <h3>Subscribe to Premium</h3>
            <p>
                Subscribe to unlock new features and if eligible, receive a
                share of revenue.
            </p>
            <Button onClick={() => {}} className=" p1-b premium__button">
                Subscribe
            </Button>
        </div>
        // TODO: Add Subscribe Full Screen Modal for when button is clicked
    );
};

export default Premium;
