export function Product() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-12">
        <h3 className="text-2xl md:text-4xl ">
          Have questions? Ask Zitrone AI!
        </h3>
        <p className="font-thin text-sm text-center ">
          Experience it for yourself by asking any questions you have about the
          alby platform
        </p>
      </div>

      <div className="pt-4 px-6 sm:px-12 md:px-36 mb-24 w-full flex justify-center">
        <img src="product.png" className="w-full h-auto" />
      </div>
    </div>
  );
}
