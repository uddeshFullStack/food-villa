import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-r-2 border-black p-2 m-2">
      <h3 className="text-xl font-bold p-2 m-2">{title}</h3>
      {isVisible ? (
        <>
          <button onClick={toggleVisibility} className="px-4 underline">
            Hide
          </button>
          <p className="p-2 m-2">{description}</p>
        </>
      ) : (
        <button onClick={toggleVisibility} className="px-4 underline">
          Show
        </button>
      )}
    </div>
  );
};

const InstamartDummy = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  const sections = {
    about: {
      title: "About Instamart",
      description:
        "Your about section description",
    },
    team: {
      title: "Team Instamart",
      description:
        "Your team section description",
    },
    career: {
      title: "Careers",
      description:
        "Your careers section description",
    },
    other: {
      title: "Others",
      description:
        "Your others section description",
    },
  };

  const toggleSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <>
      <h1 className="font-bold text-3xl p-2 m-2">InstaMart</h1>
      {Object.keys(sections).map((key) => (
        <Section
          key={key}
          title={sections[key].title}
          description={sections[key].description}
          isVisible={visibleSection === key}
          toggleVisibility={() => toggleSection(key)}
        />
      ))}
    </>
  );
};

export default InstamartDummy;
