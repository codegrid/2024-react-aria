import { useState, forwardRef, type ComponentProps } from "react";
import { Modal, ModalOverlay, Dialog } from "react-aria-components";
import { AnimatePresence, motion } from "framer-motion";

// react-aria のコンポーネントは純粋な forwardRef ではないので、forwardRef に変換する
const ForwardedModalOverlay = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ModalOverlay>
>((props, ref) => <ModalOverlay {...props} ref={ref} />);

const ForwardedModal = forwardRef<HTMLDivElement, ComponentProps<typeof Modal>>(
  (props, ref) => <Modal {...props} ref={ref} />,
);

// motion でラップする
const MotionModalOverlay = motion(ForwardedModalOverlay);
const MotionModal = motion(ForwardedModal);

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button className="border" onClick={() => setOpen(true)}>
        開く
      </button>
      <AnimatePresence>
        {isOpen && (
          <MotionModalOverlay
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            isOpen
            isDismissable
            onOpenChange={setOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <MotionModal
              className="max-w-80 rounded-md border bg-white"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <Dialog className="overflow-auto p-8">
                <p>モーダルの内容</p>
                <button className="border" onClick={() => setOpen(false)}>
                  閉じる
                </button>
              </Dialog>
            </MotionModal>
          </MotionModalOverlay>
        )}
      </AnimatePresence>

      <input placeholder="フォーカス検証用" className="border" />
    </>
  );
}

export default App;
