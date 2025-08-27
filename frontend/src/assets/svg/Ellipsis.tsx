type EllipsisProps = {
    className?: string;
    fill: string;
};

const Ellipsis: React.FC<EllipsisProps> = ({ className, fill }) => {
    return (
        <svg
            className={className}
            fill={fill}
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="17.5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6.5" cy="12" r="1.5" />
        </svg>
    );
};

export default Ellipsis;
