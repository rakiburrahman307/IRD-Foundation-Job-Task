import Category from "./category/page";

export default function Home() {
  return (
    <section className=''>
      <main className='flex h-screen'>
        {/* Sidebar */}
        {/* <Sidebar /> */}
        <Category/>

        {/* Content Area */}
        <div className='flex-1 bg-gray-100'>
          {/* <ContentArea /> */}
        </div>

        {/* Settings Sidebar */}
        {/* <SettingsSidebar /> */}
      </main>
    </section>
  );
}
