import GalleryItem from "./GalleryItem";

const GallerySection = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4" id="projects">
      <GalleryItem
        bgClass="bg-[url('../assets/images/mobile/image-gallery-milkbottles.jpg')] sm:bg-[url('../assets/images/desktop/image-gallery-milkbottles.jpg')]"
        alt="Milk Bottles"
      />
      <GalleryItem
        bgClass="bg-[url('../assets/images/mobile/image-gallery-orange.jpg')] sm:bg-[url('../assets/images/desktop/image-gallery-orange.jpg')]"
        alt="Orange"
      />
      <GalleryItem
        bgClass="bg-[url('../assets/images/mobile/image-gallery-cone.jpg')] sm:bg-[url('../assets/images/desktop/image-gallery-cone.jpg')]"
        alt="Cone"
      />
      <GalleryItem
        bgClass="bg-[url('../assets/images/mobile/image-gallery-sugar-cubes.jpg')] sm:bg-[url('../assets/images/desktop/image-gallery-sugarcubes.jpg')]"
        alt="Sugar Cubes"
      />
    </section>
  );
};

export default GallerySection;