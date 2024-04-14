import Image from "next/image";
import { trending_data } from "@/data/trending";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="bg-[#013894]">
      <section  className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Search low prices on hotels,homes and much more...</h3>
      </section>
      <section>
        <SearchForm/>
      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font bold">Trending Destinations</h3>
          <p className="font-light">Most popular choices for travellers from around the world</p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item)=>(
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img src={item.src} key={item.id} className="w-80 h-72 object-cover rounded-lg pb-2"/>
              <p className="font-bold">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}