import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface Store {
  count: number;
  inc: () => void;
}

const useCounterStore = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool<Store>("Counter", useCounterStore);
}

export default useCounterStore;
