import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
    countries: ICountry[];
}

export const CountryItem = ({ countries }: IProps) => {
    return (
        <>
            {countries.map(
                ({ flag, name, capital, region, area, population }) => (
                    <li
                        className="list-group-item d-flex align-items-center"
                        key={name}
                    >
                        <img
                            src={flag}
                            className="img-fluid"
                            style={{ width: "150px" }}
                            alt="flag"
                        />
                        <div className="col ps-5 col-4">{name}</div>
                        <div className="col col-2">{capital}</div>
                        <div className="col ps-4 col-2">{region}</div>
                        <Badge color={Color.Primary} badgeLabel={"area"}>
                            : {area}
                        </Badge>
                        <Badge
                            color={Color.Secondary}
                            badgeLabel={"population"}
                        >
                            : {population}
                        </Badge>
                    </li>
                )
            )}
        </>
    );
};
