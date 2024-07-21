import Organizers from "./organizers/Organizers";
import Questions from "./questions/Questions";
import blue from "../../assets/images/profile/blue-color.gif";
import falsep from "../../assets/images/challenge/close-circle.png";
import first from "../../assets/images/challenge/challenge1.png";
import forth from "../../assets/images/challenge/challenge4.png";
import red from "../../assets/images/profile/red-color.gif";
import second from "../../assets/images/challenge/challenge2.png";
import third from "../../assets/images/challenge/challenge3.png";
import truep from "../../assets/images/challenge/tick-circle.png";
import { useState } from "react";
import users from "../../assets/images/challenge/profile-2user.png";
import view from "../../assets/images/challenge/eye.png";
import yellow from "../../assets/images/profile/yellow-color.gif";

const organizers = [
  {
    id: 1,
    color: blue,
    count: 12,
    image: first,
    slug: "سرمایه گذاری",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 2,
    color: yellow,
    count: 2,
    image: third,
    slug: "سرمایه گذاری1",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 3,
    color: yellow,
    count: 2,
    image: second,
    slug: "سرمایه گذاری2",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 4,
    color: red,
    count: 7,
    image: forth,
    slug: "سرمایه گذاری3",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 5,
    color: red,
    count: 7,
    image: forth,
    slug: "سرمایه گذاری4",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 6,
    color: yellow,
    count: 2,
    image: third,
    slug: "سرمایه گذاری5",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
  {
    id: 7,
    color: yellow,
    count: 2,
    image: second,
    slug: "سرمایه گذاری6",
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
];

const footer_items = [
  { id: 1, icon: truep, count: 120, slug: "پاسخ های صحیح" },
  { id: 2, icon: falsep, count: 120, slug: "پاسخ های غلط" },
  { id: 3, icon: view, count: 21112, slug: "تعداد بازدید" },
  { id: 4, icon: users, count: 1911001, slug: "مشارکت کنندگان" },
];

const ChallengeView = () => {
  const [firstPage, setFirstPage] = useState(true);
  const [shining, setShining] = useState("four");
  const [footers, setFooters] = useState(footer_items);

  if (firstPage)
    return (
      <Organizers
        footers={footers}
        organizers={organizers}
        setFirstPage={setFirstPage}
        firstPage={firstPage}
        shining={shining}
      />
    );
  if (!firstPage)
    return (
      <Questions
        setFooters={setFooters}
        footers={footers}
        setFirstPage={setFirstPage}
        setShining={setShining}
      />
    );
};

export default ChallengeView;
