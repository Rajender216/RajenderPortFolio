const Button = ({ name }) => {
  return (
    <button className="px-[30px] py-[10px] border-0 rounded-full bg-green-500 text-black font-bold transition-all duration-500 hover:bg-purple-500 hover:shadow-[0_0_20px_#6fc5ff50] hover:scale-110 active:bg-purple-500 active:shadow-none active:scale-95 active:duration-200">
      {name}
    </button>
  );
};

export default Button;
