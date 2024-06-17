import React from "react";

function UserInfo({ initials, icon, firstName, lastName }) {
  return (
    <div className="flex gap-4 w-full items-center lgss:justify-end">
      <div className="h-12 w-12 flex items-center justify-center bg-grey/30 rounded-full text-sm font-bold text-gray-700">
        {initials}
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{`${firstName} ${lastName}`}</h2>
        <p>Business Account</p>
      </div>
      {icon}
    </div>
  );
}

export default UserInfo;
