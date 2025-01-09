import DailyGroups from "./_components/DailyGroups";
import HomeBoxes from "./_components/HomeBoxes";

export default function Page() {
  const Info = {
    name: "ali"
  }
  return <>
    <header>
      <h5 className="text-mainColor dark:text-light_white">Hello,{Info.name}</h5>
      <h2 className="text-mainColor dark:text-light_white font-bold lg:text-[1.7rem]">Welcome to sanad</h2>

    </header>
    <div className="grid grid-cols-[16rem_16rem_16rem_16rem] gap-x-mainGap w-full  ">
      <HomeBoxes />
    </div>
    <DailyGroups />


  </>;
}
