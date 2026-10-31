import Image from "next/image";
// seattle images
import carImage from "../assets/proposal/seattle/car.jpeg";
import drivingImage from "../assets/proposal/seattle/driving.jpeg";
import tacosImage from "../assets/proposal/seattle/tacos.jpeg";
// road trip route image
import roadTripRouteImage from "../assets/proposal/road-trip-route.svg";
// cannon beach images
import cannonBeachDrivingImage from "../assets/proposal/cannon/driving.jpeg";
import cannonBeachRoadImage from "../assets/proposal/cannon/road.jpeg";
import cannonBeachRockImage from "../assets/proposal/cannon/rock.jpeg";
import cannonBeachKellyImage from "../assets/proposal/cannon/kelly.jpeg";
import cannonBeachDanAndKellyImage from "../assets/proposal/cannon/danandkelly.jpeg";
import { ProposalHeaderLayers } from "../site-header";
// kiwanda images
import kiwandaArrivalImage from "../assets/proposal/kiwanda/arrival.jpeg";
import kiwandaBeachImage from "../assets/proposal/kiwanda/beach.jpg";
import kiwandaSidAndThomasImage from "../assets/proposal/kiwanda/sidandthomas.jpg";
import kiwandaSidAndThomasDuneNowImage from "../assets/proposal/kiwanda/sidandthomas_dune_now.jpg";
import kiwandaSidAndThomasDuneThenImage from "../assets/proposal/kiwanda/sidandthomas_dune_then.jpeg";
import kiwandaTidepoolsImage from "../assets/proposal/kiwanda/tidepools.jpeg";


export default function Proposal() {
  const imageClassName = "mt-[148px] h-auto w-auto max-w-[350px] max-h-[300px]";
  return (
    <main className="relative flex min-h-0 flex-1 flex-col overflow-y-auto">
      <ProposalHeaderLayers />
      <span className="font-['Times_New_Roman'] text-[32px] text-center text-[#38385F] max-w-[940px] self-center my-[200px]">
        This past spring, we went on a road trip down the PCH from Seattle to Big Sur with our dear friends Kelly and Daniel. The proposal is special in of itself but the stage is not set without recounting our time on the road, so, we thought we’d take the opportunity to share this with you all.
      </span>
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_minmax(0,0.67fr)_minmax(0,1fr)] items-stretch gap-2 px-2 pb-10 gap-4 px-4">
        <div className="col-start-1 justify-items-center">
          <Image
            src={carImage}
            alt="Beginning of the road trip in Seattle"
            className={imageClassName}
          />
          <Image
            src={tacosImage}
            alt="Tacos in Seattle"
            className={imageClassName}
          />
          <Image
            src={cannonBeachRoadImage}
            alt="Road at Cannon Beach"
            className={imageClassName}
          />
          <Image
            src={cannonBeachKellyImage}
            alt="Kelly at Cannon Beach"
            className={imageClassName}
          />
          <Image
            src={kiwandaArrivalImage}
            alt="Arrival at Kiwanda"
            className={imageClassName}
          />
          <Image
            src={kiwandaSidAndThomasImage}
            alt="Sid and Thomas at Kiwanda"
            className={imageClassName}
          />
          <Image
            src={kiwandaTidepoolsImage}
            alt="Tidepools at Kiwanda"
            className={imageClassName}
          />
        </div>
        <div className="col-start-2 w-full">
          <Image
            src={roadTripRouteImage}
            alt="Illustrated road trip route"
            className="pointer-events-none -mt-2 h-auto w-full object-contain"
            priority
          />
        </div>
        <div className="col-start-3 justify-items-center">
          <Image
            src={drivingImage}
            alt="Driving in Seattle"
            className={imageClassName + " mt-[128px]"}
          />
          <Image
            src={cannonBeachDrivingImage}
            alt="Driving at Cannon Beach"
            className={imageClassName}
          />
          <Image
            src={cannonBeachRockImage}
            alt="Rock at Cannon Beach"
            className={imageClassName}
          />
          <Image
            src={cannonBeachDanAndKellyImage}
            alt="Dan and Kelly at Cannon Beach"
            className={imageClassName}
          />
          <Image
            src={kiwandaBeachImage}
            alt="Beach at Kiwanda"
            className={imageClassName}
          />
          <div className="grid grid-cols-[auto_auto] gap-[60px] mt-[148px]">
            <Image
              src={kiwandaSidAndThomasDuneNowImage}
              alt="Sid and Thomas at Kiwanda Dune Now"
              className={"h-auto w-auto max-w-[350px] max-h-[300px]"}
            />
            <Image
              src={kiwandaSidAndThomasDuneThenImage}
              alt="Sid and Thomas at Kiwanda Dune Then"
              className={"h-auto w-auto max-w-[350px] max-h-[300px] mt-[40px]"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}