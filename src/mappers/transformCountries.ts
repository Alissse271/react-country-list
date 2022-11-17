import { ICountry, ICountryAPI } from "../types";

export const transformCountries = (countries: ICountryAPI[]): ICountry[] => {
    return countries.map(
        ({ name, capital, population, flags, area, region }) => {
            return {
                name: name.common,
                capital,
                population,
                flag: flags.svg,
                area,
                region,
            };
        }
    );
};
