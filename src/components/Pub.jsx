import { useState } from "react";
import BarControls from "./BarControls";
import BarStats from "./BarStats";

const Pub = () => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });

  const onAddDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });

    // if (drinkName === "beer") {
    //   setBottles({ ...bottles, beer: bottles.beer + 1 });
    // }
    // if (drinkName === "wine") {
    //   setBottles({ ...bottles, wine: bottles.wine + 1 });
    // }
    // if (drinkName === "whiskey") {
    //   setBottles({ ...bottles, whiskey: bottles.whiskey + 1 });
    // }
  };

  return (
    <div>
      <BarStats bottles={bottles} />
      <BarControls onAddDrink={onAddDrink} />
    </div>
  );
};

export default Pub;
