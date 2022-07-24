import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/sort.png",
      title: "Sorting Visualizer",
      desc:
        "Sorting Visualizer is a web app for visualizing a bunch of different sorting algorithms Like Bubble Sort, Merge Sort, Quick Sort or Heap Sort. ",
      img:
        "./assets/sorting.png",
      code:
        "https://github.com/anukriti58",
      },
    {
      id: "2",
      icon: "./assets/stat.png",
      title: "Weather Station",
      desc:
        "It displays humidity and temperature based messages along with data on LCD in real time..",
      img:
        "./assets/wst.png",
      code: "https://github.com/anukriti58/Weather-Station",
      
    },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "",
    //   desc:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img:
    //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.code} target="_blank">Click here for the source code !</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/animesh.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/animesh.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

// // import "./works.scss"

// // export default function works() {
// //   return (
// //     <div className="works" id="works">
// //       <div className="slider">
// //         <div className="container">
// //           <div className="items">
// //             <div className="left">
                
// //             </div>
// //             <div className="right">
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
