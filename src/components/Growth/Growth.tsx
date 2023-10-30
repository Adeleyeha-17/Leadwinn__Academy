import Button from "../Button"

export const Growth = () => {
  return (
   <div className="flex flex-col md:flex-row justify-between lg:space-x-20 py-10 sm:px-20 md:py-20 px-5 lg:px-0 xl:px-28 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-6 text-head-black max-w-[420px]">
         <h1 className=" font-bold text-4xl">See our growth, progress, and <span className="text-hero-blue">evolution</span></h1>
         <h4 className="text-base">Founded in 2020, Leadwinn has trained 100+ students in 10+ countries, demonstrating a global commitment to top-notch coding education. Our mission is to shape the future of education in an evolving digital landscape.</h4>

         <Button path="" title="LEARN MORE"/>
      </div>

      <div>
         <img src="./growth.svg" alt="growth image" />
      </div>
    </div>
    </div>
  )
}
