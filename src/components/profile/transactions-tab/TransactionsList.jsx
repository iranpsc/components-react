import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import TransactionRow from "./TransactionRow";
import blue from "../../../assets/images/profile/blue-color.gif";
import psc from "../../../assets/images/profile/psc.gif";
import red from "../../../assets/images/profile/red-color.gif";
import rial from "../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";
import yellow from "../../../assets/images/profile/yellow-color.gif";

const Container = styled.div`
  border-radius: 0.25rem;
  direction: rtl;
  width: 74vw !important;
  overflow-x: auto;
  @media (min-width: 640px) {
    width: 78vw !important;
  }
  @media (min-width: 1024px) {
    width: 83vw !important;
  }
  @media (min-width: 1280px) {
    width: 78.5vw !important;
  }
  @media (min-width: 1360px) {
    width: 78.5vw !important;
  }
  @media (min-width: 1920px) {
    width: auto !important;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 1215px;
  text-align: right;
  margin-top: 5px;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media (min-width: 1920px) {
    width: 100% !important;
  }
`;

const TableHead = styled.thead`
  background-color: #1a1a18;
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;
const StatusFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 169px;
  padding: 20px;
  border-radius: 10px;
  background-color: #1a1a18;
  font-size: 16px;
  h1 {
    font-weight: 400;
    color: #18c08f;
    background-color: #18c09017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
  h2 {
    color: #ffc800;
    font-weight: 400;
    background-color: #ffc80017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
  h3 {
    color: #ff0000;
    font-weight: 400;
    background-color: #ff000017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
`;
const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 20px;
  border-radius: 10px;
  background-color: #1a1a18;
  h1 {
    font-size: 16px;
    color: #dedee9;
    font-weight: 400;
    cursor: pointer;
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;
const SubjectFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 140px;
  padding: 20px;
  border-radius: 10px;
  background-color: #1a1a18;
  font-size: 16px;
  span {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;
const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    &:first-of-type {
      margin-bottom: -6px;
    }
  }
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  position: relative;
`;
const subjects = [
  { id: 1, label: "رنگ آبی", slug: 'blue', gif: blue },
  { id: 2, label: "رنگ قرمز", slug: 'red', gif: red },
  { id: 3, label: "رنگ زرد", slug: 'yellow', gif: yellow },
  { id: 4, label: "ریال", slug: 'rial', gif: rial },
  { id: 5, label: "PSC", slug: 'psc', gif: psc },
];
const TransactionsList = ({ rows, setStatus, setTitle, setSubject }) => {
  const [filters, setFilters] = useState({
    status: false,
    title: false,
    subject: false,
  });
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>شناسه تراکنش</TableHeader>
            <TableHeader>تاریخ و ساعت ارسال</TableHeader>
            <TableHeader>
              <Div>
                وضعیت
                <Arrows
                  onClick={() =>
                    setFilters({ status: !filters.status })
                  }
                >
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </Arrows>
              </Div>
              {filters.status && (
                <StatusFilter>
                  <h1
                    onClick={() => {
                      setStatus("success");
                      setFilters({ ...filters, status: false });
                    }}
                  >
                    موفق
                  </h1>
                  <h2
                    onClick={() => {
                      setStatus("pending");
                      setFilters({ ...filters, status: false });
                    }}
                  >
                    معلق
                  </h2>
                  <h3
                    onClick={() => {
                      setStatus("failed");
                      setFilters({ ...filters, status: false });
                    }}
                  >
                    ناموفق
                  </h3>
                </StatusFilter>
              )}
            </TableHeader>
            <TableHeader>
              <Div>
                عنوان
                <Arrows
                  onClick={() =>
                    setFilters({ title: !filters.title })
                  }
                >
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </Arrows>
              </Div>
              {filters.title && (
                <TitleFilter>
                  <h1
                    onClick={() => {
                      setTitle("property_buy");
                      setFilters({ ...filters, title: false });
                    }}
                  >
                    {" "}
                    خرید دارایی{" "}
                  </h1>
                  <h1
                    onClick={() => {
                      setTitle("property_dealing");
                      setFilters({ ...filters, title: false });
                    }}
                  >
                    {" "}
                    معامله ملک{" "}
                  </h1>
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader>
              <Div>
                موضوع
                <Arrows
                  onClick={() =>
                    setFilters({ subject: !filters.subject })
                  }
                >
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </Arrows>
              </Div>
              {filters.subject && (
                <SubjectFilter>
                  {subjects.map((subject) => (
                    <div
                      onClick={() => {
                        setSubject(subject.slug);
                        setFilters({ ...filters, subject: false });
                      }}
                      key={subject.id}
                      style={{
                        display: "flex",
                        gap: "5px",
                        cursor: "pointer",
                        alignItems: "center",
                        marginBottom: `${subject.id !== 5 && "10px"}`,
                      }}
                    >
                      <img
                        src={subject.gif}
                        alt={subject.slug}
                        width={24}
                        height={26}
                        loading="lazy"
                      />
                      <span>{subject.label}</span>
                    </div>
                  ))}
                </SubjectFilter>
              )}
            </TableHeader>
            <TableHeader>مقدار</TableHeader>
            <TableHeader>مشاهده و چاپ</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.map((transaction) => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionsList;
