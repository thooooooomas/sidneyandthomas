import ExportedImage from "next-image-export-optimizer";
import { ProposalHeaderLayers } from "../site-header";
import PhotoViewer, { type PhotoViewerImage } from "./photo-viewer";
// road trip route image
import roadTripRouteImage from "../assets/proposal/road-trip-route.svg";
import roadTripRouteMobileImage from "../assets/proposal/road-trip-route-mobile.svg";
import seattleMarkerImage from "../assets/proposal/seattle-marker.svg";
import kiwandaMarkerImage from "../assets/proposal/kiwanda-marker.svg";
import florenceMarkerImage from "../assets/proposal/florence-marker.svg";
import goldBeachMarkerImage from "../assets/proposal/goldbeach-marker.svg";
import redwoodMarkerImage from "../assets/proposal/redwood-marker.svg";
import mendocinoMarkerImage from "../assets/proposal/mendocino-marker.svg";
import seaRanchMarkerImage from "../assets/proposal/searanch-marker.svg";
import muirBeachMarkerImage from "../assets/proposal/muirbeach-marker.svg";
import sfMarkerImage from "../assets/proposal/sf-marker.svg";
import bigSurMarkerImage from "../assets/proposal/bigsur-marker.svg";
// seattle images
import carImage from "../assets/proposal/1_seattle/car.jpeg";
import drivingImage from "../assets/proposal/1_seattle/driving.jpeg";
import tacosImage from "../assets/proposal/1_seattle/tacos.jpeg";
// cannon beach images
import cannonBeachDrivingImage from "../assets/proposal/2_cannon/driving.jpeg";
import cannonBeachRoadImage from "../assets/proposal/2_cannon/road.jpeg";
import cannonBeachRockImage from "../assets/proposal/2_cannon/rock.jpeg";
import cannonBeachKellyImage from "../assets/proposal/2_cannon/kelly.jpeg";
import cannonBeachDanAndKellyImage from "../assets/proposal/2_cannon/danandkelly.jpeg";
// kiwanda images
import kiwandaArrivalImage from "../assets/proposal/3_kiwanda/arrival.jpeg";
import kiwandaBeachImage from "../assets/proposal/3_kiwanda/beach.jpg";
import kiwandaSidAndThomasImage from "../assets/proposal/3_kiwanda/sidandthomas.jpg";
import kiwandaSidAndThomasDuneNowImage from "../assets/proposal/3_kiwanda/sidandthomas_dune_now.jpg";
import kiwandaSidAndThomasDuneThenImage from "../assets/proposal/3_kiwanda/sidandthomas_dune_then.jpeg";
import kiwandaTidepoolsImage from "../assets/proposal/3_kiwanda/tidepools.jpeg";
import kiwandaSunsetImage from "../assets/proposal/3_kiwanda/sunset.jpeg";
import kiwandaDinnerImage from "../assets/proposal/3_kiwanda/dinner.jpeg";
// Florence images
import florenceWavesImage from "../assets/proposal/4_florence/waves.jpeg";
import florenceFlowerImage from "../assets/proposal/4_florence/flower.jpeg";
import florenceBuggyImage from "../assets/proposal/4_florence/buggy.jpeg";
import florenceBuggyPovImage from "../assets/proposal/4_florence/buggy_pov.jpeg";
import florenceBuggyGroupImage from "../assets/proposal/4_florence/buggy_group.jpeg";
import florenceBbqImage from "../assets/proposal/4_florence/bbq.jpeg";
// Gold Beach images
import goldBeach1Image from "../assets/proposal/5_gold_beach/1G.jpeg";
import goldBeach2Image from "../assets/proposal/5_gold_beach/2G.jpeg";
import goldBeach3Image from "../assets/proposal/5_gold_beach/3G.jpeg";
import goldBeach4Image from "../assets/proposal/5_gold_beach/4G.jpeg";
import goldBeach5Image from "../assets/proposal/5_gold_beach/5G.jpeg";
import goldBeach6Image from "../assets/proposal/5_gold_beach/6G.jpeg";
import goldBeach7Image from "../assets/proposal/5_gold_beach/7G.jpg";
import goldBeach8Image from "../assets/proposal/5_gold_beach/8G.jpeg";
import goldBeach9Image from "../assets/proposal/5_gold_beach/9G.jpeg";
import goldBeach10Image from "../assets/proposal/5_gold_beach/10G.jpeg";
import goldBeach11Image from "../assets/proposal/5_gold_beach/11G.jpeg";
import goldBeach12Image from "../assets/proposal/5_gold_beach/12G.jpeg";
import goldBeach13Image from "../assets/proposal/5_gold_beach/13G.jpeg";
import goldBeach14Image from "../assets/proposal/5_gold_beach/14G.jpeg";
// Redwoods images
import redwoods1Image from "../assets/proposal/6_redwoods/1R.jpeg";
import redwoods2Image from "../assets/proposal/6_redwoods/2R.jpg";
import redwoods3Image from "../assets/proposal/6_redwoods/3R.jpg";
import redwoods4Image from "../assets/proposal/6_redwoods/4R.jpeg";
import redwoods5Image from "../assets/proposal/6_redwoods/5R.jpeg";
import redwoods6Image from "../assets/proposal/6_redwoods/6R.jpeg";
import redwoods7Image from "../assets/proposal/6_redwoods/7R.jpeg";
import redwoods8Image from "../assets/proposal/6_redwoods/8R.jpeg";
import redwoods9Image from "../assets/proposal/6_redwoods/9R.jpg";
import redwoods10Image from "../assets/proposal/6_redwoods/10R.jpeg";
import redwoods11Image from "../assets/proposal/6_redwoods/11R.jpeg";
// After Redwoods images
import afterRedwoods1Image from "../assets/proposal/7_after_redwoods/1AR.jpeg";
import afterRedwoods2Image from "../assets/proposal/7_after_redwoods/2AR.jpeg";
// Sea Ranch images
import seaRanch1Image from "../assets/proposal/8_searanch/1SR.jpeg";
import seaRanch2Image from "../assets/proposal/8_searanch/2SR.jpeg";
import seaRanch3Image from "../assets/proposal/8_searanch/3SR.jpg";
import seaRanch4Image from "../assets/proposal/8_searanch/4SR.jpeg";
import seaRanch5Image from "../assets/proposal/8_searanch/5SR.jpeg";
// Muir Beach images
import muirBeach1Image from "../assets/proposal/9_muirbeach/1MB.jpeg";
import muirBeach2Image from "../assets/proposal/9_muirbeach/2MB.jpeg";
import muirBeach3Image from "../assets/proposal/9_muirbeach/3MB.jpeg";
import muirBeach4Image from "../assets/proposal/9_muirbeach/4MB.jpeg";
import muirBeach5Image from "../assets/proposal/9_muirbeach/5MB.jpeg";
import muirBeach6Image from "../assets/proposal/9_muirbeach/6MB.jpeg";
import muirBeach7Image from "../assets/proposal/9_muirbeach/7MB.jpeg";
import muirBeach8Image from "../assets/proposal/9_muirbeach/8MB.jpeg";
import muirBeach9Image from "../assets/proposal/9_muirbeach/9MB.jpeg";
import muirBeach10Image from "../assets/proposal/9_muirbeach/10MB.jpeg";
import muirBeach11Image from "../assets/proposal/9_muirbeach/11MB.jpg";
// San Francisco images
import sanFrancisco1Image from "../assets/proposal/10_SF/1SF.jpg";
// Big Sur images
import bigSur1Image from "../assets/proposal/11_bigsur/1BS.jpeg";
import bigSur2Image from "../assets/proposal/11_bigsur/2BS.jpeg";
import bigSur3Image from "../assets/proposal/11_bigsur/3BS.jpeg";
import bigSur4Image from "../assets/proposal/11_bigsur/4BS.jpeg";
import bigSur5Image from "../assets/proposal/11_bigsur/5BS.jpeg";
import bigSur6Image from "../assets/proposal/11_bigsur/6BS.jpg";
import bigSur7Image from "../assets/proposal/11_bigsur/7BS.jpeg";

