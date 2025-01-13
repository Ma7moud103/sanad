import DailyGroups from "./_components/DailyGroups";
import HomeBoxes from "./_components/HomeBoxes";
import Sidebar from "./_components/Sidebar";

// export const revalidate = 0
export default function Page() {
  const Info = {
    name: "ali"
  }
  return (
    <>
      <Sidebar />
      <main id="main" className="p-4 px-6 w-full flex flex-col gap-6">
        <header>
          <h5 className="text-mainColor ">Hello,{Info.name}</h5>
          <h2 className="text-mainColor font-bold lg:text-[1.7rem]">Welcome to sanad</h2>

        </header>
        <div className="flex flex-col gap-y-2 sm:flex-none  sm:grid sm:grid-cols-2 sm:gap-4 2xl:grid-cols-[16rem_16rem_16rem_16rem] gap-x-mainGap w-full  ">
          <HomeBoxes />
        </div>
        <DailyGroups />
      </main>
    </>
  );
}
