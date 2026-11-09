"use client";

import ExportedImage from "next-image-export-optimizer";
import SiteHeader from "./site-header";
import flowerImage from "./assets/flower.png";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:min-h-0">
        <SiteHeader />

        <main
          className={`
            mx-auto grid min-h-0 w-full max-w-[1600px] flex-1
            grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto]
            lg:grid-cols-[45%_auto_31%] lg:grid-rows-1 lg:px-8
          `}
        >
          <section
            className={`
              fade-in fade-in-title z-10 col-start-1 row-start-1 flex min-h-[52dvh]
              flex-col items-center justify-center gap-20 [@media(max-height:700px)]:gap-0
              text-center font-script text-[clamp(2rem,40px,5rem)] text-[#3B210E] font-normal
              w-full px-4
              lg:col-start-1 lg:min-h-0 lg:w-full lg:items-center lg:gap-14
              lg:text-[75px] lg:leading-20 lg:opacity-61 lg:px-0
            `}
          >
            <h1 className="font-custom max-w-full">
              Sidney and Thomas
              <br />
              are getting
              <br />
              married in
              <br />
              El Nido, Palawan
              <br />
              Philippines
            </h1>
            <h1 className="font-custom max-w-full text-[32px] lg:text-[60px]">December 3rd and 4th, 2027</h1>
          </section>

          <ExportedImage
            src={flowerImage}
            alt="Illustration of a flowering orchid"
            basePath={basePath}
            className={`
              fade-in fade-in-image z-0 col-start-1 row-start-1 mt-[18dvh] h-auto max-h-[75dvh] w-full
              self-start object-contain
              lg:col-start-2 lg:col-end-4 lg:row-end-2 lg:w-[65vw] lg:max-h-[130dvh] lg:justify-self-end
              lg:-mt-10 lg:origin-top-right lg:scale-110 lg:align-self-center
            `}
            priority
            style={{ opacity: 0 }}
          />

          <section
            aria-label="Wedding invitation information"
            className={`
              fade-in fade-in-invitation z-10 col-start-1 col-end-2 row-start-2 ml-auto mr-4 flex
              max-w-full flex-col items-center gap-5 py-[4dvh]
              text-center text-[#38385F] text-[10px] leading-6 font-serif
              lg:text-sm lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:ml-0 lg:mr-0
              lg:w-fit lg:justify-self-end lg:justify-end
              lg:leading-7
            `}
          >
            we hope you can join us for a private island getaway…
            <br />
            <br />
            formal invitation to follow
            <br />
            <br />
            <p>in the meantime, <a href="https://forms.gle/HYxDW1EeCmwfPfXe8" className="underline">please fill out this interest form</a></p>
          </section>
        </main>
      </div>

      <style jsx global>{`
        .fade-in {
          animation: fade-in 1000ms ease-out both;
        }

        .fade-in-image {
          --fade-in-opacity: 0.5;
        }

        .fade-in-title {
          animation-delay: 1.5s;
        }

        .fade-in-invitation {
          animation-delay: 2.5s;
        }

        @media (min-width: 64rem) {
          .fade-in-image {
            --fade-in-opacity: 1;
          }

          .fade-in-title {
            --fade-in-opacity: 0.61;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: var(--fade-in-opacity, 1);
          }
        }
      `}</style>
    </>
  );
}
