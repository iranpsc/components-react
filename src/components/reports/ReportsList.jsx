import { MdKeyboardArrowDown } from "react-icons/md";
import ReportRow from "./ReportRow";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border-radius: 0.25rem;
  direction: rtl;
  /* width: 73vw !important; */
  overflow-x: auto;
  min-height: 93vh;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 640px) {
    /* width: 75vw !important; */
  }
  @media (min-width: 840px) {
    min-height: 80vh !important;
  }
  @media (min-width: 1024px) {
    /* width: 83vw !important; */
  }
  @media (min-width: 1280px) {
    /* width: 78.5vw !important; */
  }
  @media (min-width: 1360px) {
    /* width: 64.5vw !important; */
  }
  @media (min-width: 1920px) {
    width: auto !important;
    min-height: 55vh;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 1250px;
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
  div {
    position: relative;
    &:hover {
      background-color: #3b3b3b;
      transition: all 0.2s linear;
    }
    span {
      position: absolute;
      left: 10px;
      top: 3px;
      color: red;
      cursor: pointer;
      font-size: 14px;
    }
  }

  h1 {
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
  h2 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
`;
const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: #1a1a18;
  div {
    position: relative;
    padding-right: 5px;
    &:hover {
      background-color: #3b3b3b;
      transition: all 0.2s linear;
    }
    span {
      position: absolute;
      left: 10px;
      top: 3px;
      color: red;
      cursor: pointer;
      font-size: 14px;
    }
  }
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
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  position: relative;
`;

const Loader = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    color: white;
    border: none;
  }
`;

const ReportsList = ({
  rows,
  member,
  status,
  setStatus,
  setMember,
  domain,
  subdomain,
}) => {
  const [visibleRows, setVisibleRows] = useState(10);

  const [filters, setFilters] = useState({
    status: false,
    member: false,
  });

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>کد گزارش</TableHeader>
            <TableHeader date>عنوان گزارش</TableHeader>
            <TableHeader>
              <Div>
                موضوع
                <Arrows onClick={() => setFilters({ member: !filters.member })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.member ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.member && (
                <StatusFilter>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.display && "#3B3B3B"}`,
                    }}
                  >
                    <h1
                      onClick={() => {
                        setMember({ ...member, display: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      خطا در نمایش
                    </h1>
                    {member.display && (
                      <span
                        onClick={() => {
                          setMember({ ...member, display: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.spell && "#3B3B3B"}`,
                    }}
                  >
                    <h2
                      onClick={() => {
                        setMember({ ...member, spell: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      خطا در املا
                    </h2>
                    {member.spell && (
                      <span
                        onClick={() => {
                          setMember({ ...member, spell: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.code && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, code: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      خطا در کدنویسی
                    </h3>
                    {member.code && (
                      <span
                        onClick={() => {
                          setMember({ ...member, code: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.fbs && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, fbs: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      FBS کندی سامانه
                    </h3>
                    {member.fbs && (
                      <span
                        onClick={() => {
                          setMember({ ...member, fbs: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.respect && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, respect: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      بی احترامی
                    </h3>
                    {member.respect && (
                      <span
                        onClick={() => {
                          setMember({ ...member, respect: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                </StatusFilter>
              )}
            </TableHeader>
            <TableHeader title>
              <Div>
                وضعیت
                <Arrows onClick={() => setFilters({ status: !filters.status })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.status ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.status && (
                <TitleFilter>
                  <div
                    style={{
                      backgroundColor: `${status.confirmed && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, confirmed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      پاسخ داده شده{" "}
                    </h1>
                    {status.confirmed && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, confirmed: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: `${status.pending && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, pending: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      در حال برسی{" "}
                    </h1>
                    {status.pending && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, pending: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: `${status.failed && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, failed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      بسته شده{" "}
                    </h1>
                    {status.failed && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, failed: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader subject>
              <Div>تاریخ و ساعت ارسال</Div>
            </TableHeader>
            <TableHeader>مشاهده گزارش</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.slice(0, visibleRows).map((request) => (
            <ReportRow
              key={request.id}
              {...request}
              domain={domain}
              subdomain={subdomain}
            />
          ))}
        </tbody>
      </Table>
      {visibleRows < rows.length && (
        <Loader>
          <button onClick={handleLoadMore}>نمایش موارد بیشتر</button>
        </Loader>
      )}
    </Container>
  );
};

export default ReportsList;
