import { useState, createContext, useContext } from "react";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

type ModalContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openEdit: boolean;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create a context object.
const ModalContext = createContext<ModalContext | null>(null);

// Create a provider
export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ open, setOpen, openEdit, setOpenEdit }}>
      {children}
    </ModalContext.Provider>
  );
}

// Create a custom hook to consume the context
export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    );
  }

  return context;
}
