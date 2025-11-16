import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        {/* <div className="xxl:max-w-106 h-auto xxl:max-h-126">
          <div className="max-w-106 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[300px] w-[300px] object-cover"
              src={person}
              alt=""
            />
          </div>
          
        </div> */}

        <div className="max-sm:w-full">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            N8N Automation Expert | Full-Stack Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I am an N8N Automation Expert and Full-Stack Developer specializing in building automated workflows, backend services, and custom API integrations.
              I help businesses streamline operations using tools like n8n, Make.com, Zapier, and custom Node.js/Next.js solutions. With strong experience in workflow design, database structuring, OCR extraction, and cloud deployment, I turn manual processes into scalable, fully automated systems.
              I focus on creating reliable, scalable automation systems that reduce workload, eliminate repetitive tasks, and deliver accurate, real-time results for clients.
              I bring a problem-solving mindset to every project, ensuring each automation or application is optimized, maintainable, and tailored to real business needs.
            </p>          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
