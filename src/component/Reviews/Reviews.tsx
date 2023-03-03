import { HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";
import s from "./Reviews.module.scss";

const Reviews = () => {
  const currentMessage = useAppSelector((state) => state?.todo?.data);
  const lengthMessage = currentMessage?.length;
  return (
    <div className={s.blockReviews}>
      <div className={s.wrapen}>
        <p className={s.textReviews}>Latest reviews</p>
        <p className={s.allReviews}>All reviews</p>
      </div>
      {/* <link href="*">All reviews</link> */}
      <div className={s.blockSvg}>
        <HeartOutlined className={s.messageSvg} />
        <p className={s.count}>131</p>
        <MessageOutlined className={s.messageSvg} />
        <p className={s.count}>{lengthMessage}</p>
      </div>
    </div>
  );
};
export default Reviews;
