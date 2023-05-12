import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Servic1 from "../Assets/Img/our-services/pic1.png";
import Servic2 from "../Assets/Img/our-services/pic2.png";
import Servic3 from "../Assets/Img/our-services/pic3.png";

export const planCardData = [
  {
    img: Servic1,
    imgTitle: "Haftalik Testlar",
    icons: (
      <FontAwesomeIcon
        icon={faUniversity}
        size={`1.5rem`}
        className="card-icon"
      />
    ),
    cardText: "Iqtisodiy",
    cardLink:"student/exams-list/current",
    cardTitle:
      "Iqtisodiy ko‘rsatkichlar taxlili algoritimi va matematik modelini ishlab chiqish.",
  },
  {
    img: Servic2,
    imgTitle: "Ijtimoiy",
    icons: (
      <FontAwesomeIcon icon={faBook} size={`1.5rem`} className="card-icon" />
    ),
    cardText: "Ijtimoiy",
    cardLink:"/lectures",
    cardTitle:
      "Ijtimoiy-iqtisodiy ko'rsatkichlar taxlili algoritmi va matematik modelini ishlab  chiqish.",
  },
  // {
  //   img: Servic3,
  //   imgTitle: "Kundalik taqdimotlar",
  //   icons: (
  //     <FontAwesomeIcon icon={faFile} size={`1.5rem`} className="card-icon" />
  //   ),
  //   cardText: "Mustaqil o'rganish uchun manbalar",
  //   cardLink:"/practices",
  //   cardTitle:
  //     "Bu bo'limdan siz o'zingizga kerakli elektron resurslarni topishingiz mumkin.",
  // },
];
