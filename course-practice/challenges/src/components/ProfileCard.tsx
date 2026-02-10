export function ProfileCard() {
  const profileData = {
    avatar: "avatar.png",
    name: "Albert Jonas",
    intro:
      "Motivated software developer training in Python/GenAI and full-stack tech (Angular, FastAPI). Strong in data handling (MongoDB/JSON) and eager to contribute to dynamic teams via clean code and modern frameworks.",
    skillsets: [
      { name: "Angular", emoji: "🚀", color: "blue" },
      { name: "HTML/CSS", emoji: "👍", color: "orange" },
      { name: "JavaScript", emoji: "⭐", color: "purple" },
      { name: "TypeScript", emoji: "⭐", color: "yellow" },
      { name: "Python", emoji: "⭐", color: "green" },
      { name: "Django", emoji: "⭐", color: "pink" },
      { name: "Flask/FastAPI", emoji: "⭐", color: "violet" },
      { name: "MongoDB", emoji: "⭐", color: "grey" },
      { name: "Generative AI", emoji: "🤖", color: "red" },
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
  list: { name: string; emoji: string; color: string }[];
}) {
  return (
    <div className="list">
      {list.map(
        (
          item: { name: string; emoji: string; color: string },
          index: number,
        ) => {
          return (
            <Skill
              name={item.name}
              emoji={item.emoji}
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
  emoji,
  color,
}: {
  name: string;
  emoji: string;
  color: string;
}) {
  console.log(name);
  return (
    <>
      <div className="name" style={{ backgroundColor: color, color: "white" }}>
        {name}
        {emoji}
      </div>
    </>
  );
}
