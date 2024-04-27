import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import SrockAndInventoryHeaderIcon from "../../components/Icons/SrockAndInventoryHeaderIcon/SrockAndInventoryHeaderIcon";
import styles from './inventory.module.css'
import Card from "../../components/Card/card";
import SrockAndInventoryIcon from "../../components/Icons/SrockAndInventoryIcon/SrockAndInventoryIcon";
import ArrowUpIcon from "../../components/Icons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "../../components/Icons/ArrowDownIcon/ArrowDownIcon";
import Link from "next/link";
import CustomTable from "../../components/Table/CustomTable/CustomTable";
import GroupButton from "../../components/Buttons/GroupButton/GroupButton";


export default function Inventory() {

  const headers = [
    { id: 1, headerName: "S/N" },
    { id: 2, headerName: "Image" },
    { id: 3, headerName: "Product Name" },
    { id: 4, headerName: "Product ID" },
    { id: 5, headerName: "Category" },
    { id: 6, headerName: "QTY Purchased" },
    { id: 7, headerName: "Unit Price" },
    { id: 8, headerName: "Total Amount" },
    { id: 9, headerName: "Supplier" },
    { id: 10, headerName: "Status" },
  ];

  const innerData = [
    {
      id: 1,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 2,
      Image: "https://popularonline.com.sg/cdn/shop/products/1412ed17b668bb1e69e4529ad13f33a6_64a36333-5987-4c85-a506-6b71e7d667c9.jpg?v=1638937743",
      Name: "A4 Paper",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "Out of Stock",
    },
    {
      id: 3,
      Image: "https://www.lanrebhadmusindustries.com/image/cache/catalog/All-Purpose-Liquid-Wash-500ml-500x500.jpg",
      Name: "Liquid wash",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "Low in stock",
    },
    {
      id: 4,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 5,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 6,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 7,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 8,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 9,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },
    {
      id: 10,
      Image: "https://img.freepik.com/free-vector/cartoonish-blue-fountain-pen-isolated-white-background-vector-illustration_8130-2560.jpg",
      Name: "Pen",
      ID: "45656787",
      Category: "Stationaries",
      Purchased: "50pcs",
      Price: "₦100.00",
      Amount: "₦5,000.00",
      Supplier: "Big Ben’s Store",
      Status: "In stock",
    },

  ]




  return (
    <MainLayout icon={<SrockAndInventoryHeaderIcon/>} label="Update stoke and inventory table" title="Stocks and Inventory">
     <div className={styles.main}>
          <div className={styles.conteiner}>
            <div className={styles.top}>
            <GroupButton
                button1Name="Stocks"
                button2Name="Inventory"
                activeButton="Inventory"
                button1Href="/stocksAndInventory"
                button2Href="#"
                />
  
            </div>
            <div className={styles.card}>
            <Card
              number={"10"}
              title="Categories"
              description="2 more than last year"
              icon={<SrockAndInventoryIcon color={"#248CD8"}/>}
              arrowIcon={<ArrowUpIcon color="#10A242"  />}
              backgroundColor="#E8F5FF"
            />
             <Card
              number={"300"}
              title="Total items"
              description="10 more than last year"
              icon={<SrockAndInventoryIcon color={"#F29425"} />}
              arrowIcon={<ArrowUpIcon color="#10A242" />}
              backgroundColor="#FFF4E8"
            />
             <Card
              number={"₦250,000,000"}
              title="Total item cost"
              description="2.5% less than last year"
              icon={<SrockAndInventoryIcon color={"#A601FF"} />}
              arrowIcon={<ArrowDownIcon color="#ED3237" />}
              backgroundColor="#F9EFFF"
            />
             <Card
              number={"20"}
              title="Total suppliers"
              description="2 more than last week"
              icon={<SrockAndInventoryIcon color={"#272525"} />}
              arrowIcon={<ArrowUpIcon color="#10A242" />}
              backgroundColor="#FFF8DF"
            />
  
            </div>
            <div className={styles.body}>
                <div className={styles.UpdateStockContainer}>
                    <div>
                       <span className={styles.title}>Update Inventory Table</span>
                    </div>
                    <div>
                     <Link href="/stocksAndInventory/add-new-inventory">
                       <button className={styles.buttons}>Update Inventory</button>
                      </Link>
                   </div>
                 </div>
            </div>
            <div className={styles.bottom}>
                <CustomTable
                  blockTitle={"Stock List"}
                  headers={headers}
                  innerData={innerData}
                />
            </div>
          </div>

     </div>
     
    </MainLayout>
  );
}
