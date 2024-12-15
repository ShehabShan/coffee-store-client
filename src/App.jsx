import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Componenet/CoffeeCard";
import { useState } from "react";
import Header from "./Componenet/Header";
import AddCoffee from "./Componenet/AddCoffee";
import SingUp from "./Componenet/SingUp";
import SingIn from "./Componenet/SingIn";

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <div className="m-12 ">
        <h2 className="text-black">coffee {coffees.length}</h2>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
