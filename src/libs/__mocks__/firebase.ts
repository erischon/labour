import { vi } from "vitest";

vi.mock("firebase/firestore", async () => {
  const firestore = await vi.importActual<object>("firebase/firestore");

  return {
    ...firestore,
    getFirestore: getFirestoreMock,
    doc: getDocMock,
    deleteDoc: getDeleteDocMock,
  };
});

const getDocMock = vi.fn(() => {});
const getDeleteDocMock = vi.fn();

const getFirestoreMock = vi.fn();

export const db = getFirestoreMock();
