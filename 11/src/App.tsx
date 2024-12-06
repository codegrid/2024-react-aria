import {
  NumberField,
  Label,
  Group,
  Input,
  Button,
} from "react-aria-components";

function App() {
  return (
    <div className="p-4">
      <NumberField defaultValue={1024} minValue={0}>
        <Label>お試し数値入力</Label>
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
    </div>
  );
}

export default App;
