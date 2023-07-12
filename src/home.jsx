import shuffle from "./assets/shuffle.svg";
export default function Home({ handleClick, quotename }) {
  return (
    <div className=" w-[auto] h-[auto] relative bg-gray-50 flex justify-center mx-auto container flex">
      <div className="mx-auto top-[227px] absolute left-[218.11px] items-center">
        <div className="Frame1 w-[906.23px] h-[250px] px-[30px] py-[50px] left-0 top-0 absolute bg-gray-200 rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex">
          <div className="w-[846.23px] text-center text-gray-900 text-4xl font-normal">
            {quotename}
          </div>
          <div class="FranklinDRoosevelt text-center text-gray-900 text-xl font-normal">
            Franklin D. Roosevelt
          </div>
        </div>
        <div className="Frame2 w-[70px] h-[70px] p-5 left-[418.11px] top-[300px] absolute bg-emerald-400 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
          <div className="Shuffle w-[30px] h-[30px] relative">
            <img
              className="w-5 h-[28.11px] left-[5px] top-[1px] absolute rounded-xl"
              src={shuffle}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
