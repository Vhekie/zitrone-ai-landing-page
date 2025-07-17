import { Button } from "@/components/ui/button";

export function Benefits() {
  return (
    <div className="bg-white pt-18 w-full">
      <div className=" mb-8">
        <div className="text-black text-center w-full p-4 ">
          <p className=" text-xl md:text-4xl mb-2 ">
            How Your AI Agent Sells for You
          </p>
          <p className="font-light leading-tight w-full md:w-[55%] m-auto   ">
            Put sales on autopilot with a smart assistant that learns your
            store, guides your customers, and closes the deal 24/7.
          </p>
        </div>
      </div>
      <div className=" flex flex-col space-y-6  w-full md:flex-row md:space-x-6 md:space-y-0  px-12 pb-24 text-black">
        {/* a */}
        <div className="border border-gray-300 rounded-lg px-6 pt-4 w-full md:w-1/3 p-2 shadow">
          <div className="w-full ">
            <Button className="bg-stone-100 font-thin  py-2 rounded-full mb-6">
              Customer
            </Button>
            <div className="w-full ">
              <div className="text-3xl">Understands Customers Instantly</div>
              <div className="font-thin  text-lg my-4 ">
                Learns buying behavior, recommends products, and answers
                questions in real-time.
              </div>
            </div>
          </div>
        </div>
        {/* b */}
        <div className="border border-gray-300 rounded-lg px-6 pt-4 w-full md:w-1/3 p-2 shadow">
          <div className="w-full ">
            <Button className="bg-stone-100 font-thin  py-2 rounded-full mb-6">
              Time-saving
            </Button>
            <div className="w-full ">
              <div className="text-3xl">Speeds Up Decision Making</div>
              <div className="font-thin  text-lg my-4 ">
                Eliminates guesswork and delays—turns hesitation into action
                with personalized guidance.
              </div>
            </div>
          </div>
        </div>
        {/* c*/}
        <div className="border border-gray-300 rounded-lg px-6 pt-4 w-full md:w-1/3 p-2 shadow">
          <div className="w-full ">
            <Button className="bg-stone-100 font-thin  py-2 rounded-full mb-6">
              Support
            </Button>
            <div className="w-full ">
              <div className="text-3xl">Handles Sales, Support & FAQs</div>
              <div className="font-thin  text-lg my-4 ">
                From product info to cart recovery, your agent does it
                all—automatically.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
