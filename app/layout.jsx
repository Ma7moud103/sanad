import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
// import Sidebar from "./_components/Sidebar";
import { UiContextProvider } from "./_context/UiContext";
import ThemeProvider from "./_providers/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${joseFin.className}  bg-bg_mainLayout dark:bg-zinc-900 dark:bg-none bg-HomePageBgImage h-screen antialiased flex   transition-all`}>

        {/* <Sidebar /> */}


        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <UiContextProvider>
            {children}
          </UiContextProvider>
        </ThemeProvider>


        <div id="modal" />
      </body>
    </html >
  );
}
