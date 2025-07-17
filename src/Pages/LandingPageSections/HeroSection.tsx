import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full ">
      <div className="flex flex-col md:space-y-45 w-full md:w-1/2 p-8">
        <div>
          <p className="text-xl mb-12 md:mb-0">Zitrone AI</p>
        </div>
        <div className="flex flex-col justify-center w-full  ">
          <h3 className="text-xl md:text-4xl md:w-[80%] mb-4">
            GenAI that Supercharges Customer Experience
          </h3>
          <p className=" md:w-[65%] mb-8 ">
            The future of shopping is conversational. Guide your shoppers to
            discover, research, and buy with confidence.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-2  ">
            <Button className="bg-amber-600 text-white text-xs rounded-full px-12 py-6">
              Get Started
            </Button>
            <Button className=" text-white text-xs bg-transparent border border-white rounded-full px-12 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[url('/BackgroundS1.png')] bg-cover  w-full md:w-1/2 pt-6 pb-12 px-12">
        <div className="flex flex-col md:flex-row justify-end items-center space-y-2 md:space-x-6 ">
          <nav className="text-xs flex space-x-4 border bg-transparent px-4 py-2 rounded-full">
            <p>Home</p>
            <p>Catalog</p>
            <p>Contact</p>
            <p>Help Center</p>
          </nav>
          <Button className="bg-amber-600 text-white rounded-full text-xs ">
            Get Started
          </Button>
        </div>

        <div className="mt-12 pb-8">
          <img src="/Info-card.png" />
        </div>
      </div>
    </div>
  );
}
