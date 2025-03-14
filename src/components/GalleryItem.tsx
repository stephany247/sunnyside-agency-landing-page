interface GalleryItemProps {
  bgClass: string;
  alt: string;
}

const GalleryItem = ({ bgClass, alt }: GalleryItemProps) => {
  return (
    <div className={`${bgClass} w-full h-40 sm:h-[30rem] bg-cover bg-center bg-no-repeat`} aria-label={alt}></div>
  );
};

export default GalleryItem;