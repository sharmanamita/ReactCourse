import { useState } from "react";

export function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const tip = bill * ((service + friendService) / 2 / 100);

  function handleReset(){
    setBill(0);
    setService(0);
    setFriendService(0);
  }
  return (
    <>
      <BillAmount bill={bill} setBill={setBill} />
      <ServicePercentage service={service} setService={setService}>
        How did you like the service?
      </ServicePercentage>
      <ServicePercentage service={friendService} setService={setFriendService}>
        How did your friend like the service?
      </ServicePercentage>
      <TotalAmount
        bill={bill}
        tip={tip}
      />
      <Button onReset={handleReset} />
    </>
  );
}

function BillAmount({
  bill,
  setBill,
}: {
  bill: number;
  setBill: (bill: number) => void;
}) {
  return (
    <>
      <label>How much was the bill amount?</label>
      <input
        type="text"
        placeholder="bill.."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </>
  );
}

function ServicePercentage({
  children,
  service,
  setService,
}: {
  children: string;
  service: number;
  setService: (service: number) => void;
}) {
  return (
    <p>
      <label>{children}</label>
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        <option value="0">Bad - 0%</option>
        <option value="5">Good - 5%</option>
        <option value="10">Average - 15%</option>
        <option value="20">Excellent - 20%</option>
      </select>
    </p>
  );
}

function TotalAmount({
  bill,
  tip
}: {
  bill: number;
  tip: number;
}) {
 
  return (
    <>
      <p>
        you have to pay ${bill + tip} (${bill} + ${tip})
      </p>
    </>
  );
}

function Button({onReset}: {onReset: () => void}) {
  return (
    <>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
