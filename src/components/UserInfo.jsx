function UserInfo({ avatar }) {
  return (
    <div className="flex gap-2">
      <img className="h-12 w-12" src={avatar} alt="user dp" />
      <div className="flex flex-col">
         <h2 className="font-bold">Michael Pearson</h2>
         <p>Business Account</p>
      </div>
    </div>
  );
}

export default UserInfo