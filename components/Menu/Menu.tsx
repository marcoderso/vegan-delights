import Separator from "../Separator";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc: "/assets/menu/lemon-tart.png",
    name: "Zitronen-Tarte",
    description: "Fruchtig-frisch mit knusprigem Dinkelmürbeteig",
    price: 3.9,
  },
  {
    imgSrc: "/assets/menu/coconut-cupcake.png",
    name: "Kokos-Cupcake",
    description: "Saftiger Teig mit cremigem Kokosfrosting",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/apple-crumble.png",
    name: "Apfel-Crumble im Glas",
    description: "Warmer Apfelgenuss mit Zimt, Mandeln & Streuseln",
    price: 4.8,
  },
  {
    imgSrc: "/assets/menu/raspberry-blossom.png",
    name: "Himbeer-Rosen-Schnitte",
    description: "Zart und fruchtig mit Blütenaroma",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/cheesecake.png",
    name: "Beeren-Cheesecake",
    description: "Cremig auf Cashewbasis, verfeinert mit Beeren",
    price: 5.0,
  },
  {
    imgSrc: "/assets/menu/chia-choco.png",
    name: "Chia-Schoko-Cupcake",
    description: "Mit Zartbitterschokolade und Chiasamen",
    price: 4.3,
  },
  {
    imgSrc: "/assets/menu/matcha-donut.png",
    name: "Matcha-Donut",
    description: "Ofengebacken, glasiert & überraschend leicht",
    price: 3.7,
  },
  {
    imgSrc: "/assets/menu/tiramisu.png",
    name: "Kof-Tiramisu",
    description: "Mit Espresso getränktem Biskuit & Mandelcreme",
    price: 5.4,
  },
  {
    imgSrc: "/assets/menu/chocolate-mousse.png",
    name: "Schoko-Mousse",
    description: "Luftig-locker mit Avocado und Dattel-Süße",
    price: 4.6,
  },
  {
    imgSrc: "/assets/menu/peanut-brownie.png",
    name: "Peanut Brownie",
    description: "Intensiv schokoladig mit Erdnusskernen & Meersalz",
    price: 4.9,
  },

] as const;

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Unser Menü</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Entdecke unsere Auswahl an handgemachten, pflanzlichen Köstlichkeiten – 100 % vegan, 100 % mit Liebe gebacken.
          </p>
        </div>
        {/* menu & btn */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* menu */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
