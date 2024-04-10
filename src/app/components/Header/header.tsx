import Image from "next/image";
import "./header.css";
import image from "../../../../public/assets/auth/img2.jpeg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <span className="header_h1">Welcome, Mr. Otor John</span>
          <span className="header_p">
            Today is Saturday, 11th November 2022.
          </span>
        </div>

        <div className="header_right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <Image
            className="header_image"
            src={image}
            alt="Your Image"
            width={40}
            height={40}
          />
          <div className="header_perInfo">
            <span className="userName_header">Otor John</span>
            <span className="userPosition_header">HR office</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 15"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
    </>
  );
}
