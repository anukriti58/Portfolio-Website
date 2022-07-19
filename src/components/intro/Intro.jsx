import "./intro.scss";
import { useEffect} from "react";
import { init } from "ityped";
import Animations from "./animations/Animations";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Programmer", "Web Developer", "Content Writter", "Orator"],
  //   });
  // }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
            <img src="assets/anukritii1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Anukriti Shrivastava</h1>
          <h3><span> <Animations/> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
