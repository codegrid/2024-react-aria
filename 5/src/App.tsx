import { useState } from "react";
import { Modal, ModalOverlay, Dialog } from "react-aria-components";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button className="border" onClick={() => setOpen(true)}>
        開く
      </button>
      <ModalOverlay
        className="data-[entering]:animate-in data-[entering]:fade-in data-[exiting]:animate-out data-[exiting]:fade-out fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        isOpen={isOpen}
        isDismissable
        onOpenChange={setOpen}
      >
        <Modal className="data-[entering]:animate-in data-[entering]:zoom-in data-[exiting]:animate-out data-[exiting]:zoom-out max-w-80 rounded-md border bg-white">
          <Dialog className="overflow-auto p-8">
            <p>モーダルの内容</p>
            <button className="border" onClick={() => setOpen(false)}>
              閉じる
            </button>
          </Dialog>
        </Modal>
      </ModalOverlay>

      <input placeholder="フォーカス検証用" className="border" />
    </>
  );
}

export default App;
