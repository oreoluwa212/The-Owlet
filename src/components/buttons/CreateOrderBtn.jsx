function CreateOrderBtn({title, icon: Icon}) {
  return (
    <div className="bg-primary px-5 w-full text-white flex justify-center gap-4 items-center py-2 rounded-[4px] font-semibold text-[18px]">
      {Icon && <Icon />}
      <p className="text-[16px]">{title}</p>
    </div>
  );
}

export default CreateOrderBtn;
