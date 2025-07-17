import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full ">
      <div className="flex flex-col md:space-y-45 w-full md:w-1/2 p-8">
        <div className="hidden md:inline">
          <p className="text-xl mb-12 md:mb-0">Zitrone AI</p>
        </div>
        <div className="md:hidden flex justify-between items-center bg-[linear-gradient(to_bottom,_#ffffff,_#999999)] px-4 pb-2 pt-8 mb-8">
          <div>Zitrone AI</div>
          <div className="flex space-x-4 items-center justify-end">
            <a href="https://apps.shopify.com/zitrone-ai" target="_blank">
              <Button className="bg-orange-600 text-white rounded-full text-xs ">
                Get Started
              </Button>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Catalog</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>Help Center</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full  ">
          <h3 className="text-3xl md:text-4xl md:w-[80%] mb-4">
            GenAI that Supercharges Customer Experience
          </h3>
          <p className=" md:w-[65%] mb-8 ">
            The future of shopping is conversational. Guide your shoppers to
            discover, research, and buy with confidence.
          </p>
          <div className="items-center md:items-start flex flex-col space-y-4 md:flex-row md:space-x-2  ">
            <a href="https://apps.shopify.com/zitrone-ai" target="_blank">
              <Button className="bg-orange-600 text-white text-xs rounded-full px-12 py-6">
                Get Started
              </Button>
            </a>

            <Button className=" hidden md:inline text-white text-xs bg-transparent border border-white rounded-full px-12 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[url('/BackgroundS1.png')] bg-cover  w-full md:w-1/2 pt-6 pb-12 px-12">
        <div className="hidden md:flex flex-col md:flex-row justify-end items-center space-y-2 md:space-x-6 ">
          <nav className="text-xs flex space-x-4 border bg-transparent px-4 py-2 rounded-full">
            <p>Home</p>
            <p>Catalog</p>
            <p>Contact</p>
            <p>Help Center</p>
          </nav>
          <a href="https://apps.shopify.com/zitrone-ai" target="_blank">
            <Button className="bg-orange-600 text-white rounded-full text-xs ">
              Get Started
            </Button>
          </a>
        </div>

        <div className="mt-12 pb-8">
          <img src="/Info-card.png" />
        </div>
      </div>
    </div>
  );
}
