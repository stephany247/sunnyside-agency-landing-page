import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="grid md:grid-cols-2" id="services">
      <ServiceCard
        bgClass="bg-[url('../assets/images/mobile/image-graphic-design.jpg')] sm:bg-[url('../assets/images/desktop/image-graphic-design.jpg')]"
        title="Graphic Design"
        description="Great design makes you memorable. We deliver artwork that underscores your message and captures potential clients' attention."
        textColor="text-primary-cyan"
      />
      <ServiceCard
        bgClass="bg-[url('../assets/images/mobile/image-photography.jpg')] sm:bg-[url('../assets/images/desktop/image-photography.jpg')]"
        title="Photography"
        description="Increase your credibility by getting the most stunning high-quality photos that improve your business image."
        textColor="text-primary-blue"
      />
    </section>
  );
};

export default ServiceSection;
