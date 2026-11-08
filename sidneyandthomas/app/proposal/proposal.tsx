import ExportedImage from "next-image-export-optimizer";
// seattle images
import carImage from "../assets/proposal/seattle/car.jpeg";
import drivingImage from "../assets/proposal/seattle/driving.jpeg";
import tacosImage from "../assets/proposal/seattle/tacos.jpeg";
// road trip route image
import roadTripRouteImage from "../assets/proposal/road-trip-route.svg";
import roadTripRouteMobileImage from "../assets/proposal/road-trip-route-mobile.svg";
import seattleMarkerImage from "../assets/proposal/seattle-marker.svg";
import kiwandaMarkerImage from "../assets/proposal/kiwanda-marker.svg";
// cannon beach images
import cannonBeachDrivingImage from "../assets/proposal/cannon/driving.jpeg";
import cannonBeachRoadImage from "../assets/proposal/cannon/road.jpeg";
import cannonBeachRockImage from "../assets/proposal/cannon/rock.jpeg";
import cannonBeachKellyImage from "../assets/proposal/cannon/kelly.jpeg";
import cannonBeachDanAndKellyImage from "../assets/proposal/cannon/danandkelly.jpeg";
import { ProposalHeaderLayers } from "../site-header";
import PhotoViewer, { type PhotoViewerImage } from "./photo-viewer";
// kiwanda images
import kiwandaArrivalImage from "../assets/proposal/kiwanda/arrival.jpeg";
import kiwandaBeachImage from "../assets/proposal/kiwanda/beach.jpg";
import kiwandaSidAndThomasImage from "../assets/proposal/kiwanda/sidandthomas.jpg";
import kiwandaSidAndThomasDuneNowImage from "../assets/proposal/kiwanda/sidandthomas_dune_now.jpg";
import kiwandaSidAndThomasDuneThenImage from "../assets/proposal/kiwanda/sidandthomas_dune_then.jpeg";
import kiwandaTidepoolsImage from "../assets/proposal/kiwanda/tidepools.jpeg";

const basePath = process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

const photoSequence: PhotoViewerImage[] = [
  {
    src: carImage,
    alt: "Beginning of the road trip in Seattle",
    caption: "2 hours behind schedule, packing up the car",
  },
  { src: drivingImage, alt: "Driving in Seattle" },
  { src: tacosImage, alt: "Tacos in Seattle" },
  { src: cannonBeachDrivingImage, alt: "Driving at Cannon Beach" },
  { src: cannonBeachRoadImage, alt: "Road at Cannon Beach" },
  { src: cannonBeachRockImage, alt: "Rock at Cannon Beach" },
  { src: cannonBeachKellyImage, alt: "Kelly at Cannon Beach" },
  { src: cannonBeachDanAndKellyImage, alt: "Dan and Kelly at Cannon Beach" },
  { src: kiwandaArrivalImage, alt: "Arrival at Kiwanda" },
  { src: kiwandaBeachImage, alt: "Beach at Kiwanda" },
  { src: kiwandaSidAndThomasImage, alt: "Sid and Thomas at Kiwanda" },
  { src: kiwandaSidAndThomasDuneNowImage, alt: "Sid and Thomas at Kiwanda Dune Now" },
  { src: kiwandaSidAndThomasDuneThenImage, alt: "Sid and Thomas at Kiwanda Dune Then" },
  { src: kiwandaTidepoolsImage, alt: "Tidepools at Kiwanda" },
];

const galleryImages = photoSequence.map((image, index) => ({
  ...image,
  previousIndex: index > 0 ? index - 1 : undefined,
  nextIndex: index < photoSequence.length - 1 ? index + 1 : undefined,
}));

export default function Proposal() {
  const imageClassName = "w-[100%] max-w-[100%] h-fit mt-32 lg:mt-32";
  const markerClassName = "mr-[-46px] w-[150px] justify-self-end w-20vw lg:hidden";
  return (
    <main className="relative flex min-h-0 flex-1 flex-col overflow-y-auto">
      <ProposalHeaderLayers />
      <span
        className="
          font-['Times_New_Roman'] text-[32px] text-center text-[#38385F]
          max-w-235 self-center my-50
        "
      >
        This past spring, we went on a road trip down the PCH from Seattle to Big Sur with our dear friends Kelly and
        Daniel. The proposal is special in of itself but the stage is not set without recounting our time on the road,
        so, we thought we’d take the opportunity to share this with you all.
      </span>
      <div
        className="
          relative z-10 mx-auto grid w-full max-w-360
          grid-cols-[1fr_6px_1fr] lg:grid-cols-[1fr_0.67fr_1fr]
          items-stretch pb-10 gap-8 px-8 lg:gap-4 lg:px-4
        "
      >
        <div className="grid auto-rows-min col-start-1 justify-items-center gap-4">
          <ExportedImage
            src={seattleMarkerImage}
            alt="Illustrated Seattle marker"
            basePath={basePath}
            className={markerClassName + " mt-[-35px]"}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={0} className={imageClassName + " mt-[0px]"} />
          <PhotoViewer gallery={galleryImages} imageIndex={2} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={4} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={6} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={8} className={imageClassName} />
          <ExportedImage
            src={kiwandaMarkerImage}
            alt="Illustrated Cape Kiwanda marker"
            basePath={basePath}
            className={markerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={10} className={imageClassName + " mt-[0px]"} />
          <PhotoViewer gallery={galleryImages} imageIndex={13} className={imageClassName} />
        </div>
        <div className="col-start-2 w-full">
          <ExportedImage
            src={roadTripRouteImage}
            alt="Illustrated road trip route"
            basePath={basePath}
            className="pointer-events-none -mt-2 hidden h-auto w-full object-contain lg:block"
          />
          <ExportedImage
            src={roadTripRouteMobileImage}
            alt=""
            aria-hidden="true"
            basePath={basePath}
            className="pointer-events-none -mt-2 mx-auto block h-auto w-auto max-w-full object-contain lg:hidden"
          />
        </div>
        <div className="grid auto-rows-min col-start-3 justify-items-center gap-4">
          <PhotoViewer gallery={galleryImages} imageIndex={1} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={3} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={5} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={7} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={9} className={imageClassName} />
          <div className="grid grid-cols-[auto_auto] gap-[60px] mt-[148px]">
            <PhotoViewer
              gallery={galleryImages}
              imageIndex={11}
              className={"h-auto w-auto max-w-[350px] max-h-[300px]"}
            />
            <PhotoViewer
              gallery={galleryImages}
              imageIndex={12}
              className={"h-auto w-auto max-w-[350px] max-h-[300px] mt-[40px]"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
