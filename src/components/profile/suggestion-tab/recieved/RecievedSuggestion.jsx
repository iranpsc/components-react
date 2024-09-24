import Suggestion from "./Suggestion";
import Title from "../../../Title";
import meter from "../../../../assets/images/profile/meter.png";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  height: 190px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  @media (min-width: 844px) {
    height: 205px;
  }
  @media (min-width: 880px) {
    height: 158px;
  }
  @media (min-width: 890px) {
    height: 230px;
  }
  @media (min-width: 900px) {
    height: 225px;
  }
  @media (min-width: 930px) {
    height: 244px;
  }
  @media (min-width: 1024px) {
    height: 280px;
  }
  @media (min-width: 1180px) {
    height: 550px;
  }
  @media (min-width: 1280px) {
    height: 577px;
  }
  @media (min-width: 1366px) {
    height: 590px;
  }
`;

const suggestions = [
  {
    id: 1,
    property: {
      image: meter,
      location: "قزوین، خیابان جانبازان نور",
      code: "QA31-11213",
      value: "۱۱۰",
      rial: "۳M",
      psc: "۳K",
    },
    suggestions_list: [
      {
        id: 1,
        code: "HM-200020",
        date: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        rial: "۳M",
        psc: "۳K",
        percent: "۲۱۰",
        information:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف  آینده شناخت فراوان جامعه و متخصصان را می طلبد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      },
      {
        id: 2,
        code: "HM-200020",
        date: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        rial: "۳M",
        psc: "۳K",
        percent: "۲۱۰",
        information:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف  آینده شناخت فراوان جامعه و متخصصان را می طلبد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      },
    ],
  },
  {
    id: 2,
    property: {
      image: meter,
      location: "قزوین، خیابان جانبازان نور",
      code: "QA31-11213",
      value: "۱۱۰",
      rial: "۳M",
      psc: "۳K",
    },
    suggestions_list: [
      {
        id: 1,
        code: "HM-200020",
        date: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        rial: "۳M",
        psc: "۳K",
        percent: "۲۱۰",
        information:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف  آینده شناخت فراوان جامعه و متخصصان را می طلبد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      },
    ],
  },
];

const RecievedSuggestion = () => {
  return (
    <Container>
      <Title title="پیشنهادات دریافتی" />
      <Wrapper>
        {suggestions.map((suggestion) => (
          <Suggestion key={suggestion.id} {...suggestion} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default RecievedSuggestion;
