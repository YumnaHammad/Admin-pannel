import { useUserProfile } from "./UserProfileContext"; // Ensure correct import

export default function UserProfileModal() {
  const { profileOpen, setProfileOpen } = useUserProfile(); // Get context values

  return (
    <>
      {profileOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2>User Profile Settings</h2>
            <button onClick={() => setProfileOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
