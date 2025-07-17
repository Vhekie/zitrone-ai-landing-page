export function Footer() {
  return (
    <div>
      <div className="flex md:mt-14 mt-7 justify-between mx-auto pl-4 md:pl-12 pr-6 md:pr-24">
        <div className="text-xl">Zitrone AI</div>
        <div className="flex space-x-8 md:space-x-18">
          <div className="text-sm">
            <p className="mb-2 text-lg">Product</p>
            <p className="mb-3">Watch Demo</p>
            <p>AI chatbots</p>
          </div>
          <div className="text-sm">
            <p className="mb-2 text-lg">Resources</p>
            <p className="mb-3">Blogs</p>
            <p className="mb-3">Careers</p>
            <p>Case study</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-between px-2  text-xs md:text-sm md:space-x-12 md:px-4 md:w-[50%] mx-auto mb-4">
        <div>@2025 Zitrone AI, All right reserved</div>
        <div>Privacy Policy</div>
        <div>Terms and Condition</div>
      </div>
    </div>
  );
}
