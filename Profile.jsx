import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  
    
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="text-center text-slate-500 text-sm">
        Please Login to view profile details.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-2">User Profile</h2>
      <p className="text-sm text-slate-600">
        Logged in as: <span className="font-bold text-orange-600">@{user.username}</span>
      </p>
    </div>
  );
}