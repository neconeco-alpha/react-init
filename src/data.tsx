import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from './store/hooks'

import { fetchAsyncGetDataItems, selectItems } from "./store/data/dataSlice";

const Data: React.FC = () => {
  const itemsData = useSelector(selectItems);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 非同期処理を実行 // 引数に例として私のQiitaアカウント名を指定
    dispatch(fetchAsyncGetDataItems());
  }, [dispatch]);

  const items = itemsData.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
    </div>
  ));

  return <>{items}</>;
}

export default Data