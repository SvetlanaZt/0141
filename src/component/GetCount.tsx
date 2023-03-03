interface Props {
  [key: string]: string;
}

const getCount = (countWidth: any, s: Props) => {
  console.log(countWidth);
  if (countWidth > "185px") {
    return s.styleGreen;
  } else {
    return s.styleBlue;
  }
};

export default getCount;
