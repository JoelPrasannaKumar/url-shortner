import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local"
const poppins = localFont({
  src:"./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});
export default function Home() {
  return (
  <>
  <div className="grid grid-cols-2 bg-red-100">
    <div className="py-10 my-30">
      <p className={`text-3xl font-bold ${poppins.className} text-center`}>
                The best URL shortener in the Market
              </p>
              <p className="px-30 text-center">
                We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
              </p>
              <div className='flex gap-3 justify-center'>
              <Link href="/shorten"><button className='bg-red-500 my-3  rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
              <Link href="/github"><button className='bg-red-500 my-3  rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
            </div>
    </div>
    <div><Image src="vector.jpg" alt="" className="mix-blend-darken"/></div>
  </div>
  </>
  );
}
