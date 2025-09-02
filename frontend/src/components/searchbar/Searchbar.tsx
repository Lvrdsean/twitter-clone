import "./Searchbar.scss";
import Search from "../../assets/svg/Search";
import Button from "../../components/button/Button";
import XCircleFill from "../../assets/svg/XCircleFill";

type SearchbarProps = {
    query: string;
    setQuery: (value: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ query, setQuery }) => {
    return (
        <div className="search_bar__container">
            <Search className="search_bar__search_icon" fill="#656a6e" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search_bar__input"
                placeholder="Search"
            />
            {query && (
                <Button
                    className="search_bar__clear_button"
                    onClick={() => setQuery("")}
                >
                    <XCircleFill className="search_bar__clear_icon" />
                </Button>
            )}
        </div>
    );
};

export default Searchbar;
