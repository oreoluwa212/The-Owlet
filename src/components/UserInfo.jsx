import React from "react";

const UserInfo = ({ initials, icon, firstName, lastName }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
        <span className="text-gray-700">{initials}</span>
      </div>
      <div className="ml-3 inline-flex justify-center text-secondary items-center gap-4">
        <div className="flex flex-col gap-[2px]">
        <p className="text-lg font-semibold">
          {firstName} {lastName}
        </p>
        <p className="text-[14px]">Business Account</p>
        </div>
        <div className="text-gray-400 text-xl">{icon}</div>
      </div>
    </div>
  );
};

export default UserInfo;
