import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";
import { Container } from "./components/container";
import { CountDown } from "./components/count-down";
import { Cycles } from "./components/cycles";
import { DefaultButton } from "./components/default-button";
import { DefaultInput } from "./components/default-input";
import { Footer } from "./components/footer";
import { Logo } from "./components/logo";
import { Menu } from "./components/menu";

export function App() {
  const [count, setCount] = useState(0);

  function handleClickButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form
          action=""
          className="text-white flex justify-center items-center flex-col gap-4"
        >
          <div className="flex justify-center items-center flex-col">
            <DefaultInput
              id="input"
              type="text"
              labelText="text"
              placeholder="Digite algo aqui..."
            />
          </div>

          <div className="flex justify-center items-center">
            <p>Lorem ipsum dolor sit amet.{count}</p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Cycles />
          </div>

          <div className="flex flex-col justify-center items-center">
            <DefaultButton
              onClick={handleClickButton}
              icon={<PlayCircleIcon className="w-8 h-8" />}
              color="green"
            />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </div>
  );
}
