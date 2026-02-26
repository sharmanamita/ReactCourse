import { useState } from "react";
import { Button, FriendsList } from "./FriendList";
import "./eatnsplit.css";

const userList = [
  {
    id: 1,
    name: "Priya Sharma",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525", // Replace with real avatar URL
    balance: -10,
  },
  {
    id: 2,
    name: "Rahul Patel",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525",
    balance: 0,
  },
  {
    id: 3,
    name: "Anita Desai",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525",
    balance: 20,
  },
  {
    id: 4,
    name: "Vikram Singh",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525",
    balance: 35,
  },
  {
    id: 5,
    name: "Sneha Gupta",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525",
    balance: 0,
  },
];

export function EatnSplit() {
  const [hideForm, setHideForm] = useState(true);
  return (
    <div className="container">
      <div className="sidebar">
        <FriendsList list={userList} />
        <FormAddFriend hide={hideForm} />
        <Button onClick={() => setHideForm(!hideForm)}>Add Friend</Button>
      </div>
      <div className="content">
        <strong>Welcome to Eat n Split</strong>
        <p>
          Select a friend from the sidebar to view your balance and split the
          bill.
        </p>
        <FormSplitBill />
      </div>
    </div>
  );
}

function FormAddFriend({ hide }: { hide: boolean }) {
  return (
    <>
      <form className="form" style={{ display: hide ? "none" : "block" }}>
        <input type="text" placeholder="name.." />
        <input type="text" placeholder="Url.." />
        <Button onClick={() => console.log("Add Friend clicked")}>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill() {
  return (
    <>
      <form className="bill-form">
        <p>
          <label>🤑 Bill Value</label>
          <input type="text" placeholder="Bill Value.." />
        </p>

        <p>
          <label>🧍 Your Expenses</label>
          <input type="text" placeholder="Bill Value.." />
        </p>

        <p>
          <label>🧑‍🤝‍🧑X's Expenses</label>
          <input type="text" placeholder="Bill Value.." />
        </p>

        <p>
          <label>💸 Who is paying the bill?</label>
          <select>
            <option value="user"></option>
            <option value="friend"></option>
          </select>
        </p>
        <Button onClick={() => console.log("Split Bill clicked")}>
          Split Bill
        </Button>
      </form>
    </>
  );
}
