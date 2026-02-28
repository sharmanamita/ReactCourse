import React, { useState } from "react";
import { Button, FriendsList } from "./FriendList";
import "./eatnsplit.css";

export type friend = {
  id: number | string;
  name: string;
  image: string;
  balance: number;
};

const userList: friend[] = [
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
  const [hideForm, setHideForm] = useState(false);
  const [friends, setFriends] = useState(userList);
  const [selectedFriend, setSelectedFriend] = useState<friend | null>(null);

  function handleSelection(id: number | string) {
    const user = friends.find((item: friend) => item.id == id);
    setSelectedFriend(user ? user : null);
  }

  function onSubmit(value: number | "") {
    console.log(value);
    const updatedFriends = friends.map((item: friend) =>
      item.id == selectedFriend?.id
        ? { ...item, balance: item.balance + Number(value) }
        : item,
    );
    setFriends(updatedFriends);
    setSelectedFriend(null);
  }

  return (
    <div className="container">
      <div className="sidebar">
        <FriendsList
          list={friends}
          selected={selectedFriend}
          onSelection={(id: string | number) => handleSelection(id)}
        />
        <FormAddFriend
          hide={hideForm}
          addFriend={(newFriend: friend) => {
            setFriends([...friends, newFriend]);
            setHideForm(false);
          }}
        />
        <Button onClick={() => setHideForm(!hideForm)}>
          {hideForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div className="content">
        <FormSplitBill
          selectedUser={selectedFriend}
          onSubmit={(value: number | "") => onSubmit(value)}
        />
      </div>
    </div>
  );
}

function FormAddFriend({
  hide,
  addFriend,
}: {
  hide: boolean;
  addFriend: (newFriend: friend) => void;
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525",
  );

  function handleAddFriend(e: React.SubmitEvent<HTMLFormElement>) {
    const user = {
      name: name,
      image: image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    addFriend(user);
    e.preventDefault();
    setName("");
  }

  return (
    <>
      <form
        className="form"
        style={{ display: hide ? "block" : "none" }}
        onSubmit={(e) => handleAddFriend(e)}
      >
        <input
          type="text"
          placeholder="name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url.."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button onClick={() => console.log("Add Friend clicked")}>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill({
  selectedUser,
  onSubmit,
}: {
  selectedUser: friend | null;
  onSubmit: (value: number | "") => void;
}) {
  const [bill, setBill] = useState("");
  const [paidByYou, setPaidByYou] = useState("");
  const paidByFriend = bill ? Number(bill) - Number(paidByYou) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const value = whoIsPaying == "you" ? paidByFriend : -paidByFriend;
    onSubmit(value);
    setBill("");
    setPaidByYou("");
  }

  return (
    <>
      <form className="bill-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Split the bill with {selectedUser?.name}</h3>
        <p>
          <label>🤑 Bill Value</label>
          <input
            type="text"
            placeholder="Bill Value.."
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </p>

        <p>
          <label>🧍 Your Expenses</label>
          <input
            type="text"
            placeholder="Expenses.."
            value={paidByYou}
            onChange={(e) => setPaidByYou(e.target.value)}
          />
        </p>

        <p>
          <label>🧑‍🤝‍🧑 {selectedUser?.name} Expenses</label>
          <input type="text" value={paidByFriend} disabled />
        </p>

        <p>
          <label>💸 Who is paying the bill?</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="you">You</option>
            <option value={selectedUser?.name}>{selectedUser?.name}</option>
          </select>
        </p>
        <Button>Split Bill</Button>
      </form>
    </>
  );
}
