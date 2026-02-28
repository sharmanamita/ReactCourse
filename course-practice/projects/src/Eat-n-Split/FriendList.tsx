import type { friend } from "./EatnSplit";
import "./eatnsplit.css";

export function FriendsList({
  list,
  selected,
  onSelection,
}: {
  list: friend[];
  selected: friend | null;
  onSelection: (id: string | number) => void;
}) {
  return (
    <>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              item={item}
              selected={selected}
              onSelect={(id: string | number) => onSelection(id)}
            />
          );
        })}
      </ul>
    </>
  );
}

const ListItem = ({
  item,
  selected,
  onSelect,
}: {
  item: friend;
  selected: friend | null;
  onSelect: (id: number | string) => void;
}) => {
  return (
    <>
      <li
        key={item.id}
        className={`list-item ${selected?.id == item.id ? "selected" : ""}`}
        onClick={() => onSelect(item.id)}
      >
        <img src={item.image} alt={item.name} width={50} height={50} />
        <div className="info">
          <label>
            <strong>{item.name}</strong>
          </label>
          <CheckBalance balance={item.balance} />
        </div>
        <Button onClick={() => console.log(item.name)}>Select</Button>
      </li>
    </>
  );
};

const CheckBalance = ({ balance }: { balance: number }) => {
  if (balance < 0) {
    return <small className="red">`You owe ${Math.abs(balance)}$`</small>;
  } else if (balance > 0) {
    return <small className="green">`You are owed ${balance}$`</small>;
  } else {
    return <small>You are all settled up</small>;
  }
};

export const Button = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return <button onClick={onClick}>{children}</button>;
};
