export function Offers() {
  return (
    <div className="w-full relative">
      <div className="w-full h-screen flex  ">
        <img
          className="hidden md:inline w-full h-full object-cover"
          src="businessPeople.png "
        />
        <img
          className=" md:hidden w-full h-full object-cover"
          src="businessPeopleLong.png "
        />
      </div>
      <div className="absolute bottom-6 md:bottom-10">
        <div className="pl-6 md:pl-18 mb-4">
          <div className="text-xl w-[45%] md:w-[100%] md:text-5xl font-bold mb-2">
            Dynamic Cross-Selling & Upselling
          </div>
          <div className="text-thin w-[95%] md:w-[55%]">
            Zitrone AI understands you better over time, prioritizing answers
            and sharing solutions by Guide you effortlessly through complex
            product catalogs.​
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-18 px-6">
          <div className="bg-white/30 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg border border-white">
            <div className="text-lg md:text-4xl">39%</div>
            <div className="text-xs md:text-sm">
              Increase in average order value
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg border border-white">
            <div className="text-lg md:text-4xl">49%</div>
            <div className="text-xs md:text-sm">
              Reduction in cart abandonment
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg border border-white">
            <div className="text-lg md:text-4xl">2.5x</div>
            <div className="text-xs md:text-sm">
              Higher repeat purchase rate
            </div>
          </div>

          <div className="flex flex-col space-x-2 bg-white/30 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg border border-white">
            <div className="text-lg md:text-4xl">80%</div>
            <div className="text-xs md:text-sm">
              Customer queries resolved without human intervention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
