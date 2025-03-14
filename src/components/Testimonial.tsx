interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

const Testimonial = ({ image, name, role, quote }: TestimonialProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6 lg:space-y-12 lg:px-8">
      <img src={image} alt={name} className="rounded-full w-16 h-16" />
      <p className="text-neutral-dark-grayish-blue lg:line-clamp-3">{quote}</p>
      <div className="space-y-2">
        <h3 className="font-bold font-fraunces text-neutral-dark-blue">
          {name}
        </h3>
        <p className="text-neutral-grayish-blue text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;
