import { ICountry } from "../../types";
import { CountryItem } from "../CountryItem/CountryItem";

interface IProps {
    countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
    return (
        <div>
            <ul className="list-group">
                <CountryItem countries={countries} />
            </ul>
        </div>
    );
};
