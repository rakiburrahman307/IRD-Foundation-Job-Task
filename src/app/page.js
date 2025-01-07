import Category from "./category/page";
import Nav from "./nav/page";
import SideMenu from "./sideMenu/page";

export default function Home() {
  return (
    <section className='bg-gray-100 '>
       <Nav />

      <main className='flex h-screen max-w-[1440px] bg-gray-100'>
        {/* Sidebar */}
        <SideMenu />
        {/* <Sidebar /> */}
        <Category />

        {/* Content Area */}
        <div className='flex-1 bg-gray-100'>{/* <ContentArea /> */}</div>

        {/* Settings Sidebar */}
        {/* <SettingsSidebar /> */}
      </main>
    </section>
  );
}
