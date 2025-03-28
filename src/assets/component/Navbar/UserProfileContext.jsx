import React, { createContext, useContext, useState, useMemo } from "react";

const UserProfileContext = createContext(null);

export function UserProfileProvider({ children }) {
  const [profileOpen, setProfileOpen] = useState(false);

  // ✅ Memoize value to prevent unnecessary renders
  const value = useMemo(() => ({ profileOpen, setProfileOpen }), [profileOpen]);

  return (
    <UserProfileContext.Provider value={value}>
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