const basePath = process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

const openingPhotoSequence: PhotoViewerImage[] = [
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
  { src: kiwandaSidAndThomasDuneThenImage, alt: "Sid and Thomas at Kiwanda Dune Then" },
  { src: kiwandaSidAndThomasDuneNowImage, alt: "Sid and Thomas at Kiwanda Dune Now" },
  { src: kiwandaTidepoolsImage, alt: "Tidepools at Kiwanda" },
  { src: kiwandaSunsetImage, alt: "Sunset at Kiwanda" },
  { src: kiwandaDinnerImage, alt: "Dinner at Kiwanda" },
  { src: florenceWavesImage, alt: "Waves in Florence" },
  { src: florenceFlowerImage, alt: "Flower in Florence" },
  { src: florenceBuggyImage, alt: "Buggy in Florence" },
  { src: florenceBuggyPovImage, alt: "View from a buggy in Florence" },
  { src: florenceBuggyGroupImage, alt: "Group in a buggy in Florence" },
  { src: florenceBbqImage, alt: "Barbecue in Florence" },
];

const continuationPhotoSequence: PhotoViewerImage[] = [
  { src: goldBeach1Image, alt: "Gold Beach photo 1" },
  { src: goldBeach2Image, alt: "Gold Beach photo 2" },
  { src: goldBeach3Image, alt: "Gold Beach photo 3" },
  { src: goldBeach4Image, alt: "Gold Beach photo 4" },
  { src: goldBeach5Image, alt: "Gold Beach photo 5" },
  { src: goldBeach6Image, alt: "Gold Beach photo 6" },
  { src: goldBeach7Image, alt: "Gold Beach photo 7" },
  { src: goldBeach8Image, alt: "Gold Beach photo 8" },
  { src: goldBeach9Image, alt: "Gold Beach photo 9" },
  { src: goldBeach10Image, alt: "Gold Beach photo 10" },
  { src: goldBeach11Image, alt: "Gold Beach photo 11" },
  { src: goldBeach12Image, alt: "Gold Beach photo 12" },
  { src: goldBeach13Image, alt: "Gold Beach photo 13" },
  { src: goldBeach14Image, alt: "Gold Beach photo 14" },
  { src: redwoods1Image, alt: "Redwoods photo 1" },
  { src: redwoods2Image, alt: "Redwoods photo 2" },
  { src: redwoods3Image, alt: "Redwoods photo 3" },
  { src: redwoods4Image, alt: "Redwoods photo 4" },
  { src: redwoods5Image, alt: "Redwoods photo 5" },
  { src: redwoods6Image, alt: "Redwoods photo 6" },
  { src: redwoods7Image, alt: "Redwoods photo 7" },
  { src: redwoods8Image, alt: "Redwoods photo 8" },
  { src: redwoods9Image, alt: "Redwoods photo 9" },
  { src: redwoods10Image, alt: "Redwoods photo 10" },
  { src: redwoods11Image, alt: "Redwoods photo 11" },
  { src: afterRedwoods1Image, alt: "After Redwoods photo 1" },
  { src: afterRedwoods2Image, alt: "After Redwoods photo 2" },
  { src: seaRanch1Image, alt: "Sea Ranch photo 1" },
  { src: seaRanch2Image, alt: "Sea Ranch photo 2" },
  { src: seaRanch3Image, alt: "Sea Ranch photo 3" },
  { src: seaRanch4Image, alt: "Sea Ranch photo 4" },
  { src: seaRanch5Image, alt: "Sea Ranch photo 5" },
  { src: muirBeach1Image, alt: "Muir Beach photo 1" },
  { src: muirBeach2Image, alt: "Muir Beach photo 2" },
  { src: muirBeach3Image, alt: "Muir Beach photo 3" },
  { src: muirBeach4Image, alt: "Muir Beach photo 4" },
  { src: muirBeach5Image, alt: "Muir Beach photo 5" },
  { src: muirBeach6Image, alt: "Muir Beach photo 6" },
  { src: muirBeach7Image, alt: "Muir Beach photo 7" },
  { src: muirBeach8Image, alt: "Muir Beach photo 8" },
  { src: muirBeach9Image, alt: "Muir Beach photo 9" },
  { src: muirBeach10Image, alt: "Muir Beach photo 10" },
  { src: muirBeach11Image, alt: "Muir Beach photo 11" },
  { src: sanFrancisco1Image, alt: "San Francisco photo 1" },
  { src: bigSur1Image, alt: "Big Sur photo 1" },
  { src: bigSur2Image, alt: "Big Sur photo 2" },
  { src: bigSur3Image, alt: "Big Sur photo 3" },
  { src: bigSur4Image, alt: "Big Sur photo 4" },
  { src: bigSur5Image, alt: "Big Sur photo 5" },
  { src: bigSur6Image, alt: "Big Sur photo 6" },
  { src: bigSur7Image, alt: "Big Sur photo 7" },
];

