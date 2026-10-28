import Image from "next/image";

const basePath =
  process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

export default function Home() {
  return (
    <div
      className="flex h-dvh flex-col overflow-hidden bg-cover bg-center text-[#171713] lg:min-h-0"
      style={{ backgroundImage: `url("${basePath}/background.png")` }}
    >
      <header className="flex shrink-0 flex-row items-start justify-between gap-3 px-5 pt-4 sm:gap-4 sm:px-8 sm:pt-6">
        <nav aria-label="Wedding links" className="flex gap-2 pt-1">
          <a
            href={`${basePath}/`}
            aria-current="page"
            className="whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] underline sm:text-sm"
          >
            save the date
          </a>
          <a
            href="#"
            className="whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] sm:text-sm"
          >
            the proposal
          </a>
        </nav>
        <Image
          src={`${basePath}/stamp.jpg`}
          alt="Philippine orchid postage stamp, 20 pesos"
          width={1000}
          height={1200}
          className="h-auto w-[50px] rotate-6"
          priority
        />
      </header>

      <main className="mx-auto grid min-h-0 w-full max-w-[1600px] flex-1 grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto] sm:px-10 lg:grid-cols-[45%_auto_31%] lg:grid-rows-1 lg:px-16">
        <section className="z-10 col-start-1 row-start-1 flex min-h-[52dvh] flex-col items-center justify-center gap-16 pt-[5dvh] text-center font-script text-[clamp(2rem,8vw,5rem)] font-normal leading-[1.05] text-[#3B210E] lg:col-start-1 lg:min-h-0 lg:w-full lg:items-center lg:gap-8 lg:pb-[13dvh] lg:pt-[3dvh] lg:text-[75px]">
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
            <br />
            <br />
          </h1>
          <h1 className="font-custom max-w-full lg:text-[60px]">
            December 3rd and 4th, 2027
          </h1>
        </section>

        <Image
          src={`${basePath}/flower.png`}
          alt="Illustration of a flowering orchid"
          width={1531}
          height={1798}
          className="z-0 col-start-1 row-start-1 mt-[18dvh] h-auto w-full rotate-3 self-start object-contain lg:col-start-1 lg:col-end-4 lg:row-end-2 lg:mt-0 lg:w-[65vw] lg:max-w-[900px] lg:justify-self-end lg:object-bottom"
          priority
        />

        <section
          aria-label="Wedding invitation information"
          className="z-10 col-start-1 col-end-2 row-start-2 ml-auto mr-4 flex w-[45%] max-w-full flex-col items-center gap-5 pt-[8dvh] text-center text-[#38385F] font-serif text-xs leading-relaxed lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:ml-0 lg:mr-0 lg:w-full lg:justify-self-end lg:justify-end lg:self-end lg:pb-[2dvh] lg:pt-0 lg:text-right lg:text-base"
        >
          <p className="max-w-[24rem]">
            we hope you can join us for a private island getaway…
          </p>
          <p className="max-w-[24rem]">formal invitation to follow</p>
          <p className="max-w-[24rem]">
            in the meantime, please fill out this interest form
          </p>
        </section>
      </main>
    </div>
  );
}
