import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
    children: ReactNode;
};

const Portal = ({ children }: PortalProps) => {
    return createPortal(
        <div className="portal">{children}</div>,
        document.body
    );
};

export default Portal;
