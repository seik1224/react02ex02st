import "./App.css";

function App() {
  return (
    <div className="relative flex w-full h-[300vh]  items-start ">
      <div className="fixed flex w-full h-screen items-center justify-center gap-10">
        <div className="relative">
          <img src={`${process.env.PUBLIC_URL}/ball.png`} className="w-[200px]" alt="ball" />

          <div className="bg-[rgba(0,0,0,0.8)] border border-[#000] rounded-full box-shadow-tooltip box-border px-4 py-4 text-white text-sm  opacity-100 absolute pointer-events-none z-20 whitespace-nowrap">
            이상해씨
          </div>

          <div className="absolute left-0 top-0">
            <img src={`${process.env.PUBLIC_URL}/icon01.png`} alt="이상해씨" />
          </div>
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 m-8 px-12 py-16 rounded-md flex justify-between items-center bg-[rgba(0,0,0,0.6)] text-white">
        <p>
          <span className="text-[#00ff00]">이상해씨</span>로 선택하시겠습니까?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