const photoSequence: PhotoViewerImage[] = [...openingPhotoSequence, ...continuationPhotoSequence];

const galleryImages = photoSequence.map((image, index) => ({
  ...image,
  previousIndex: index > 0 ? index - 1 : undefined,
  nextIndex: index < photoSequence.length - 1 ? index + 1 : undefined,
}));

/* eslint-disable max-len */
const closingMessage = `
  Truly nothing could have prepared us for how perfect this moment could be.
  Sidney and I had done this road trip before in our early years, I had just gotten a driver's license.
  We had learned a lot about each other that trip, and doing it again with our friends was really special.
  It was a moment of reflection for me. For all those years, we've grown as partners and as individuals.
  Much like the coast, how it is constantly changing
  Yet always the same.
  The waves crash, the sand shifts, the rain comes and goes, the road twists and turns, the sun rises and sets
  Yet it is always there.
  Love is what remains constant, and it is what we have for one another. It is what we have for our friends and family.

  Serendipity. Moments you cannot have planned for, moments of pure magic.
  It's how this trip came together, we had all been planning for a group trip in the beginning of the year.
  I was turning 30 and wanted a special treat for myself, we were discussing at dinner one night the four of us.
  I had seen a Land Cruiser for sale in Bend, Oregon and was thinking of going to check it out.
  That sparked the idea of a road trip down the PCH together. We shared a love of the outdoors, camping, and the coast.
  It needed some work but had good bones. I learned a lot working on it, putting in new leather seats, Carplay, tires, various drivetrain maintenance.
  It was a labour of love.

  I had the proposal in the works for a while now but could not tell anyone at all, I wanted to keep it a complete secret even to Daniel and Kelly.
  The day of the proposal, we were camping near Muir Beach, and the plan was to get up early to drive to Big Sur to set up our second night of camp.
  I had other plans and that depended on us being on time but also I had to keep everything a secret.
  A lunch time sandwich and matcha (both really good, maybe too good) was threatening the timeline, I hint that we should keep it moving because we're parked in a loading zone..
  We hurry down to Big Sur, greeted with the most beautiful view of the ocean, cliffsides, and beaches.
  At this point I'm trying my best to keep it together and as we near camp, I break the news to everyone, "Guys, I have a surprise for everyone, we're not camping today... just trust me"
  Everyone is confused, Dan says "Let him cook" and we continue on...

  We pull up to a nice resort, doormen rush the 4 doors of our old Lexus and open the doors leading us to the lobby where we're offered champagne, wine..
  I tell everyone my surprise is to cap off the roadtrip with a night's stay at Post Ranch Inn.
  I suggest everyone that we check into our rooms, and go enjoy the sunset before our dinner reservation at the resort's restaurant Sierra Mar.
  Sidney asks why don't we enjoy the resort, and I think Kelly realized what was happening when she said "I think Thomas has a plan"

  We check in and head to our rooms, Sidney and I get ready, we meet up with Dan and Kelly and we head to the beach.
  We arrive and we admire the view of the waves crashing against the cliffs and rocky outcrops. There is not a cloud in the sky, a perfect day, a perfect May 19th.
  I tell Kelly and Dan that we're going to split off the path and check out the other side..
  We walk down this path, hop a fence, and we see two people vlogging on the edge of the cliff.
  I'm suggesting we go down to this very small platform but Sidney wasn't having it.
  The vloggers leave, and we have a moment to ourselves

  I tell Sidney I have something to say to her, and I get down on one knee.
  Sidney going on this roadtrip again has reminded me of how our love for one another never seems to stop growing. There's nobody in the world I'd rather share this life with.
  I ask her to marry me.
  She says yes, we're hugging and kissing. She realizes the vloggers are the photographers I had hired to capture the moment.
  We take some beautiful photos, of us together in the golden setting sun and we head back to the resort for our dinner reservation.

  We debrief, I tell everyone how all this came together, how it was kept a secret, how I had zero cell service throughout the trip to communicate with the photographers, how I was keeping the plan on track.
  Most of all we talk about how special this moment and trip had been. Truly, every day of the trip was better than the last and proposing to the love of my life was the best way to cap it off.

  The next 24 hours was the most relaxed I have ever been. Enjoying the infinity pool, Chez Celine good company.

  ---

  Friends and family, we are so grateful to have you all in our lives.
  We are so excited to share this next chapter of our lives with you all.
  Thank you for your endless love, support, friendship, in times of need and in times of joy.
  We cannot wait to celebrate with you all on our wedding day.
`;
/* eslint-enable max-len */

