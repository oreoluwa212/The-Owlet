function PaymentBtns({ img }) {
  return (
    <div className="bg- border px-5 w-full text-white flex justify-center gap-4 items-center h-14 rounded-[12px] font-semibold">
      {img && <img src={img} alt="Payment Button Image" />}
    </div>
  );
}

export default PaymentBtns;
