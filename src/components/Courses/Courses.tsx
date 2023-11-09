import Button from "../Button";

export const Courses = () => {

   type course = {
      img: string;
      heading: string;
      overlayImg: string;
   }

   const courses:course[] = [
      {
         img: "./mit.png",
         heading: "MIT",
         overlayImg: "./mit-img.png"
      },
      {
         img: "./python.png",
         heading: "Python Programming",
         overlayImg: "./python-img.png"
      },{
         img: "./roblox.png",
         heading: "Roblox Design",
         overlayImg: "./roblox-img.png"
      },{
         img: "./scratch.png",
         heading: "Scratch",
         overlayImg: "./scratch-img.png"
      },{
         img: "./uiux.png",
         heading: "UI/UX Design",
         overlayImg: "./ui-img.png"
      },{
         img: "./web.png",
         heading: "Web Development",
         overlayImg: "./web-img.png"
      }
   ]

  return (
    <div className="bg-footer-blue h-[27rem] sm:h-[65rem] lg:h-[50rem] xl:h-[54rem]  font-poppins py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
      <div className="text-center text-white mb-16">
         <h1 className="font-bold text-xl xl:text-3xl mb-3">Explore Our Courses</h1>
         <h4 className="max-sm:text-xs text-base max-w-xs sm:max-w-2xl mx-auto">Our Microdegrees are specialized programs which upon completion will set you firmly on your chosen IT career path</h4>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
         {courses.map((data, index) => (
            <div key={index} className="w-[20rem] md:w-[17rem] xl:w-[21rem] relative rounded-xl overflow-hidden mx-auto">
               <img src={data.img} alt={data.heading} className="w-full rounded-xl" />
               <div className="absolute translate-y-40 xl:translate-y-48 hover:translate-y-0 transition ease-in-out duration-680 flex flex-col justify-center items-center gap-10 bg-courses bg-opacity-70 backdrop-blur-sm inset-0 text-white rounded-3xl rounded-t-none">
                  <h1 className="font-bold text-base xl:text-xl">{data.heading}</h1>
                  <img src={data.overlayImg} alt={data.heading} className="max-xl:w-[3rem]"/>

                  <Button path="" title="Enroll Now"/>
               </div>
            </div>
         ))}
      </div>
    </div>
  )
}