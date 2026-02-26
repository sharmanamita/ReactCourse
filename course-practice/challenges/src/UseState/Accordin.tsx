import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const titleStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  cursor: "pointer",
};

const accordionBox: React.CSSProperties = {
  width: "500px",
  margin: "10px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

export function Accordion() {
  return (
    <>
      {faqs.map((item, index) => {
        return (
          <AccordionItem num={`0${index + 1}`} title={item.title}>
            {item.text}
          </AccordionItem>
        );
      })}
    </>
  );
}

function AccordionItem({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={accordionBox}>
      <h3 style={titleStyle}>
        <span>{num}</span>
        <span> {title}</span>
        <span onClick={() => setIsOpen(!isOpen)}>➖</span>
      </h3>
      <p style={{ display: isOpen ? "block" : "none" }}>{children}</p>
    </div>
  );
}
