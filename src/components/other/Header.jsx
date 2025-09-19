import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl text-white">
        Hello <br /> Hussain Jawaid 👋
      </div>
      <button className="rounded-md border border-red-600 px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white">
        Log Out
      </button>
    </div>
  );
}

export default Header;