export default function Proposal() {
  const imageClassName = "w-[100%] h-fit max-w-[100%] mt-[30%] lg:px-[15%]";
  const markerClassName = "mr-[-46px] justify-self-end w-[150px] lg:hidden";
  const rightMarkerClassName = "ml-[-46px] justify-self-start w-[150px] lg:hidden";
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
          <PhotoViewer gallery={galleryImages} imageIndex={0} className={imageClassName + " mt-0!"} />
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
          <PhotoViewer gallery={galleryImages} imageIndex={10} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={13} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={15} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={17} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={19} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={21} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={23} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={25} className={imageClassName} />
          <ExportedImage
            src={goldBeachMarkerImage}
            alt="Illustrated Gold Beach marker"
            basePath={basePath}
            className={markerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={27} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={29} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={31} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={33} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={35} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={37} className={imageClassName} />
          <ExportedImage
            src={redwoodMarkerImage}
            alt="Illustrated Redwoods marker"
            basePath={basePath}
            className={markerClassName + " mr-[-42px]!"}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={39} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={41} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={43} className={imageClassName} />
          <ExportedImage
            src={mendocinoMarkerImage}
            alt="Illustrated Mendocino marker"
            basePath={basePath}
            className={markerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={45} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={47} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={49} className={imageClassName} />
          <ExportedImage
            src={seaRanchMarkerImage}
            alt="Illustrated Sea Ranch marker"
            basePath={basePath}
            className={markerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={51} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={53} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={55} className={imageClassName} />
          <ExportedImage
            src={muirBeachMarkerImage}
            alt="Illustrated Muir Beach marker"
            basePath={basePath}
            className={markerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={57} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={59} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={61} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={63} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={65} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={67} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={69} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={71} className={imageClassName} />
        </div>
        <div className="col-start-2 w-full hidden lg:block">
          <ExportedImage
            src={roadTripRouteImage}
            alt="Illustrated road trip route"
            basePath={basePath}
            className="pointer-events-none -mt-2 hidden h-auto w-full object-contain lg:block"
          />
        </div>
        <div className="col-start-2 w-[6px] bg-[#38385F] lg:hidden"></div>
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
          <PhotoViewer gallery={galleryImages} imageIndex={14} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={16} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={18} className={imageClassName} />
          <ExportedImage
            src={florenceMarkerImage}
            alt="Illustrated Florence marker"
            basePath={basePath}
            className={rightMarkerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={20} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={22} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={24} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={26} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={28} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={30} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={32} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={34} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={36} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={38} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={40} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={42} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={44} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={46} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={48} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={50} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={52} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={54} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={56} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={58} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={60} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={62} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={64} className={imageClassName} />
          <ExportedImage
            src={sfMarkerImage}
            alt="Illustrated San Francisco marker"
            basePath={basePath}
            className={rightMarkerClassName}
          />
          <PhotoViewer gallery={galleryImages} imageIndex={66} className={imageClassName + " mt-0!"} />
          <PhotoViewer gallery={galleryImages} imageIndex={68} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={70} className={imageClassName} />
          <PhotoViewer gallery={galleryImages} imageIndex={72} className={imageClassName} />
          <ExportedImage
            src={bigSurMarkerImage}
            alt="Illustrated Big Sur marker"
            basePath={basePath}
            className={rightMarkerClassName}
          />
        </div>
      </div>
      <section className="mx-auto max-w-235 px-8 pb-20 font-['Times_New_Roman'] text-xl leading-relaxed text-[#38385F]">
        {closingMessage
          .trim()
          .split(/\n\s*\n/)
          .map((paragraph, index) => (
            <p key={index} className="mb-6 whitespace-pre-line">
              {paragraph.trim()}
            </p>
          ))}
      </section>
    </main>
  );
}
