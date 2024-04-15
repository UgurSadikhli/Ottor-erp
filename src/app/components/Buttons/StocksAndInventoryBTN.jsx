import Link from "next/link";

const StocksAndIventionsButton = ({ isActive, onClick,color }) => (
  <Link href="/stocksAndInventory" passHref={true} legacyBehavior={true}>
    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={onClick}>
      <svg
        width="23.000000"
        height="23.000000"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip5_1291">
          <rect
            id="Stock"
            width="23.000000"
            height="23.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
        <rect
          id="Stock"
          width="23.000000"
          height="23.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <g clip-path="url(#clip5_1291)">
          <path
            id="Vector"
            d="M4 7.87L8.87 7.87L8.87 3L4 3L4 7.87ZM5.53 4.53L7.34 4.53L7.34 6.34L5.53 6.34L5.53 4.53Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 3L19.99 3L19.99 4.53L10.73 4.53L10.73 3Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 6.34L18.13 6.34L18.13 7.87L10.73 7.87L10.73 6.34Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M4 14.55L8.87 14.55L8.87 9.68L4 9.68L4 14.55ZM5.53 11.21L7.34 11.21L7.34 13.02L5.53 13.02L5.53 11.21Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 9.68L19.99 9.68L19.99 11.21L10.73 11.21L10.73 9.68Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 13.02L18.13 13.02L18.13 14.55L10.73 14.55L10.73 13.02Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M4 21.24L8.87 21.24L8.87 16.36L4 16.36L4 21.24ZM5.53 17.89L7.34 17.89L7.34 19.7L5.53 19.7L5.53 17.89Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 16.36L19.99 16.36L19.99 17.89L10.73 17.89L10.73 16.36Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M10.73 19.7L18.13 19.7L18.13 21.24L10.73 21.24L10.73 19.7Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </g>
      </svg>
      Stocks and Inventory
    </a>
  </Link>
);
export default StocksAndIventionsButton;
