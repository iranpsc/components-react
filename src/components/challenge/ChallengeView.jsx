import Organizers from "./organizers/Organizers";
import Questions from "./questions/Questions";
import blue from "../../assets/images/profile/blue-color.gif";
import first from "../../assets/images/challenge/challenge1.png";
import forth from "../../assets/images/challenge/challenge4.png";
import red from "../../assets/images/profile/red-color.gif";
import second from "../../assets/images/challenge/challenge2.png";
import third from "../../assets/images/challenge/challenge3.png";
import { useState } from "react";
import yellow from "../../assets/images/profile/yellow-color.gif";

const organizers = [
  {
    id: 1,
    color: blue,
    count: 12,
    image: first,
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
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
    slug:'سرمایه گذاری',
    company: "عرضه مستقیم مدل های سه بعدی",
    support: 11800,
    code: "PO-200003",
    date: "۲۳ تیر، ۱۴۰۳",
  },
];
const ChallengeView = () => {
  const [time, setTime] = useState(0.15);
  if (time > 0) return <Organizers organizers={organizers} />;
  if (time === 0) return <Questions />;
};

export default ChallengeView;
