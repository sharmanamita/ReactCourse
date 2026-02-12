import "./components.css";

export type MenuItem = {
  name: string;
  ingredients: string;
  price: number;
  soldOut: boolean;
};

export function Header(props: { name: string }) {
  const { name } = props;
  return (
    <>
      <h2 className="header">{name}</h2>
    </>
  );
}

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const footerMsg =
    hour >= openHour && hour <= closeHour
      ? `We're open until ${openHour}:00. Come visit us or order online`
      : "Sorry, We're Closed!";
  return <footer>{footerMsg}</footer>;
}

function trimMenuName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

function MenuItemComponent({ item }: { item: MenuItem }) {
  return (
    <div className={`pizza-item ${item.soldOut ? "soldout" : ""}`}>
      <img
        src={`pizza-imgs/${trimMenuName(item.name)}.jpg`}
        alt={trimMenuName(item.name)}
      ></img>
      <h3>{item.name}</h3>
      <p>{item.ingredients}</p>
      <p>
        <strong>{item.soldOut ? "SOLD OUT" : item.price}</strong>
      </p>
    </div>
  );
}

export function Menu({ menus }: { menus: MenuItem[] }) {
  return (
    <div className="menu-items">
      {menus.map((item: MenuItem, index: number) => {
        return <MenuItemComponent item={item} key={index} />;
      })}
    </div>
  );
}
