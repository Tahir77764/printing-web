import Billboard from "../assets/billboard.png";
import Stamps from "../assets/stamp.png";
import Photo from "../assets/picture.png";
import Wedding from "../assets/wedding.png";
import Tote from "../assets/tote.png";
import Ticket from "../assets/tickets.png";
import Seven from "../assets/Seven.png";

export const products = [
  {
    id: 1,
    label: "Printing Services",
    img: Billboard,
    path: "/services/Printing-Services",
  },
  {
    id: 2,
    label: "Office Items",
    img: Stamps,
    path: "/services?category=Office Items",
  },
  {
    id: 3,
    label: "Photo Frames",
    img: Photo,
    path: "/services?category=Photo Frames",
  },
  {
    id: 4,
    label: "Invitations & Cards",
    img: Wedding,
    path: "/services?category=Invitations & Cards",
  },
  {
    id: 5,
    label: "Packaging Solutions",
    img: Tote,
    path: "/services?category=Packaging Solutions",
  },
  {
    id: 6,
    label: "Tickets & Event Cards",
    img: Ticket,
    path: "/services?category=Tickets & Event Cards",
  },
  {
    id: 7,
    label: "ID Cards & Accessories",
    img: Seven,
    path: "/services?category=ID Cards & Accessories",
  },
];
