import "./TabSelector.scss";
import { Tab } from "../../../types/tab";
import Button from "../../../components/button/Button";

type TabSelectorProps = {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
};

const TabSelector: React.FC<TabSelectorProps> = ({
    activeTab,
    setActiveTab,
}) => {
    return (
        <div className="tab_selector__container">
            <Button
                onClick={() => setActiveTab("forYou")}
                className={`tab_selector__tab ${
                    activeTab === "forYou" ? "active" : ""
                }`}
            >
                For you
            </Button>
            <Button
                onClick={() => setActiveTab("following")}
                className={`tab_selector__tab ${
                    activeTab === "following" ? "active" : ""
                }`}
            >
                Following
            </Button>
        </div>
    );
};

export default TabSelector;
