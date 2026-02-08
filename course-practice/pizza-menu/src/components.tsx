import "./components.css";

export type MenuItem = {
  name: string;
  ingredients: string;
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
  const currentHour = new Date().getHours();
  const footerMsg =
    currentHour >= 12 && currentHour <= 22 ? "We're Open!" : "We're Close!";
  return <footer>{footerMsg}</footer>;
}

function trimMenuName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

function MenuItemComponent({ item }: { item: MenuItem }) {
  return (
    <div className="pizza-item">
      <img
        src={`pizza-imgs/${trimMenuName(item.name)}.jpg`}
        alt={trimMenuName(item.name)}
      ></img>
      <h3>{item.name}</h3>
      <p style={{ fontSize: "10px" }}>{item.ingredients}</p>
    </div>
  );
}

export function Menu({ menus }: { menus: MenuItem[] }) {
  return (
    <div className="menu-items">
      {menus.map((item: MenuItem) => {
        return <MenuItemComponent item={item} />;
      })}
    </div>
  );
}
