import { TiPlus } from "react-icons/ti";

function CreateOrderBtn() {
  return (
    <div className="bg-primary px-5 w-full text-white flex justify-center gap-4 items-center py-4 rounded-[4px] font-semibold">
      <TiPlus />
      <p>Create order</p>
    </div>
  );
}

export default CreateOrderBtn;
