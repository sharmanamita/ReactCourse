export function ProfileCard() {
  const profileData = {
    avatar: "avatar.png",
    name: "Albert Jonas",
    intro:
      "Motivated software developer training in Python/GenAI and full-stack tech (Angular, FastAPI). Strong in data handling (MongoDB/JSON) and eager to contribute to dynamic teams via clean code and modern frameworks.",
    skillsets: [
      { name: "Angular", level: "advanced", color: "blue" },
      { name: "HTML/CSS", level: "advanced", color: "orange" },
      { name: "JavaScript", level: "intermediate", color: "purple" },
      { name: "TypeScript", level: "advanced", color: "yellow" },
      { name: "Python", level: "beginner", color: "green" },
      { name: "Django", level: "beginner", color: "pink" },
      { name: "Flask/FastAPI", level: "beginner", color: "violet" },
      { name: "MongoDB", level: "beginner", color: "grey" },
      { name: "Generative AI", level: "beginner", color: "red" },
    ],
  };
  return (
    <div className="card">
      <Avatar image={profileData.avatar} />
      <Introduction intro={profileData.intro} name={profileData.name} />
      <Skills list={profileData.skillsets} />
    </div>
  );
}

function Avatar({ image }: { image: string }) {
  return (
    <div className="img_style">
      <img src={image}></img>
    </div>
  );
}

function Introduction({ intro, name }: { intro: string; name: string }) {
  return (
    <>
      <p className="name">
        <strong>{name}</strong>
      </p>
      <p className="intro">{intro}</p>
    </>
  );
}

function Skills({
  list,
}: {
  list: { name: string; level: string; color: string }[];
}) {
  return (
    <div className="list">
      {list.map(
        (
          item: { name: string; level: string; color: string },
          index: number,
        ) => {
          return (
            <Skill
              name={item.name}
              level={item.level}
              color={item.color}
              key={index}
            />
          );
        },
      )}
    </div>
  );
}

function Skill({
  name,
  level,
  color,
}: {
  name: string;
  level: string;
  color: string;
}) {
  function getEmoji(level: string) {
    switch (level) {
      case "beginner":
        return "🤓";
      case "intermediate":
        return "👍";
      case "advanced":
        return "😎";
      default:
        return "";
    }
  }

  return (
    <div className="name" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span className="emoji">{getEmoji(level)}</span>
    </div>
  );
}
