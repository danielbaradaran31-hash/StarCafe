import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee3,
    title: " Black Kaffee",
    subtitle:
      "Die Augen waren kaffeebraun,und in diesem Moment begrif ich, dass Kaffee viel stärker süchtig macht als jede Zigarette",
  },
  {
    id: 2,
    image: coffee1,
    title: " Eiskaffee",
    subtitle:
      "Die Augen waren kaffeebraun,und in diesem Moment begrif ich, dass Kaffee viel stärker süchtig macht als jede Zigarette",
  },
  {
    id: 3,
    image: coffee3,
    title: "Heißer Kaffee",
    subtitle:
    "Die Augen waren kaffeebraun,und in diesem Moment begrif ich, dass Kaffee viel stärker süchtig macht als jede Zigarette"
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVarients = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChilden: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          className="text-3xl font-bold text-lightGray"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
           Frisch und <span className="text-primary">l</span>
        </motion.h1>
        <motion.p
          className="text-sm opacity-50 font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
        >
          Ein Stück Zucker macht eine Tasse schwarzen Kaffee nicht süß,
          zwei Stück auch nicht. Drei, vier, fünf …
          Sag du doch: eine ganze Welt voller Zucker macht diese bittere Welt nicht süß.
          Nein … wenn du nicht da bist, wird das Orakel dieses Lebens niemals süß.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service,) => (
          <div key={service.id} className="text-center p-4 space-y-6">
            <motion.img
              variants={containerVarients}
              initial="hidden"
              whileInView={"vaisible"}
              viewport={{ amount: 0.8 }}
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
