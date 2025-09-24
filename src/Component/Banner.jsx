import bgImg from '../assets/bg-shadow.png';
import mainImg from "../assets/banner-main.png"

export default function Banner() {
  return (
    <div
      className="my-10 bg-black h-[400px] w-full bg-cover bg-center rounded-lg flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='text-center space-y-2 text-white'>
        <img  className='mx-auto' src={mainImg} alt="" />
        <h1 className='text-2xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-[#eee]'>Beyond Boundaries Beyond Limits</p>
        <button class="btn bg-[#E7FE29]">Claim Free Credit</button>
      </div>
    </div>
  );
}