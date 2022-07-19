import "./topbar.scss";
import {Phone,Mail,LinkedIn,Instagram,GitHub} from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        {/* <div className="itemContainer">
            <Phone className="icon" />
          </div> */}
          <div className="itemContainer">
          <a href="mailto:anukritishri@gmail.com" target="_blank"><Mail className="icon" /></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/anukriti-shrivastava-255477204/" target="_blank"><LinkedIn className="icon" /></a>
          </div>
          <div className="itemContainer">
          <a href="https://github.com/anukriti58" target="_blank"><GitHub className="icon" /></a>
          </div>
          <div className="itemContainer"> 
          <a href="https://www.instagram.com/anukriitiiii/" target="_blank"><Instagram className="icon" /></a>
          </div>
        </div>
        <div className="middle">
          <a href="#intro" className="logo">Stupefy!</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}


// import "./topbar.scss"
// import {Phone,Mail,LinkedIn,GitHub,Instagram} from "@material-ui/icons"
// export default function Topbar({menuOpen, setMenuOpen}) {
//   return (
//     <div className={"topbar " + (menuOpen && "active")}>
//       <div className="wrapper">
//         <div className="left">
//           {/* <div className="itemContainer"> */}
//             {/* <Phone className="icon" /> */}
//           {/* </div> */}
//           <div className="itemContainer">
//             <a href="mailto:anukriti@gmail.com" target="_blank">
//               <Mail className="icon" />
//             </a>
//           </div>
//           <div className="itemContainer">
//             <a href="https://www.linkedin.com/in/anukriti-shrivastava-255477204/" target="_blank">
//               <LinkedIn className="icon" />
//             </a>
//           </div>
//           <div className="itemContainer">
//             <a href="https://github.com/anukriti58" target="_blank">
//               <GitHub className="icon" />
//             </a>
//           </div>
//           <div className="itemContainer">
//             <a href="https://www.instagram.com/anukriitiiii/" target="_blank">
//               <Instagram className="icon" />
//             </a>
//           </div>
//         </div>
        
//         <div className="right">
//           <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
//             <span className="line1"></span>
//             <span className="line2"></span>
//             <span className="line3"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

{/*<div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo">
            Awesome :)
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+91 7014 575 185</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>anukritishri@gmail.com</span>
          </div>
          </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
  </div>*/}

