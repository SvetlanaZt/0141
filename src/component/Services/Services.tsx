import { useGetDataUserQuery } from "../../api/api";
import s from "./Services.module.scss";
import cn from "classnames";
import getCount from "../GetCount";

const Services = () => {
  const { data } = useGetDataUserQuery("");
  const booking = data?.booking;
  const tours = data?.tours;
  const hotels = data?.hotels;
  let total = 0;
  const widthRating = 375;

  if (booking && tours && hotels) {
    total = booking + tours + hotels;
  }
  const countWidth = (item: any) => {
    const countWidth = (item / total) * widthRating;
    return `${countWidth}px`;
  };
  return (
    <div className={s.blockServices}>
      <p className={s.textServices}>Services</p>
      <ul className={s.listServices}>
        <li className={s.itemServices}>
          <p
            className={cn(s.countTitle, getCount(countWidth(booking), s))}
            style={{ width: countWidth(booking) }}
          >
            Manual tour booking
          </p>
          <p className={s.count}>{booking}</p>
        </li>
        <li className={s.itemServices}>
          <p
            className={cn(s.countTitle, getCount(countWidth(tours), s))}
            style={{ width: countWidth(tours) }}
          >
            Package tours
          </p>
          <p className={s.count}>{tours}</p>
        </li>
        <li className={s.itemServices}>
          <p
            className={cn(s.countTitle, getCount(countWidth(hotels), s))}
            style={{ width: countWidth(hotels) }}
          >
            Hotels
          </p>
          <p className={s.count}>{hotels}</p>
        </li>
      </ul>
      {total && (
        <p className={s.totalServices}>
          Total <p className={s.total}>{total}</p>
        </p>
      )}
    </div>
  );
};
export default Services;
