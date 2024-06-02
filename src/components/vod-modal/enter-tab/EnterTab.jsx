import EnterEdit from "./EnterEdit";
import EnterInfo from "./EnterInfo";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineHome } from "react-icons/md";
import psc from "../../../assets/images/shop/psc.png";
import rial from "../../../assets/images/shop/rial.png";
import { useState } from "react";
import video1 from "../../../assets/images/slide4.png";
import video2 from "../../../assets/images/player/player.mp4";

const enterData = [
  {
    id: 1,
    inputs: [
      {
        id: 1,
        title: "هزینه ورودی (PSC)",
        value: "20",
        icon: psc,
      },
      {
        id: 2,
        title: "هزینه ورودی (IRR)",
        value: "300000",
        icon: rial,
      },
      {
        id: 3,
        title: "رتبه",
        value: "QA31-10789",
        icon: <HiOutlineBuildingOffice />,
      },
      {
        id: 4,
        title: "سطح",
        icon: <MdOutlineHome />,
        levels: [
          "همان سطح",
          "غیر از این سطح",
          "همان سطح و به سطح بالاتر",
          "همان سطح و به سطح پایین تر",
        ],
        options: [
          "خبرنگار",
          "شهروند",
          "مشارکت کننده",
          "توسعه دهنده",
          "بازرس",
          "تاجر",
          "وکیل",
          "شورای شهر",
          "شهردار",
          "فرماندار",
          "وزیر",
          "قاضی",
          "قانونگذار",
        ],
      },
    ],
    videos: [
      { id: 1, video: video2 },
      { id: 2, video: video1 },
      { id: 3, video: video1 },
      { id: 4, video: video1 },
      { id: 5, video: video1 },
      { id: 6, video: video1 },
    ],
  },
];

const EnterTab = () => {
  const [data, setData] = useState(enterData);
  const [edit, setEdit] = useState(false);
  const [payed, setPayed] = useState(false);
  const [isOwner, setIsOwner] = useState(true);

  if (!edit)
    return (
      <EnterInfo
        edit={edit}
        setEdit={setEdit}
        data={data}
        payed={payed}
        setPayed={setPayed}
        isOwner={isOwner}
      />
    );
  if (edit)
    return (
      <EnterEdit
        setEdit={setEdit}
        data={data}
        payed={payed}
        setPayed={setPayed}
      />
    );
};

export default EnterTab;
