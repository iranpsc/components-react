import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  background-color: #000;
  border-radius: 8px;
  margin-top: 20px;
`;

const DropdownButton = styled.div`
  background-color: #333;
  color: #ffffff;
  padding: 10px;
  width: 150px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const Arrow = styled.span`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-left: 10px;
`;

const DropdownMenu = styled.div`
  background-color: #222;
  position: absolute;
  top: 55px;
  left: 0;
  width: 170px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.h2`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`;

const Content = styled.p`
  color: #aaa;
  background-color: #333;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  line-height: 1.6;
`;

const yearContent = {
  "۱۴۰۳":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت.",
  "۱۴۰۲":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت.",
  "۱۴۰۱":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت.",
};

const CurrentYears = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("۱۴۰۳");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectYear = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <Container>
      <Div>
        <Label>پیش بینی شما</Label>
        <div>
          <DropdownButton onClick={toggleDropdown}>
            <span>{selectedYear}</span>
            <Arrow
              style={{
                transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
              }}
            />
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem onClick={() => selectYear("۱۴۰۳")}>
                سال ۱۴۰۳
              </DropdownItem>
              <DropdownItem onClick={() => selectYear("۱۴۰۲")}>
                سال ۱۴۰۲
              </DropdownItem>
              <DropdownItem onClick={() => selectYear("۱۴۰۱")}>
                سال ۱۴۰۱
              </DropdownItem>
            </DropdownMenu>
          )}
        </div>
      </Div>
      <Content>
        <Label>پیش بینی شما برای سال {selectedYear} چیست؟</Label>
        {yearContent[selectedYear]}
      </Content>
    </Container>
  );
};

export default CurrentYears;
