import Image from 'next/image'
import next from "../public/next.svg"
export default function Home() {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <Image className="w-full h-auto rounded-t-xl" src={next}  width={36} height={36} alt="Image Description"/>
    <div className="p-4 md:p-5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        My Card
      </h3>
      <p className="mt-1 text-gray-800 dark:text-gray-400">
        Hover to switch images
      </p>
      <a className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
        Go somewhere
      </a>
    </div>
  </div> 
  )
}
