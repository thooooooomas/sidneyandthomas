"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const basePath =
  process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

export function WeddingNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Wedding links" className="flex gap-2 pt-1">
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className={`whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] sm:text-sm ${
          pathname === "/" ? "underline" : ""
        }`}
      >
        save the date
      </Link>
      <Link
        href="/proposal"
        aria-current={pathname === "/proposal" ? "page" : undefined}
        className={`whitespace-nowrap px-3 py-2 font-serif text-xs text-[#38385F] sm:text-sm ${
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
    <Image
      src={`${basePath}/stamp.jpg`}
      alt="Philippine orchid postage stamp, 20 pesos"
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
      className={`${sticky ? "sticky top-0 z-20 " : ""}flex shrink-0 flex-row items-start justify-between gap-3 px-5 pt-4 sm:gap-4 sm:px-8 sm:pt-6`}
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
