"use client";
import { CarCard, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars({});
        setAllCars(cars || []);
        setIsDataEmpty(!Array.isArray(cars) || cars.length === 0);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setIsDataEmpty(true);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 padding-x padding-y max-w-screen-xl mx-auto"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          {/* <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>No cars available at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}
