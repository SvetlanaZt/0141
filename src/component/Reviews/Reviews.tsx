import { HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import ShowMessage from "../ShowMessage/ShowMessage";
import s from "./Reviews.module.scss";

const Reviews = () => {
  const [show, setShow] = useState(false);

  const allMessage = useAppSelector((state) => state?.todo?.data);
  const messageLast = allMessage.slice(-3);
  const lengthMessage = allMessage?.length;

  return (
    <>
      <div className={s.blockReviews}>
        <div className={s.wrapen}>
          <p className={s.textReviews}>Latest reviews</p>
          <button className={s.allReviews} onClick={() => setShow(true)}>
            All reviews
          </button>
        </div>
        {/* <link href="*">All reviews</link> */}
        <div className={s.blockSvg}>
          <HeartOutlined className={s.messageSvg} />
          <p className={s.count}>131</p>
          <MessageOutlined className={s.messageSvg} />
          <p className={s.count}>{lengthMessage}</p>
        </div>
      </div>
      {show ? (
        <ShowMessage message={allMessage} />
      ) : (
        <ShowMessage message={messageLast} />
      )}
    </>
  );
};
export default Reviews;
