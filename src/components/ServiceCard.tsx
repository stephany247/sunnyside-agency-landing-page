interface ServiceCardProps {
  bgClass: string;
  title: string;
  description: string;
  textColor: string;
}

const ServiceCard = ({ bgClass, title, description, textColor }: ServiceCardProps) => {
  return (
    <div className={`${bgClass} bg-cover bg-top bg-no-repeat w-full min-h-screen h-[130vh] md::h-full relative text-center ${textColor} font-bold flex flex-col items-center justify-end`}>
      <div className="space-y-6 my-16 px-4">
        <h1 className="font-fraunces font-bold text-3xl">{title}</h1>
        <p className="text-base max-w-sm px-6">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;