import { useContext, useState } from "react";

import { LoaderContext } from "../../LoaderProvider";
import { LuEye } from "react-icons/lu";
import ReportDetails from "./ReportDetails.jsx";
import styled from "styled-components";

const TableRow = styled.tr`
  background-color: ${(props) =>
    props.status === "confirmed" ? "#ffc70021" : "transparent"};
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
  &:nth-of-type(5) {
    padding-right: 10px;
  }
`;

const Code = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const Date = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const View = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.id === 1 ? "#ffc700" : "#3b3b3b")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #ffc700;
    transition: all 0.2s linear;
  }
  svg {
    color: white;
  }
`;

const Status = styled.h3`
  color: #ffffff;
  width: fit-content;
  font-size: 16px;
  border-radius: 0.25rem;
  font-weight: 400;
`;

const ReportRow = ({
  id,
  code,
  date,
  time,
  title,
  status,
  member,
  domain,
  subdomain,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { setIsLoading } = useContext(LoaderContext);
  return (
    <>
      <TableRow status={status}>
        <TableCell>
          <div>
            <Code>#{code}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Date>{title}</Date>
          </div>
        </TableCell>
        <TableCell>
          <Status>{member}</Status>
        </TableCell>
        <TableCell>
          <Title
            style={{
              color: `${
                status === "confirmed"
                  ? "#18C08F"
                  : status === "pending"
                  ? "#FFC700"
                  : "#A0A0AB"
              }`,
            }}
          >
            {status === "confirmed"
              ? "پاسخ داده شده"
              : status === "pending"
              ? "در حال برسی"
              : "بسته شده"}
          </Title>
        </TableCell>
        <TableCell>
          <div>
            <Date>
              {date} | {time}
            </Date>
          </div>
        </TableCell>
        <TableCell>
          <View
            id={id}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setShowDetails(true);
              }, 2000);
            }}
          >
            <LuEye size={20} />
          </View>
        </TableCell>
      </TableRow>
      {showDetails && (
        <ReportDetails
          status={status}
          date={date}
          time={time}
          member={member}
          code={code}
          setShowDetails={setShowDetails}
          domain={domain}
          subdomain={subdomain}
        />
      )}
    </>
  );
};

export default ReportRow;
