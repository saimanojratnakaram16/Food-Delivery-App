import { createContext } from "react";

const UserDataContext = createContext({
  userData: {
    name: "Sai",
    email: "sai@gmail.com",
    address: "123 Main St",
    phone: "9912991299",
  },
});

export default UserDataContext;
