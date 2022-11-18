import { Color, ICountry } from '../../types';
import { Badge } from '../Badge/Badge';

interface IProps {
    country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
    return (
        <li
            className='list-group-item d-flex align-items-center'
            key={country.name}
        >
            <img
                src={country.flag}
                className='img-fluid'
                style={{ width: '150px' }}
                alt='flag'
            />
            <p className='col ps-5 col-4'>{country.name}</p>
            <p className='col col-2'>{country.capital}</p>
            <p className='col ps-4 col-2'>{country.region}</p>
            <Badge
                color={Color.Primary}
                badgeLabel='area'
                value={country.area}
            />
            <Badge
                color={Color.Secondary}
                badgeLabel='population'
                value={country.population}
            />
        </li>
    );
};
