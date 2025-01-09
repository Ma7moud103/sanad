import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Sidebar from "./_components/Sidebar";
import { UiContextProvider } from "./_context/UiContext";

const joseFin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: {
    template: "%s | Sanadedu",
    default: "Sanadedu"
  },
  description:
    "Luxurious cabin hotel, located in the heart of the italian dolomits"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${joseFin.className}  bg-bg_mainLayout dark:bg-zinc-900 dark:bg-none bg-HomePageBgImage h-screen antialiased flex   transition-all`}>




        <aside id="sidebar" className="absolute lg:static h-full top-0 bottom-0 start-0 end-0 bg-blurBg lg:bg-transparent">
          <Sidebar />
        </aside>



        <main id="main" className="p-4 px-6 w-full flex flex-col gap-6">
          <UiContextProvider>
            {children}
          </UiContextProvider>

        </main>
        <div id="modal" />

      </body>
    </html >
  );
}
