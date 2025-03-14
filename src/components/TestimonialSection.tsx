import Testimonial from "./Testimonial";
import emilyImage from "../assets/images/image-emily.jpg";
import thomasImage from "../assets/images/image-thomas.jpg";
import jennieImage from "../assets/images/image-jennie.jpg";

const TestimonialSection = () => {
  return (
    <section className="bg-neutral-light-gray py-16 md:py-32 md:px-16">
      <h2 className="text-center text-neutral-grayish-blue font-fraunces text-lg font-bold uppercase mb-10 tracking-[0.2em]">Client Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-0">
        <Testimonial
          image={emilyImage}
          name="Emily R."
          role="Marketing Director"
          quote="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        />
        <Testimonial
          image={thomasImage}
          name="Thomas S."
          role="Chief Operating Officer"
          quote="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
        />
        <Testimonial
          image={jennieImage}
          name="Jennie F."
          role="Business Owner"
          quote="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;