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
        <div className="xxl:max-w-106 h-auto xxl:max-h-126">
          <div className="max-w-106 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[300px] w-[300px] object-cover"
              src={person}
              alt=""
            />
          </div>
          
        </div>

        <div className="max-sm:w-full w-[46rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            n8n Automation Expert | Transforming Businesses through Intelligent Integrations
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
            I am an Automation Expert specializing in n8n, with proven experience in designing 
            and implementing intelligent workflows that connect applications, streamline processes, and 
            drive business efficiency. I leverage n8n to build scalable automation solutions that reduce 
            manual effort and accelerate digital transformation.
            </p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
