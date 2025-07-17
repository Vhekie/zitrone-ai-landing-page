import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="bg-[url('/CTA.png')] ">
      <div className="flex flex-col md:flex-row md:justify-between items-center mx-12 pt-4 mb-24">
        <div className="mb-4 md:mb-0">Zitrone AI</div>
        <div className="flex justify-end items-center space-y-2 md:space-x-6 ">
          <nav className="text-xs flex space-x-4 border bg-transparent px-4 py-2 rounded-full">
            <p>Home</p>
            <p>Catalog</p>
            <p>Contact</p>
            <p>Help Center</p>
          </nav>
        </div>
      </div>
      <div className="text-4xl w-full mx-4 md:text-6xl md:w-[40%] md:mx-12 pb-24 ">
        We’ve got a plan that’s perfect for you
      </div>
    </div>
  );
}
