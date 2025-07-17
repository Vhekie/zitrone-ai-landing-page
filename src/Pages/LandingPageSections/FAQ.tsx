import { ChevronUp, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export function FAQ() {
  return (
    <div className="bg-white text-black w-full flex flex-col space-y-6 px-8 py-12 md:px-0 md:space-y-0 md:flex-row md:justify-between md:pl-6 md:pr-24 pb-12">
      <div>
        <div className="font-bold text-2xl w-[60%] mb-4">
          Frequently asked questions
        </div>
        <div className="font-thin">
          Get quick answers to common questions about us
        </div>
      </div>
      <div className="flex flex-col space-y-2 ">
        <div className="flex justify-between space-x-4 w-full max-w-md py-4 bg-blue-50 px-2">
          <div className="flex flex-col space-y-2">
            <div>What kind of questions can Zitrone answer?</div>
            <div className="w-[80%] font-thin text-sm">
              Zitrone can answer anything your store data supports—product
              specs, sizes, shipping timelines, compatibility, care
              instructions, and more.
            </div>
          </div>
          <ChevronUp />
        </div>
        <Separator className="bg-gray-300 mb-6" />
        <div className="flex justify-between space-x-4 w-full py-4 ">
          <div>How does Zitrone generate FAQs?</div>
          <ChevronDown />
        </div>
        <Separator className="bg-gray-300 mb-6" />
        <div className="flex justify-between space-x-4 w-full py-4 ">
          <div>Do I need a developer to set it up?</div>
          <ChevronDown />
        </div>
        <Separator className="bg-gray-300 mb-6" />
        <div className="flex justify-between space-x-4 w-full py-4 ">
          <div>Does Zitrone work with my store platform?</div>
          <ChevronDown />
        </div>
        <Separator className="bg-gray-300 mb-6" />
        <div className="flex justify-between space-x-4 w-full py-4 ">
          <div>Is there a chat window or bot popup?</div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
