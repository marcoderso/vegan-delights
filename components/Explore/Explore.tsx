import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 1 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-1.svg"
              text={{
                title: "Hausgemachte Kuchenklassiker",
                description:
                  "Gönn dir den vollmundigen Geschmack unserer liebevoll gebackenen veganen Kuchen. Perfekt für eine kleine Auszeit oder den gemütlichen Nachmittag.",
              }}
            />
            {/* item 2 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Vegane Dessertkreationen",
                description:
                  "Ob cremig, fruchtig oder schokoladig – unsere Desserts begeistern mit Geschmack und Fantasie. Für alle, die das Besondere lieben.",
              }}
            />
          </div>
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 3 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-3.svg"
              text={{
                title: "Erfrischende Kühlgenüsse",
                description:
                  "Unsere kalten Dessert-Highlights sorgen für eine süße Erfrischung an warmen Tagen – natürlich 100 % pflanzlich.",
              }}
            />
            {/* item 4 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-4.svg"
              text={{
                title: "Feine Geschmackskompositionen",
                description:
                  "Von zarter Vanille bis hin zu intensivem Espresso – entdecke unsere wechselnden Geschmackssorten. Immer mit Sorgfalt ausgewählt und vegan verfeinert.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
