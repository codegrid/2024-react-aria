function App() {
  return (
    <div className="p-4">
      <p className="my-4 w-80">
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
      </p>

      <button
        type="button"
        className="rounded-full border px-4 py-2 hover:bg-purple-400"
        onClick={() => alert("clicked")}
      >
        ボタン (:hoverで紫色)
      </button>

      <p className="my-4 w-80">
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
        その他のテキスト その他のテキスト その他のテキスト その他のテキスト
      </p>

      <button
        type="button"
        className="rounded-full border px-4 py-2 active:bg-orange-400"
        onClick={() => alert("clicked")}
      >
        ボタン (:activeでオレンジ色)
      </button>

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
