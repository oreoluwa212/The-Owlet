function UserInfo({ avatar, icon }) {
  return (
    <div className="flex gap-4 w-full items-center lgss:justify-end">
      <img className="h-12 w-12" src={avatar} alt="user dp" />
      <div className="flex flex-col">
         <h2 className="font-bold">Michael Pearson</h2>
         <p>Business Account</p>
      </div>
      {icon}
    </div>
  );
}

export default UserInfo