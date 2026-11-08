"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import stampImage from "../public/stamp.jpg";

const basePath = process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

export function WeddingNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Wedding links" className="flex gap-2 pt-1">
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className={`whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] sm:text-base ${
          pathname === "/" ? "underline" : ""
        }`}
      >
        save the date
      </Link>
      <Link
        href="/proposal"
        aria-current={pathname === "/proposal" ? "page" : undefined}
        className={`whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] sm:text-base ${
          pathname === "/proposal" ? "underline" : ""
        }`}
      >
        the proposal
      </Link>
    </nav>
  );
}

function PostageStamp() {
  return (
    <ExportedImage
      src={stampImage}
      alt="Philippine orchid postage stamp, 20 pesos"
      basePath={basePath}
      width={1000}
      height={1200}
      className="h-auto w-[50px] rotate-6"
      priority
    />
  );
}

function WeddingHeader({ sticky = false }: { sticky?: boolean }) {
  return (
    <header
      className={`
        ${sticky ? "sticky top-0 z-20 " : ""}
        flex shrink-0 flex-row items-start justify-between gap-3 px-4 pt-4
        sm:gap-4 sm:px-4 sm:pt-4
      `}
    >
      <WeddingNavigation />
      <PostageStamp />
    </header>
  );
}

export default function SiteHeader() {
  return <WeddingHeader />;
}

export function ProposalHeaderLayers() {
  return <WeddingHeader sticky />;
}
