import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
export function CallToAction() {
  return (
    <div className="bg-[url('/CTA.png')] ">
      <div className="hidden md:flex flex-col md:flex-row md:justify-between items-center mx-12 pt-4 mb-24">
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
      <div className="text-4xl w-full mx-4 md:text-6xl md:w-[40%] md:mx-12 pb-24 ">
        We’ve got a plan that’s perfect for you
      </div>
    </div>
  );
}
