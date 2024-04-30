import { useState } from "react";
import { Switch } from "../components/Switch";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import Loader from "../components/Loader";

export const Home = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [toggleCheck, setToggleCheck] = useState(false);

  return (
    <section style={{ display: "flex", alignItems: "center" }}>
      <Switch
        checked={toggleSwitch}
        toggle={() => setToggleSwitch(!toggleSwitch)}
        size={100}
        color="rgb(155, 155, 24)"
      />
      <Checkbox
        checked={toggleCheck}
        size={40}
        color="rgb(155, 155, 24)"
        handleClick={() => setToggleCheck(!toggleCheck)}
      />
      <Button onClick={() => {}} color="rgb(155, 155, 24)">
        Test
      </Button>
      <Loader size={100}></Loader>
    </section>
  );
};
