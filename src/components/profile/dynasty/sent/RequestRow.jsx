import { useContext, useState } from "react";

import { LoaderContext } from "../../../../LoaderProvider";
import { LuEye } from "react-icons/lu";
import RequestDetails from "./RequestDetails";
import { convertToPersian } from "../../../../lib/convertToPersian";
import gift from "../../../../assets/images/player/satisfy.png";
import pscGif from "../../../../assets/images/profile/psc.gif";
import styled from "styled-components";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
  &:nth-of-type(5) {
    padding-right: 10px;
  }
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

const Code = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #0066ff;
  text-decoration: none;
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

const Subject = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
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

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  h3 {
    color: #868b90;
    font-size: 16px;
    font-weight: 500;
  }
`;

const RequestRow = ({ id, code, date, time, status, member, gif, psc }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { setIsLoading } = useContext(LoaderContext);
  return (
    <>
      <TableRow>
        <TableCell>
          <div>
            <Code href="https://rgb.irpsc.com/fa/citizen/hm-2000001">HM-{code}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Date>
              {date} | {time}
            </Date>
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
                  : "#FF0000"
              }`,
            }}
          >
            {status === "confirmed"
              ? "تایید شده"
              : status === "pending"
              ? "در دست بررسی"
              : "رد شده"}
          </Title>
        </TableCell>
        <TableCell>
          <Subject>
            <Div>
              <h3>{convertToPersian(gif)}</h3>
              <Image
                width={300}
                height={300}
                alt="doctor"
                loading="lazy"
                src={gift}
              />
            </Div>
            <Div>
              <h3>{convertToPersian(psc)}</h3>
              <Image
                width={300}
                height={300}
                alt="doctor"
                loading="lazy"
                src={pscGif}
              />
            </Div>
          </Subject>
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
        <RequestDetails
          status={status}
          date={date}
          time={time}
          code={code}
          gif={gif}
          psc={psc}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
};

export default RequestRow;
