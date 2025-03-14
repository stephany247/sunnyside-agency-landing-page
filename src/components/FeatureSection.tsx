import mobileEgg from "../assets/images/mobile/image-transform.jpg";
import desktopEgg from "../assets/images/desktop/image-transform.jpg";
import mobileGlass from "../assets/images/mobile/image-stand-out.jpg";
import desktopGlass from "../assets/images/desktop/image-stand-out.jpg";

interface FeatureCardProps {
  mobileImage: string;
  desktopImage: string;
  title: string;
  description: string;
  linkText: string;
  linkColor: string;
  reverse?: boolean;
}

const FeatureCard = ({ mobileImage, desktopImage, title, description, linkText, linkColor, reverse }: FeatureCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 min-h-screen ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <img src={mobileImage} alt={title} className="w-full h-full md:hidden" />
      <img src={desktopImage} alt={title} className={`w-full h-full hidden md:block ${reverse ? 'md:order-last' : ''}`} />
      <div className="py-12 px-7 text-center md:text-left flex flex-col justify-center gap-y-6 sm:mx-auto">
        <h2 className="text-3xl md:text-5xl font-fraunces font-bold mx-4 sm:mx-auto md:mx-0 max-w-lg">{title}</h2>
        <p className="text-neutral-dark-grayish-blue md:max-w-md">{description}</p>
        <a
          href="#"
          className={`text-neutral-dark-blue text-base font-fraunces uppercase font-bold underline decoration-6 underline-offset-1 transition-all
          ${linkColor === "primary-yellow" ? "decoration-primary-yellow/30 hover:decoration-primary-yellow" : ""}
          ${linkColor === "primary-red" ? "decoration-primary-red/30 hover:decoration-primary-red" : ""}`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="grid md:grid-cols-1" id="about">
      <FeatureCard
        mobileImage={mobileEgg}
        desktopImage={desktopEgg}
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through engaging visuals that do most of the marketing for you."
        linkText="Learn more"
        linkColor="primary-yellow"
        reverse
      />
      <FeatureCard
        mobileImage={mobileGlass}
        desktopImage={desktopGlass}
        title="Stand out to the right audience"
        description="Use a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places."
        linkText="Learn more"
        linkColor="primary-red"
      />
    </section>
  );
};

export default FeatureSection;
