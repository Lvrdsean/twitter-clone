import { ReactNode } from "react";
import "./Modal.scss";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    className,
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal__overlay">
            <div
                className={`modal__content ${className}`}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <button className="modal__close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
