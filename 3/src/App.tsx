import { useState } from 'react';
import { Modal, Dialog } from 'react-aria-components';
import './modal.css';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>開く</button>
      <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog aria-label="操作ダイアログ">
          <p>モーダルの内容</p>
          <button onClick={() => setOpen(false)}>閉じる</button>
        </Dialog>
      </Modal>

      <input placeholder="フォーカス検証用" />
    </>
  );
}

export default App;
