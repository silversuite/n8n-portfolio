import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Automation (n8n & AI)",
    description:
      "I design intelligent workflows by connecting applications, automating processes, and leveraging AI to enhance efficiency, reduce manual effort, and unlock business insights.",
  },
  {
    id: 2,
    title: "Enterprise Integration",
    description:
      "I deliver robust integration solutions using IBM ACE, MQ, App Connect, and DataPower, ensuring secure, scalable, and reliable data exchange across complex enterprise systems.",
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "I enable organizations to modernize their operations by blending automation, integration, and AI—creating solutions that improve agility, resilience, and long-term growth.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building intelligent automations and seamless integrations, leveraging n8n, AI, and enterprise platforms like IBM ACE, MQ, App Connect, and DataPower to connect systems, optimize workflows, and deliver business value.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines automation expertise and integration engineering to create solutions that are not only efficient and scalable, but also resilient and future-ready for modern enterprises.
          </p>
        </div>
       {/* <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a> */}
        <p className="mt-5 text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:andriidanylevych1@gmail.com"
            >
              Say Hello!
            </a>
          </p>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
