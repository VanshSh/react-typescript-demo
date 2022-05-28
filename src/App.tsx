import "./App.css";
import Button from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Counter } from "./state/Counter";
import { LoggedIn } from "./state/LoggedIn";
import { User } from "./state/User";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RandomNumber";

function App() {
  const personName = {
    firstName: "Vansh",
    lastName: "Sharma"
  };

  const nameList = [
    {
      firstName: "Vansh",
      lastName: "Sharma"
    },
    {
      firstName: "Mohit",
      lastName: "Jain"
    },
    {
      firstName: "Pranjal",
      lastName: "Singh"
    }
  ];
  return (
    <>
      <div className="App">
        <Greet name="Vansh Sharma" messageCount={10} isLoggedIn={true} />
        <Greet name="Mohit Jain" isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <hr />
        <hr />
        <Status status={"online"} />
        <hr />
        <hr />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>ABC</Heading>
        </Oscar>
        <hr />
        <hr />
        <Button
          handleClick={(event, id) => console.log("Button clicked", event, id)}
        />
        <Input
          value="vansh Sharma"
          handleChange={(event) => console.log(event)}
        />
        <hr />
        <hr />
        <Container styles={{ border: "1px solid red", padding: "1rem" }} />
        <hr />
        <hr />
        <LoggedIn />
        <User />
        <hr />
        <hr />
        <Counter />
        <hr /> <hr />
        <List
          items={["Batman", "Superman", "Wonder Woman"]}
          onClick={(item) => console.log(item)}
        />
        <List
          items={[1, 2, 3, 4, 5, 6]}
          onClick={(item) => console.log(item)}
        />
        <hr /> <hr />
        <RandomNumber value={10} isPositive />
      </div>
    </>
  );
}

export default App;
