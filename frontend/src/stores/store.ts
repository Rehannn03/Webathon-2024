import axios from "axios";
import { create } from "zustand";

//Curr trying out with name and role only
interface User {
  name: string;
  role: string;
  // profile: object;
}

interface UserStore {
  user: User | null;
  update: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => set({ user }),
}));

// type State = {
//   name: string;
//   role: string;
//   profile: object;
// };

// type Action = {};

// export const useUser = create<State>((set) => ({
//   name: "",
//   role: "patient",
//   profile: {
//     age: 0,
//     contact: 0,
//     address: "",
//     gender: "",
//     city: "",
//   },
//   // actions
//   setAsyncName: (name: string) => set({ name }),
//   setAsyncRole: (role: string) => set({ role }),
//   setAsyncProfile: (profile: object) => set({ profile }),

//   // setAsyncName: async () => {
//   //   const { data } = await axios.get("/users/profile");
//   //   set({ name: data.name });
//   // },
//   // setAsyncRole: async () => {
//   //   const { data } = await axios.get("/users/profile");
//   //   set({ role: data.role });
//   // },
//   // setAsyncProfile: async () => {
//   //   const { data } = await axios.get("/users/profile");
//   //   set({ profile: data.profile });
//   // }
//   // reset: () => set({ name: "", role: "", profile: {} }),
// }));
