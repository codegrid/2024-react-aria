import { Button } from "react-aria-components";

function App() {
  return (
    <div className="p-4">
      <p className="my-4 w-80">
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
      </p>

      <Button
        className="rounded-full border px-4 py-2 data-[hovered]:bg-purple-400"
        onPress={() => alert("clicked")}
      >
        ボタン (マウスホバーで紫色)
      </Button>

      <p className="my-4 w-80">
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
      </p>

      <Button
        className="rounded-full border px-4 py-2 data-[pressed]:bg-orange-400"
        onPress={() => alert("clicked")}
      >
        ボタン (プレス状態でオレンジ色)
      </Button>

      <p className="my-4 w-80">
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
      </p>
    </div>
  );
}

export default App;
