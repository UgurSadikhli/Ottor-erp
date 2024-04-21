import MainLayout from '../layouts/main-layout'
import HeaderStaffIcon from "../components/Icons/HeaderStaffIcon/HeaderStaffIcon";

export default function Staff() {
  return (
    <MainLayout label="View, search for and add new staff" title=" All Staff" icon={<HeaderStaffIcon/>}>
      <h1>staff</h1>
    </MainLayout>
  );
}
