import Button from "../../Button";
import { FiTrash2 } from "react-icons/fi";
import NoteDetails from "../notes/NoteDetails";
import styled from "styled-components";
import { useState } from "react";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 7px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
  padding-right: 30px;
  div {
    width: fit-content;
  }
  @media (min-width: 845px) {
    padding: 15px 20px;
  }
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    padding: 15px 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #3b3b3b;
    color: #ffffff;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      background-color: #c30000;
    }
  }
`;

const Row = ({ code, title, publish_date, name, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <TableRow className="odd:bg-slate-50 hover:bg-black/10 py-5 duration-200">
        <TableCell>
          <div>
            <Code>#{code}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Code>{title}</Code>
          </div>
        </TableCell>
        <TableCell>
          <Buttons>
            <div>
              <FiTrash2 size={20} />
            </div>
            <Button
              label="مشاهده"
              color="#3B3B3B"
              textColor="#FFFFFF"
              onclick={() => setShowDetails(true)}
            />
          </Buttons>
        </TableCell>
      </TableRow>
      {showDetails && (
        <NoteDetails
          code={code}
          name={name}
          title={title}
          publish_date={publish_date}
          description={description}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
};

export default Row;
