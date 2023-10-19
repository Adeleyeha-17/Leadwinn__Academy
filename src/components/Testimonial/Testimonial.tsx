import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Testimonial = () => {

   const testimonials = [
      {
        name: 'Mrs Enaworu',
        message: 'I like the idea that my son is interested in the course and looks forward to the weekly sessions. The Tutor is also very patient with the kids and ensure that the kids are not distracted but stayed focused on the session',
      },
      {
         name: 'Mrs Agbetosin',
         message: 'My child has learnt a lot of things in a very short period. The patient and dedication of the organization and tutor are amazing',
       }, {
         name: 'Mrs Suzanne O.',
         message: 'My daughter enjoyed each session and was always looking forward to the next class',
       },
       {
         name: 'Mrs Adelopo E.',
         message: 'The classes are highly engaging. Teacher is very patient and loves to carry the students along. My son is always looking forward to the next class. It is great to see him channel his skills in a productive way',
       },{
         name: 'Mrs Obaro',
         message: 'It taught my son how to be independent and create game by himself which made him really happy',
       },{
         name: 'Mrs Abimbola 0.',
         message: 'Great Academy where kids can learn to make games independently',
       },
    ];

    const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "linear"


};

  return (
    <div className="bg-gradient-to-tl from-test-gra-2 to-test-gra h-64 lg:h-81 xl:h-80 font-poppins flex flex-col items-center justify-center p-36 overflow-hidden relative">
      <h1 className="text-sm lg:text-2xl xl:text-4xl font-bold text-white mb-10 absolute top-0 left-0 sm:top-16 sm:left-36 ">What are the parents saying?</h1>
      
      <div className="grid grid-cols-2 items-center mt-10">
         <div>
         <img src="./sliderImg.svg" alt="slider Image" className="w-3/4 xl:w-4/5"/>

         </div>

      <div className='bg-white text-white font-poppins bg-opacity-10 rounded-lg h-40 lg:h-72 xl:h-96 w-full flex items-center justify-center lg:-ml-48 lg:pt-20'>
      <Slider {...sliderSettings} className='w-full lg:w-4/5'>
      {testimonials.map((testimonial, index) => (
        <div key={index} className='lg:py-6'>
          <p className="xl:text-2xl mb-12 flex items-center justify-center">{`"${testimonial.message}"`}</p>
          <h3 className="xl:text-2xl xl:pt-20 flex items-center justify-center">{testimonial.name}</h3>
        </div>
      ))}
    </Slider>
      </div>
      </div>


    </div>
  )
}
