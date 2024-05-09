function CreateOrderBtn({title, icon: Icon}) {
  return (
    <div className="bg-primary px-5 w-full text-white flex justify-center gap-4 items-center py-2 rounded-[4px] font-semibold text-[14px]">
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default CreateOrderBtn;
