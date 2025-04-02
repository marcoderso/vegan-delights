// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// react icons
import { IoMdQuote } from "react-icons/io";

// data
const testimonials = [
  {
    message:
      "Wow! Und der war wirklich vegan? Unglaublich! Ich habe noch nie so leckeren Kuchen gegessen - dabei bin ich selbst Bäcker!",
    name: "Fabian Marc Mellin",
    profession: "Ist eigentlich kein Bäcker.",
  },
  {
    message:
      "Also ich muss wirklich sagen, dass das die beste vegane Backmanufaktur in ganz Deutschland ist. Den Rest kannste eigentlich vergessen.",
    name: "Jodie Alice Jahn",
    profession: "Undercover Verkosterin für vegane Backmanufakturen",
  },
  {
    message:
      "Hä, check ich jetzt nicht. ICH soll eine Bewertung schreiben? Aber das ist doch eigentlich mein eigenes Projekt, das macht doch gar keinen Sinn.",
    name: "Jessica Friedrich",
    profession: "Anmerkung der Redaktion: Diese Bewertung NICHT posten.",
  },
    {
    message:
      "Also jetzt ist meine Laune voll gut. Bei Gott sogar. Aber ich hab halt gerade ein Stück kuchen gegessen. Aber ich hab halt gerade ein Stück kuchen gegessen. Also voll gut. Aber die anderen, ja.. ne.. gibt halt paar Leute die bisschen verbittert sind. Die gerade kein Stück Kuchen hatten. Schade für sie.",
    name: "Unbekannt",
    profession: "Kommt eigentlich gerade vom Feiern.",
  },
];

const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {testimonials.map((person, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                <div className="max-w-[60%] text-primary">
                  <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                  <p className="text-2xl font-secondary text-center mb-8">
                    {person.message}
                  </p>
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{person.name}</p>
                    <p className="text-secondary">{person.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
