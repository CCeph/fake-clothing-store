import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-start bg-[url('./assets/homepage-banner.jpg')] bg-cover bg-center p-5">
      {/*      <div className="flex flex-col items-center rounded-xl border border-black bg-slate-200 p-3">
        <h1 className="font-anton p-1 text-6xl">
          Fake<span className="font-arvo">.</span>
        </h1>
        <h2 className="font-arvo p-1 text-4xl">It&apos;s In Our Name</h2>
        <h3 className="font-arvo p-1 text-2xl font-bold underline">
          <Link to={"/shop"}>Shop Now</Link>
        </h3>
  </div> */}
    </div>
  );
}
