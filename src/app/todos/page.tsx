import { Data } from "../(redux)/data";
import Item from "./item";

export const metadata = {
  title: "To do list",
};

export default function Todos() {
  const data = Data;
  return (
    <>
      <p>To do list</p>
      <p className="flex gap-4">
        {data.map((item) => (
          <Item key={item.id} params={item} />
        ))}
      </p>
    </>
  );
}
