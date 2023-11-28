import { FcGoogle } from 'react-icons/fc';

export const OAuth = () => {
  return (
    <div>
<button
      type="button"
      className="flex items-center sm:w-[23rem] lg:w-[20rem] xl:w-[28rem] text-head-black px-2 xl:px-4 py-2 xl:py-3 text-base xl:text-xl font-bold hover:shadow-lg active:shadow-sm transition duration-150 ease-in-out rounded-2xl border border-head-black"
    >
      <FcGoogle className="sm:text-3xl xl:text-4xl bg-white rounded-full sm:mr-20" />
      Continue with Google
    </button>
    </div>
  )
}
