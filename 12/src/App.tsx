import { useState } from "react";
import { NumberField, Group, Input, Button } from "react-aria-components";

function App() {
  const [value, setValue] = useState(1024);
  return (
    <div className="p-4">
      <NumberField
        value={value}
        minValue={0}
        onChange={setValue}
        aria-label="お試し数値入力"
      >
        <Group>
          <Button className="border" slot="decrement">
            -
          </Button>
          <Input className="border" />
          <Button className="border" slot="increment">
            +
          </Button>
        </Group>
      </NumberField>
      state: {value}
    </div>
  );
}

export default App;
