import { useState } from "react";
import { Button } from "react-aria-components";

function App() {
  const [isPending, setPending] = useState(false);

  const callApi = () => {
    console.log("APIを呼び出しました");
    setPending(true);
    setTimeout(() => setPending(false), 3000);
  };

  return (
    <div className="p-4">
      <p>
        このページは、ボタンをクリックすると3秒間待機してから「保存中」の表示が消えるサンプルです。
        <br />
        読込中はonPressは無効になります。
      </p>
      <Button
        className="rounded-full border px-4 py-2 data-[hovered]:bg-purple-400"
        isPending={isPending}
        onPress={callApi}
      >
        {({ isPending }) => (
          <>{!isPending ? <span>保存する</span> : <span>保存中</span>}</>
        )}
      </Button>
    </div>
  );
}

export default App;
