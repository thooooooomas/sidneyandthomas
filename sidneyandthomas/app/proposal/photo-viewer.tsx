"use client";

import ExportedImage from "next-image-export-optimizer";
import { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/sidneyandthomas" : "";

type PhotoViewerProps = {
  gallery: readonly PhotoViewerImage[];
  imageIndex: number;
  className?: string;
};

export type PhotoViewerImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  previousIndex?: number;
  nextIndex?: number;
};

export default function PhotoViewer({ gallery, imageIndex, className }: PhotoViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(imageIndex);
  const image = gallery[imageIndex];
  const activeImage = gallery[activeIndex];
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" && activeImage.previousIndex !== undefined) {
        event.preventDefault();
        setActiveIndex(activeImage.previousIndex);
      } else if (event.key === "ArrowRight" && activeImage.nextIndex !== undefined) {
        event.preventDefault();
        setActiveIndex(activeImage.nextIndex);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open full-size image: ${image.alt}`}
        className={"outline-none focus:outline-none focus-visible:outline-none" + (className ? " " + className : "")}
        style={{ width: "100%" }}
        onClick={() => {
          setActiveIndex(imageIndex);
          setIsOpen(true);
        }}
      >
        <span
          className="relative mx-auto block max-w-full"
          style={{
            width: `min(100%, ${image.src.width}px)`,
            aspectRatio: `${image.src.width} / ${image.src.height}`,
          }}
        >
          <ExportedImage
            src={image.src}
            alt={image.alt}
            basePath={basePath}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </span>
        {image.caption && (
          <span className="mt-2 block text-center font-['Times_New_Roman'] text-xs text-[#38385F] lg:text-sm">
            {image.caption}
          </span>
        )}
      </button>
      <dialog
        ref={dialogRef}
        aria-label={activeImage.alt}
        className={`
          fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none
          bg-[#d9d9d9]/50 p-0 backdrop-blur-[15px]
        `}
        onClose={() => setIsOpen(false)}
      >
        <div
          className="relative flex h-full w-full cursor-zoom-out flex-col items-center justify-center gap-4 p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            className={`
              absolute right-4 top-4 z-10 rounded-full bg-black/60 px-4 py-2
              font-sans text-sm text-white outline-none focus:outline-none
              focus-visible:outline-none sm:right-8 sm:top-8
            `}
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
          {activeImage.previousIndex !== undefined && (
            <button
              type="button"
              aria-label={`Show previous image: ${gallery[activeImage.previousIndex].alt}`}
              className={`
                absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full
                bg-black/60 px-3 py-3 font-sans text-2xl leading-none text-white
                outline-none focus:outline-none focus-visible:outline-none sm:left-6
              `}
              onClick={() => setActiveIndex(activeImage.previousIndex ?? activeIndex)}
            >
              ❮
            </button>
          )}
          <ExportedImage
            src={activeImage.src}
            alt={activeImage.alt}
            basePath={basePath}
            sizes="90vw"
            className="h-auto max-h-[82dvh] w-auto max-w-[75vw] cursor-default object-contain"
          />
          {activeImage.caption && (
            <p className="max-w-[75vw] text-center font-['Times_New_Roman'] text-xs text-[#38385F] lg:text-sm">
              {activeImage.caption}
            </p>
          )}
          {activeImage.nextIndex !== undefined && (
            <button
              type="button"
              aria-label={`Show next image: ${gallery[activeImage.nextIndex].alt}`}
              className={`
                absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full
                bg-black/60 px-3 py-3 font-sans text-2xl leading-none text-white
                outline-none focus:outline-none focus-visible:outline-none sm:right-6
              `}
              onClick={() => setActiveIndex(activeImage.nextIndex ?? activeIndex)}
            >
              ❯
            </button>
          )}
        </div>
      </dialog>
    </>
  );
}
