/* eslint-disable react/prop-types */
import icon from "../assets/icon.svg";

function Card({ title, description }) {
  return (
    <>
      <div className="bg-white border rounded-lg shadow-md text-center p-5 w-10/12 mx-auto md:w-1/3">
        <img src={icon} alt="" className="mx-auto" />
        <h3 className="font-semibold text-xl p-5">{title}</h3>
        <div>
          <p className="text-sm w-10/12 mx-auto">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
