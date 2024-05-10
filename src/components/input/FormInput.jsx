import { RiUploadCloud2Line } from "react-icons/ri";

function FormInput({ name, placeholder, id, label, textarea, upload }) {
  let InputComponent = textarea ? "textarea" : "input";
  let inputClassName = textarea
    ? "w-full bg-white border rounded-[8px] px-4 py-2 outline-none h-[150px]"
    : "w-full bg-white border h-12 rounded-[8px] px-10 outline-none";

  if (upload) {
    InputComponent = "input";
    inputClassName = "hidden"; // Hide the default input for file upload
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-[1.1rem]" htmlFor={id}>
        {label}
      </label>
      {upload ? (
        <div>
          <InputComponent type="file" className="hidden" name={name} id={id} />
          <label
            htmlFor={id}
            className="w-1/4 bg-[#FECDCA] bg-opacity-50 h-[100px] rounded-[8px] px-10 flex items-center justify-center cursor-pointer text-primary text-[1.6rem]"
          >
            <RiUploadCloud2Line/>
          </label>
        </div>
      ) : (
        <InputComponent
          type={textarea ? undefined : "text"}
          className={inputClassName}
          placeholder={placeholder}
          name={name}
          id={id}
        />
      )}
    </div>
  );
}

export default FormInput;
