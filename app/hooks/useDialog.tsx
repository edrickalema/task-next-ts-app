import { create } from "zustand";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useDialog;
