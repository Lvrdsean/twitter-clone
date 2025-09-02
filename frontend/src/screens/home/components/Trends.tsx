import "./Trends.scss";
import Button from "../../../components/button/Button";
import { trends } from "../../../types/explore";
import Ellipsis from "../../../assets/svg/Ellipsis";

const Trends = () => {
    return (
        <div className="trends__container">
            <div className="trends__content">
                <h3 className="trends__header">What's happening</h3>
                {trends.map((trend, index) => (
                    <div key={index} className="trends__trend_container">
                        <div className="trends__category_container">
                            <p className="p2-r trends__category">
                                {trend.category} · Trending
                            </p>
                            <Button
                                onClick={() => {}}
                                className="trends__ellipsis_button"
                            >
                                <Ellipsis
                                    className="trends__ellipsis"
                                    fill="#71767b"
                                />
                            </Button>
                        </div>
                        <p className="p1-b">{trend.label}</p>
                        <p className="p2-r trends__tweets">
                            {trend.number} tweets
                        </p>
                    </div>
                ))}
                <Button onClick={() => {}} className="p1-r trends__link">
                    Show more
                </Button>
            </div>
        </div>
        // TODO: Actually show more trends when clicked and clicking a trend should lead to its own page
    );
};

export default Trends;
