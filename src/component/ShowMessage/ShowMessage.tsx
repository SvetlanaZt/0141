import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import s from "./ShowMessage.module.scss";

interface Props {
  message: any;
}

const ShowMessage: FC<Props> = ({ message }) => {
  // const message = useAppSelector((state) => state?.todo?.data);
  // const dfdf = message.slice(-3);

  const date = new Date();
  const dateAll = date.toDateString();

  return (
    <div className={s.blockMessage}>
      <ul className={s.listMessage}>
        {message?.map((item) => (
          <li key={item.id} className={s.items}>
            <div className={s.blockName}>
              <p className={s.name}>{item?.name}</p>
              <p className={s.date}>{dateAll}</p>
            </div>
            <div className={s.message}>
              <p className={s.messageText}>{item?.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShowMessage;
