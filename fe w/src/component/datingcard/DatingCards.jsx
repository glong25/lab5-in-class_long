
import React, { useEffect, useState } from "react";
import  DatingCard  from "react-tinder-card";
import "./DatingCards.css";
import axios from "./axios";


const DatingCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards_container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
          >
            <div style={{ backgroundImage: `url(https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/292598262_3306851679595998_6105543358691327414_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lbwZuSw_JEsAX8EIHof&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfBbOdFdV8ceZ2IgwcgFuGkIM1NkSDQiTv6COVeboR6h7g&oe=637A1B0A)`}}>
              <h3>{'Long'}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;