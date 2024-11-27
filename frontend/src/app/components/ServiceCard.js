const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="m-auto bg-white shadow-md rounded-lg w-[250px] p-10 flex flex-col justify-center items-center text-center border-2 border-gray-200">
        <div className="w-16 h-16 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {/* <p className="text-gray-600">{description}</p> */}
      </div>
    );
  };
export default ServiceCard;