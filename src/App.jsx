import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row">
      <div className="border w-[30%] m-6 mt-9 mb-8 rounded-2xl shadow-2xl">
        <ProfileCard
          image="https://tse1.mm.bing.net/th/id/OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv?pid=Api&h=220&P=0"
          name="Abdul Salam"
          profession="Front End Developer"
          experience="Experience: 3+ years"
          bio="Passionate web developer with a love for clean design and modern user experiences."
          skillname="skills:"
          skills="Html"
          skill="Javascript"
          skil="Tailwind css"
          contactme="contact me"
        />
      </div>
      <div className="border w-[30%] m-6 mt-9 mb-8 rounded-2xl shadow-2xl">
        <ProfileCard
          image="https://tse4.mm.bing.net/th/id/OIP.cpKBWEQFTt-cuMUI_WINuQHaGu?pid=Api&h=220&P=0"
          name="Sarah Khan"
          profession="back End Developer"
          experience="Experience:New to work"
          bio="Passionate graphic designer with a love for creative visuals  experiences."
          skillname="skills:"
          skills="Html"
          skill="React.Js"
          skil="Node.Js"
          contactme="contact me"
        />
      </div>
      <div className="border w-[30%] m-6 mt-9 mb-8 rounded-2xl shadow-2xl">
        <ProfileCard
          image="https://tse1.mm.bing.net/th/id/OIP.8UqOTLl0knNXrmb8iSs8KwHaHw?pid=Api&h=220&P=0"
          name="Manahil Khan"
          profession="Full Mern Stack Developer"
          experience="Experience: 4+ years"
          bio="Passionate software engineer with a love for problem solving"
          skillname="skills:"
          skills="Html"
          skill="Css"
          skil="Javascript"
          contactme="contact me"
        />
      </div>
    </div>
  );
}

export default App;
