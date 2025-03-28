import { createContext, useContext, useState } from "react";

const UserProfileContext = createContext(null);

export function UserProfileProvider({ children }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <UserProfileContext.Provider value={{ profileOpen, setProfileOpen }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
}
