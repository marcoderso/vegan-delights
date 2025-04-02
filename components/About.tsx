"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Badge from "./Badge";
import Separator from "./Separator";
import Image from "next/image";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Unsere Reise",
    description:
      "Vegan Delights begann als kleine Idee: vegane Kuchen und Desserts, die nicht nur gut für dich sind – sondern auch unglaublich gut schmecken. Heute sind wir eine feste Größe für alle, die Genuss und Nachhaltigkeit verbinden möchten. Mit Leidenschaft und viel Liebe zum Detail zaubern wir süße Momente, die in Erinnerung bleiben. Begleite uns auf unserer Reise – Stück für Stück, Genuss für Genuss.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Unser Versprechen",
    description:
      "Bei Vegan Delights stehen Genuss und Verantwortung im Einklang. Wir verwenden ausschließlich ausgewählte, pflanzliche Zutaten aus nachhaltiger Herkunft – im Einklang mit Mensch, Tier und Umwelt. Mit viel Liebe zum Detail entstehen bei uns feinste Kuchen und Desserts, die nicht nur schmecken, sondern auch ein gutes Gefühl hinterlassen. Unser Anspruch: höchste Qualität, gelebte Nachhaltigkeit und ein starkes Miteinander.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Unser Team",
    description:
      "Hinter jedem Stück Kuchen und jedem Dessert steht bei Vegan Delights ein kleines, aber leidenschaftliches Team. Wir sind zu dritt – und teilen eine große Liebe für vegane Backkunst, hochwertige Zutaten und kreative Rezeptideen. Gemeinsam setzen wir alles daran, dir mit jedem Stück ein genussvolles Erlebnis zu bieten – ehrlich, pflanzlich und mit viel Liebe gemacht.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  {/* text */}
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      {/* title */}
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      {/* separator */}
                      <div className="mb-8">
                        <Separator />
                      </div>
                      {/* description */}
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      {/* btn */}
                      <button className="btn">See more</button>
                    </div>
                  </div>
                  {/* image */}
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
