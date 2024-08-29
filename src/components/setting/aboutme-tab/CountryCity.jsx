import Dropdown from "./Dropdown";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: rtl;
  justify-content: space-between;
  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const SelectContainer = styled.div`
  flex: 1;
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

const CountryCity = () => {
  const { state, dispatch } = useGlobalState();

  const cities = ["تهران", "اصفهان", "شیراز", "مشهد", "تبریز"];

  const countries = ["ژاپن", "فرانسه", "ایتالیا", "کانادا", "استرالیا"];

  const languages = ["انگلیسی", "فرانسوی", "ژاپنی", "ایتالیایی", "اسپانیایی"];

  const handleCityChange = (value) => {
    dispatch({ type: "SET_CITY", payload: value });
  };

  const handleCountryChange = (value) => {
    dispatch({ type: "SET_COUNTRY", payload: value });
  };

  const handleLanguageChange = (value) => {
    dispatch({ type: "SET_LANGUAGE", payload: value });
  };

  return (
    <Container>
      <SelectContainer>
        <Label>شهری از ایران که خیلی دوستش دارم</Label>
        <Dropdown
          options={cities}
          value={state.city}
          label="شهری از ایران که خیلی دوستش دارم"
          onChange={handleCityChange}
        />
      </SelectContainer>

      <SelectContainer>
        <Label>کشوری به جز ایران که خیلی دوستش دارم</Label>
        <Dropdown
          options={countries}
          value={state.country}
          label='کشوری به جز ایران که خیلی دوستش دارم'
          onChange={handleCountryChange}
        />
      </SelectContainer>

      <SelectContainer>
        <Label>زبانی به جز فارسی که خیلی دوستش دارم</Label>
        <Dropdown
          options={languages}
          value={state.language}
          label='زبانی به جز فارسی که خیلی دوستش دارم'
          onChange={handleLanguageChange}
        />
      </SelectContainer>
    </Container>
  );
};

export default CountryCity;
