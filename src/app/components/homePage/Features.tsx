import { RiRadarLine } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';
import { FaBuromobelexperte, FaSpaceShuttle } from 'react-icons/fa';

const features = [
  {
    id: 'f1',
    image: (
      <RiRadarLine
        size={70}
        fill="#2F303A"
        aria-label="Attention to detail icon"
      />
    ),
    title: 'ATTENTION TO DETAIL',
    description:
      'Perfection in Every Pixel. Unmatched Precision, Unparalleled Quality. Discover the Art of Detail with Us!',
  },
  {
    id: 'f2',
    image: <BiTimer size={70} fill="#2F303A" aria-label="Punctuality icon" />,
    title: 'PUNCTUALITY',
    description:
      'Time is Our Commitment. Punctuality Perfected. Trust in Our Timely Solutions for a Seamless Experience.',
  },
  {
    id: 'f3',
    image: (
      <FaBuromobelexperte size={70} fill="#2F303A" aria-label="Planning icon" />
    ),
    title: 'PLANNING',
    description:
      'Seamless Solutions, Meticulously Planned. Unlock Success with our Strategic Approach to Planning.',
  },
  {
    id: 'f4',
    image: (
      <FaSpaceShuttle size={70} fill="#2F303A" aria-label="Modern tech icon" />
    ),
    title: 'MODERN TECH',
    description:
      'Empowering Your Future with Modern Tech. Embrace Innovation, Embrace Success.',
  },
];

function FeaturesItem({
  image,
  title,
  description,
}: {
  image: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="features__wrapper">
        <div className="features__icon">{image}</div>
      </div>
      <h3 className="features__title">{title}</h3>
      <p className="features__description">{description}</p>
    </>
  );
}

function Features() {
  return (
    <section className="">
      <div className="features container">
        <h2 className="--visually-hidden">Our features</h2>
        <ul className="features__list">
          {features.length > 0 &&
            features.map(({ id, image, title, description }) => (
              <li key={id} className="features__item">
                <FeaturesItem
                  image={image}
                  title={title}
                  description={description}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
