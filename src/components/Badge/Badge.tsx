import { BadgeLabel, Color } from '../../types';

interface IProps {
    color: Color;
    badgeLabel: BadgeLabel;
    value: number;
}

export const Badge = ({ color, badgeLabel, value }: IProps) => {
    return (
        <span className={`badge bg-${color} col ms-2`}>
            {badgeLabel}: {value}
        </span>
    );
};
