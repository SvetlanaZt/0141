import { FC } from "react";
import s from "./ShowMessage.module.scss";

interface Props {
  id: number;
  message: string;
  name: string;
}
interface PropsMessage {
  message: Props[];
}

const ShowMessage: FC<PropsMessage> = ({ message }) => {
  console.log(message);

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
