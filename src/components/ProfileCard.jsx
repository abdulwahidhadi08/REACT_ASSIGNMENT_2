import React from "react";

const ProfileCard = ({
  image,
  name,
  profession,
  experience,
  bio,
  skillname,
  skills,
  skill,
  skil,
  contactme,
}) => {
  return (
    <div>
      <img className="rounded-full ml-15" src={image} alt="profile" />
      <h1 className="text-center text-2xl text-blue-600 font-bold ">{name}</h1>
      <p className="italic text-center mt-1">{profession}</p>
      <p className="italic text-center ">{experience}</p> <br />
      <hr />
      <p className="text-center ">{bio}</p>
      <hr />
      <ul>
        <h2 className="text-center uppercase mt-1 font-bold">{skillname}</h2>
        <li className="list-disc ml-42 mt-1">{skills}</li>
        <li className="list-disc ml-42 ">{skill}</li>
        <li className="list-disc ml-42 ">{skil}</li>
      </ul>
      <button className="border rounded-xl p-1 m-1 items-center ml-33 bg-blue-500 font-semibold hover:bg-black transition-all duration-700 text-white px-5 py-1">
        {contactme}
      </button>
    </div>
  );
};

export default ProfileCard;
