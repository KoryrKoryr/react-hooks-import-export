import React from "react";
import MesaVerde from "./parks/MesaVerde";
import howManyParks from "./parks/howManyParks";
// import { trees, wildlife } from "./parks/RockyMountain";
// import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

console.log(parkTrees);

parkWildlife();

// console.log(RMFunctions.trees);

// RMFunctions.wildlife();

// RMFunctions.elevation();

// console.log(trees);

// wildlife();

// function ColoradoStateParks() {
//   howManyParks(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;
// }

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
