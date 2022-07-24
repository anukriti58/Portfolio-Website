import "./nar.scss"


export default function Nar() {
  const data = [
  {
    id: 1,
    name: "Coordinator",
    title: "Rendition",
    subtitle:"The drama society of LNMIIT",
    img:
      "assets/nar1.png",
    desc:
      "Led a team of 60+ members, to polish their dramatic skills by mentoring them and organising various activities.",
  },
  {
    id: 2,
    name: "Coordinator",
    title: "C-CSPD",
    subtitle: "Centre of Communications, soft skills and personality Development",
    img:
      "assets/nar2.jpeg",
    desc:
      "Through planning numerous events, we continuously try to enhance the communication skills of our college.",
    featured: true,
  },
  {
    id: 3,
    name: "Member",
    title: "ACM",
    subtitle: "Association for Computing Machinery",
    img:
      "assets/nar3.png",

    desc:
      "Managing the work under the society and contributing towards the managment, at LNMIIT",
  },
  {
    id: 3,
    name: "Member",
    title: "Sankalp",
    img:
      "assets/nar4.png",

    desc:
      " A team of 150+ students working for the betterment of society by educating Mess Workers at our Institute and children in the nearby villages.",
  },
  ];
  return (
    <div className="nar" id="nar">
      <h1>Non-academic Responsibilties</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h4>{d.name}</h4>
              <h3>{d.title}</h3>
              <h6>{d.subtitle}</h6>
            </div>
            <div className="center">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="bottom">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

