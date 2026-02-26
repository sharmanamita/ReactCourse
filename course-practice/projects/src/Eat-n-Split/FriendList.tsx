import "./eatnsplit.css";

type friend = { id: number; name: string; image: string; balance: number };

export function FriendsList({ list }: { list: friend[] }) {
  return (
    <>
      <ul className="list">
        {list.map((item) => {
          return <ListItem item={item} />;
        })}
      </ul>
    </>
  );
}

const ListItem = ({ item }: { item: friend }) => {
  return (
    <>
      <ul key={item.id} className="list-item">
        <img src={item.image} alt={item.name} width={50} height={50} />
        <div className="info">
          <label>
            <strong>{item.name}</strong>
          </label>
          <CheckBalance balance={item.balance} />
        </div>
        <Button onClick={() => console.log(item.name)}>Select</Button>
      </ul>
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
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return <button onClick={onClick}>{children}</button>;
};
