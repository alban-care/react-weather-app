import React, { useEffect, useMemo } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { colorModeState } from "./store/colorModeAtoms";
import theme from "./theme.ts";

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useRecoilState(colorModeState);

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode, setMode]);

  const updatedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={updatedTheme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
