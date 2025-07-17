import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CaseStudy() {
  return (
    <div className="bg-white pb-12">
      <div className="flex flex-col text-black items-center   h-120 mx-4 border border-gray-100 shadow pt-20 relative">
        <img
          className="absolute h-80 top-50 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="quote.png"
        />
        <p className="text-xs text-orange-600 mb-6 ">Case Study</p>
        <div className="font-bold px-2 md:text-2xl text-center md:w-[38%] italic ">
          "We added the AI Shopping Agent and watched our sales jump 29% in just
          3 weeks"
        </div>
        <div className="flex  justify-center items-center space-x-4 mt-12">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-4xl border-b-4 border-red-600 inline-block ">
              49%
            </p>
            <p className="w-[70%] text-center text-sm font-thin">
              Increase in average order value
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="mt-6" src="user.png" />
            <p className="text-center">James E. Jackson</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-4xl border-b-4 border-red-600 inline-block ">
              1.8x
            </p>
            <p className="w-[70%] text-center text-sm font-thin">
              Higher repeat purchase rate
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-2 px-4 ">
          <div className="flex  space-x-2 mt-4 ">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-black rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>
          <div className="flex space-x-2 mt-4">
            <div className="flex items-center justify-center text-orange-600 bg-white h-5 w-5 rounded-full ">
              <ArrowLeft className="h-3 w-3" />
            </div>
            <div className="flex items-center justify-center text-white bg-orange-600 h-5 w-5 rounded-full ">
              <ArrowRight className="h-3 w-3 items-center" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-600 w-auto mx-4  md:mx-12 mt-12 md:mt-22 rounded-xl md:relative">
        <img className="w-full " src="Vector.png" />
        <div className="flex md:space-x-12 space-y-4 pb-6 px-4  ">
          <p className="text-2xl md:text-4xl font-bold md:absolute md:top-12 md:left-50 md:pl-24 md:-translate-x-1/2">
            Ready to boost your sales?
          </p>
          <Button className="md:absolute md:top-12 md:right-10 md:-translate-x-1/2 rounded-2xl md:text-lg bg-transparent text-white border border-white md:px-12">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
