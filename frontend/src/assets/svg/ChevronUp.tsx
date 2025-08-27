type ChevronUpProps = {
    className?: string;
    fill: string;
};

const ChevronUp: React.FC<ChevronUpProps> = ({ className, fill }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill={fill}
                d="M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"
            />
        </svg>
    );
};

export default ChevronUp;
