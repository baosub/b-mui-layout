import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import NavBar from "./navbar/NavBar";
import { CssBaseline } from "@mui/material";





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar/>
            <CssBaseline/>
            {children}

          </ThemeProvider>

        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
