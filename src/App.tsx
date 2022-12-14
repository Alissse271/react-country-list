import { CountryList } from './components/CountryList/CountryList';
import { transformCountries } from './mappers/transformCountries';
import countries from './materials/country-data.json';

export const App = () => {
    const transformedCountries = transformCountries(countries);
    return (
        <div>
            <h1 className='title'>Country List</h1>
            <CountryList country={transformedCountries} />
        </div>
    );
};
