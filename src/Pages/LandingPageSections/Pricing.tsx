import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
export function Pricing() {
  return (
    <div className="bg-white ">
      <div className="flex w-full max-w-md pt-12 px-12 mb-4 space-x-0">
        <Button className=" flex-[0.4] px-4 py-2 -mr-8 rounded-full  text-white bg-orange-600 z-20">
          Monthly Billing
        </Button>
        <button className=" flex-[0.6] px-2 py-1.5 border border-gray-200 text-black rounded-r-full z-10">
          Annual Billing
        </button>
      </div>

      <div className=" flex flex-col space-y-6  w-full md:flex-row md:space-x-6 md:space-y-0  px-12 pb-24  text-black">
        {/* a */}
        <div className="border border-gray-300 rounded-lg  pt-12 w-full md:w-1/3">
          {/*  */}
          <div className="w-full px-6 ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Basic</h2>
              <p className="font-bold text-3xl">$110</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">or $1,056/year and save 20%</p>
            </div>

            <Button className="text-white bg-black rounded-full mb-12 w-full my-8 ">
              Get Started
            </Button>
          </div>

          {/*  */}
          <div className="w-full px-6">
            <ul className="font-light text-sm space-y-2">
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span>Up to 500 monthly conversations</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span> Generate product FAQs</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span> Up to 20 knowledge base documents</span>
              </li>
              <li className="flex space-x-2 mb-2 ">
                <CircleCheckBig />
                <span> Multi-language support for your customers</span>
              </li>
            </ul>
          </div>
          <div className="h-8 w-full bg-gray-200  text-center">
            14-day free trial
          </div>
        </div>
        {/* b */}
        <div className="border border-gray-300 rounded-lg  pt-12 w-full md:w-1/3">
          {/*  */}
          <div className="w-full px-6 ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Pro</h2>
              <p className="font-bold text-3xl">$299</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">or $2,868/year and save 20%</p>
            </div>

            <Button className="text-white bg-black rounded-full mb-12 w-full my-8 ">
              Get Started
            </Button>
          </div>

          {/*  */}
          <div className="w-full px-6">
            <ul className="font-light text-sm space-y-2">
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span>Up to 1,500 monthly conversations</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span> Generate product FAQs</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span>Unlimited knowledge base documents</span>
              </li>
              <li className="flex space-x-2 mb-2 ">
                <CircleCheckBig />
                <span> Multi-language support for your customers</span>
              </li>
            </ul>
          </div>
          <div className="h-8 w-full bg-gray-200  text-center">
            14-day free trial
          </div>
        </div>
        {/* c */}
        <div className="border border-gray-300 rounded-lg  pt-12 w-full md:w-1/3">
          {/*  */}
          <div className="w-full px-6 ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Scale</h2>
              <p className="font-bold text-3xl">$599</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">or $5,748/year and save 20%</p>
            </div>

            <Button className="text-white bg-black rounded-full mb-12 w-full my-8 ">
              Get Started
            </Button>
          </div>

          {/*  */}
          <div className="w-full px-6">
            <ul className="font-light text-sm space-y-2">
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span>Up to 5,000 monthly conversations</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span> Generate product FAQs</span>
              </li>
              <li className="flex space-x-2 ">
                <CircleCheckBig />
                <span> Unlimited knowledge base documents</span>
              </li>
              <li className="flex space-x-2 mb-2 ">
                <CircleCheckBig />
                <span> Multi-language support for your customers</span>
              </li>
            </ul>
          </div>
          <div className="h-8 w-full bg-gray-200  text-center">
            12-day free trial
          </div>
        </div>
      </div>
    </div>
  );
}
