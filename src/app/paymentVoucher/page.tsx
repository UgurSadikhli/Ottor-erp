import Image from "next/image";
import MainLayout from "../layouts/main-layout";
import HeaderStaffIcon from "../components/Icons/HeaderStaffIcon/HeaderStaffIcon";

export default function paymentVoucher() {
  return (
    <MainLayout
      label="Create payment voucher"
      title=" Payment Voucher"
      icon={<HeaderStaffIcon />}
    >
      <h1>paymentVoucher</h1>
    </MainLayout>
  );
}
