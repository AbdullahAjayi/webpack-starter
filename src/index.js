import foo from "./module";
import "./styles/main.scss";
// import RamadanImg from "./assets/RamadanDashboardL.png";

// const ramadanImg = document.getElementById("ramadan-img");
const testBtn = document.getElementById("test-btn");

// ramadanImg.src = RamadanImg;

testBtn.addEventListener("click", foo);
