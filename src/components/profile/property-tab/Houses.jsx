import CardItem from "./CardItem";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchInput from "../../search/SearchInput";
import Title from "../../Title";
import business from "../../../assets/images/profile/building.png";
import education from "../../../assets/images/profile/courthouse.png";
import house from "../../../assets/images/profile/house.png";
import styled from "styled-components";
import { useState } from "react";

const List = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  padding-right: 15px;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
  height: 102px;
  @media (min-width: 840px) {
    height: 130px;
  }
  @media (min-width: 880px) {
    height: 85px;
  }
  @media (min-width: 890px) {
    height: 154px;
  }
  @media (min-width: 930px) {
    height: 170px;
  }
  @media (min-width: 1024px) {
    height: 257px;
  }
  @media (min-width: 1180px) {
    height: 455px;
  }
  @media (min-width: 1280px) {
    height: 437px;
  }
  @media (min-width: 1360px) {
    height: 498px;
  }
  @media (min-width: 1400px) {
    height: 414px;
  }
  @media (min-width: 1920px) {
    height: 495px;
  }
`;
const Container = styled.div``;
const Provider = styled.div`
  position: relative;
  color: #dedee9;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s linear;
  &:hover {
    background: var(--Button-Primary---bg---off, #332800);
    h1 {
      color: #ffc700;
    }
  }
  h1 {
    font-size: 16px;
    font-weight: 400;
  }
  span {
    position: absolute;
    left: 10px;
    top: 5px;
    &:hover {
      color: red;
      cursor: pointer;
      transition: all 0.2s linear;
    }
  }
`;
const Filter = styled.div`
  position: absolute;
  top: 55px;
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 5px;
  @media (min-width: 1400px) {
    padding: 20px;
    top: 60px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  span {
    white-space: nowrap;
  }
`;
const Select = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  color: #dedee9;
  padding: 10px 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 150px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 200px;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 200px;
  }
`;
const Search = styled.div`
  position: relative;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 10px 12px;
  color: #84858f;
  direction: rtl;
  background-color: #2c2c2c;
  display: grid;
  align-items: center;
  gap: 50px;
  svg {
    color: white;
  }
  input {
    position: absolute;
    top: 0;
    padding-right: 55px;
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    outline: none;
    border: none;
    color: white;
  }
`;
const cards_items = [
  {
    id: 1,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA91-85749",
    color: "#ff000021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 2,
    name: "املاک مسکونی",
    photo: house,
    code: "QA76-85273",
    color: "#ffc80021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 120,
    slug: "house",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 3,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA84-79462",
    color: "#ff000021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 200,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 4,
    name: "املاک مسکونی",
    photo: house,
    code: "QA34-201497",
    color: "#ffc80021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 120,
    slug: "house",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 5,
    name: "املاک آموزشی",
    photo: education,
    code: "QA81-89462",
    color: "#0066ff21",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "education",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 6,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA71-79543",
    color: "#ff000021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 200,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 7,
    name: "املاک آموزشی",
    photo: education,
    code: "QA46-96524",
    color: "#0066ff21",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "education",
    psc: 3000,
    rial: 3000000,
  },
];

const Houses = () => {
  const [searched, setSearched] = useState("");
  const [cards, setCards] = useState(cards_items);
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState({
    industry: false,
    house: false,
    education: false,
  });

  const filteredItems = cards.filter((item) => {
    const query = searched.toLowerCase().trim();
    const codeMatch = item.code.includes(query);
    const addressMatch = item.address.includes(query);
    const meterMatch = item.meter.toString().includes(query);
    const propertyMatch =
      (!property.education && !property.house && !property.industry) ||
      (property.education && item.slug === "education") ||
      (property.house && item.slug === "house") ||
      (property.industry && item.slug === "industry");

    return (codeMatch || addressMatch || meterMatch) && propertyMatch;
  });

  return (
    <Container>
      <Title title="املاک و مستغلات" />
      <Div>
        <Search>
          <FiSearch size={34} />
          <input
            type="text"
            placeholder="جستجو کنید..."
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
        </Search>
        <Wrapper>
          <Select onClick={() => setOpen(!open)}>
            <span>
              املاک{" "}
              {property.industry
                ? "تجاری"
                : property.education
                ? "آمورشی"
                : "مسکونی"}
            </span>
            <MdKeyboardArrowDown
              style={{
                transform: `${open ? "rotate(180deg)" : "rotate(360deg)"}`,
              }}
            />
          </Select>
          {open && (
            <Filter>
              <Provider
                style={{
                  color: `${property.industry && "#FFC700"}`,
                  backgroundColor: `${
                    property.industry &&
                    "var(--Button-Primary---bg---off, #332800)"
                  }`,
                }}
                onClick={() => {
                  setProperty({ industry: true });
                  setOpen(false);
                }}
              >
                <h1>املاک تجاری</h1>
                {property.industry && (
                  <span
                    onClick={(e) => {
                      setProperty({ industry: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
              <Provider
                style={{
                  color: `${property.education && "#FFC700"}`,
                  backgroundColor: `${
                    property.education &&
                    "var(--Button-Primary---bg---off, #332800)"
                  }`,
                }}
                onClick={() => {
                  setProperty({ education: true });
                  setOpen(false);
                }}
              >
                <h1>املاک آموزشی</h1>
                {property.education && (
                  <span
                    onClick={(e) => {
                      setProperty({ education: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
              <Provider
                style={{
                  color: `${property.house && "#FFC700"}`,
                  backgroundColor: `${
                    property.house &&
                    "var(--Button-Primary---bg---off, #332800)"
                  }`,
                }}
                onClick={() => {
                  setProperty({ house: true });
                  setOpen(false);
                }}
              >
                <h1>املاک مسکونی</h1>
                {property.house && (
                  <span
                    onClick={(e) => {
                      setProperty({ house: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
            </Filter>
          )}
        </Wrapper>
      </Div>
      <List>
        {filteredItems.map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </List>
    </Container>
  );
};

export default Houses;
