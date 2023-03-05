interface Props {
  [key: string]: string;
}

const getCount = (countWidth: any, s: Props) => {
  console.log(countWidth.slice(0, 2));
  const number = countWidth.slice(0, 2);
  if (number > 50) {
    return s.styleGreen;
  } else {
    return s.styleBlue;
  }
};

export default getCount;
