import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profiles.jpg"
const SideBar = () => {
  return (
    <div>
    <Sidebar aria-label="Sidebar with content separator example">
    <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Hello User!!
      </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload E-books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage E-Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/sign-up" icon={HiUser}>
          Users
        </Sidebar.Item>
       
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        
       
        
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  </div>
  )
}

export default SideBar
