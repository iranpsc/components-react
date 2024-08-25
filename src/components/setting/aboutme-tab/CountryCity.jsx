import styled from 'styled-components';
import { useGlobalState } from './GlobalStateProvider';

// Styled components
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const SelectContainer = styled.div`
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2c2c2c;
  color: #fff;
`;

// The component
const CountryCity = () => {
    const { state, dispatch } = useGlobalState();

    const handleCityChange = (e) => {
        dispatch({ type: 'SET_CITY', payload: e.target.value });
    };

    const handleCountryChange = (e) => {
        dispatch({ type: 'SET_COUNTRY', payload: e.target.value });
    };

    const handleLanguageChange = (e) => {
        dispatch({ type: 'SET_LANGUAGE', payload: e.target.value });
    };

    return (
        <Container>
            <SelectContainer>
                <Label htmlFor="city">شهری از ایران که خیلی دوستش دارم</Label>
                <Select id="city" value={state.city} onChange={handleCityChange}>
                    <option value="">انتخاب شهر</option>
                    <option value="Tehran">تهران</option>
                    <option value="Isfahan">اصفهان</option>
                    <option value="Shiraz">شیراز</option>
                    <option value="Mashhad">مشهد</option>
                    <option value="Tabriz">تبریز</option>
                </Select>
            </SelectContainer>

            <SelectContainer>
                <Label htmlFor="country">کشوری به جز ایران که خیلی دوستش دارم</Label>
                <Select id="country" value={state.country} onChange={handleCountryChange}>
                    <option value="">انتخاب کشور</option>
                    <option value="Japan">ژاپن</option>
                    <option value="France">فرانسه</option>
                    <option value="Italy">ایتالیا</option>
                    <option value="Canada">کانادا</option>
                    <option value="Australia">استرالیا</option>
                </Select>
            </SelectContainer>

            <SelectContainer>
                <Label htmlFor="language">زبانی به جز فارسی که خیلی دوستش دارم</Label>
                <Select id="language" value={state.language} onChange={handleLanguageChange}>
                    <option value="">انتخاب زبان</option>
                    <option value="English">انگلیسی</option>
                    <option value="French">فرانسوی</option>
                    <option value="Japanese">ژاپنی</option>
                    <option value="Italian">ایتالیایی</option>
                    <option value="Spanish">اسپانیایی</option>
                </Select>
            </SelectContainer>
        </Container>
    );
};

export default CountryCity;
