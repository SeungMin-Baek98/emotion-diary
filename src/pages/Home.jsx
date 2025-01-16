import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const getMonthlyData = (pivoDate, data) => {
  const beginTime = new Date(
    pivoDate.getFullYear(),
    pivoDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivoDate.getFullYear(),
    pivoDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);

  const [pivoDate, setPivoDate] = useState(new Date());

  const onDecreaseYear = () => {
    setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() - 1));
  };

  const onIncreaseYear = () => {
    setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() + 1));
  };

  const monthlyData = getMonthlyData(pivoDate, data);

  return (
    <div>
      <Header
        title={`${pivoDate.getFullYear()}년 ${pivoDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseYear} />}
        rightChild={<Button text={">"} onClick={onIncreaseYear} />}
      />

      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
