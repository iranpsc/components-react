import { Tooltip as ReactTooltip } from "react-tooltip";
import Row from "./Row";
import cav from "../../../../assets/images/profile/cav.gif";
import gif from "../../../../assets/images/profile/satisfaction.gif";
import limit from "../../../../assets/images/profile/limit-of-influence.gif";
import psc from "../../../../assets/images/profile/psc.gif";
import pscplus from "../../../../assets/images/profile/pscplus.gif";
import rial from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 0.25rem;
  direction: rtl;
  overflow-x: auto;
  /* min-height: 93vh; */
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  text-align: right;
  margin-top: 5px;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 430px;
`;

const TableHead = styled.thead`
  background-color: #1a1a18;
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 20px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
  text-align: center;
  &:nth-of-type(2) {
    padding-right: 37px;
  }
  div {
    width: fit-content;
  }
`;

const List = ({ members }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="limit"
                  width={30}
                  height={30}
                  alt="limit"
                  src={limit}
                  loading="lazy"
                />
                <ReactTooltip
                  style={{
                    borderRadius: "10px",
                    width: "90px",
                    textAlign: "center",
                    zIndex: "999",
                  }}
                  id="limit"
                  place="top"
                  content="اعضای خانواده"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="psc"
                  width={30}
                  height={30}
                  alt="psc"
                  src={psc}
                  loading="lazy"
                />
                <ReactTooltip
                  style={{
                    borderRadius: "10px",
                    width: "220px",
                    textAlign: "center",
                    zIndex: "999",
                  }}
                  id="psc"
                  place="top"
                  content="پاداش معرفی معادل ریالی در واحد PSC"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="pscplus"
                  width={30}
                  height={30}
                  alt="pscplus"
                  src={pscplus}
                  loading="lazy"
                />
                <ReactTooltip
                  style={{
                    borderRadius: "10px",
                    width: "90px",
                    textAlign: "center",
                    zIndex: "999",
                  }}
                  id="pscplus"
                  place="top"
                  content="ذخیره دیتا"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="cav"
                  width={30}
                  height={30}
                  alt="cav"
                  src={cav}
                  loading="lazy"
                />
                <ReactTooltip
                  style={{
                    borderRadius: "10px",
                    width: "140px",
                    textAlign: "center",
                    zIndex: "999",
                  }}
                  id="cav"
                  place="top"
                  content="ذخیره سرمایه انباشته"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="rial"
                  width={30}
                  height={30}
                  alt="rial"
                  src={rial}
                  loading="lazy"
                />
                <ReactTooltip
                  style={{
                    borderRadius: "10px",
                    width: "150px",
                    textAlign: "center",
                    zIndex: "999",
                  }}
                  id="rial"
                  place="top"
                  content="افزایش سود پاداش معرفی"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  data-tooltip-id="gif"
                  width={30}
                  height={30}
                  alt="gif"
                  src={gif}
                  loading="lazy"
                />
                <ReactTooltip id="gif" place="top" content="رضایت" />
              </div>
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {members.map((member) => (
            <Row key={member.id} {...member} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
