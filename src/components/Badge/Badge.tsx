import { BadgeLabel, Color } from "../../types";
import { ReactNode } from "react";

interface IProps {
    color: Color;
    badgeLabel: BadgeLabel;
    children: ReactNode;
}

export const Badge = ({ color, badgeLabel, children }: IProps) => {
    return (
        <span className={`badge bg-${color} col ms-2`}>
            {badgeLabel} {children}
        </span>
    );
};
