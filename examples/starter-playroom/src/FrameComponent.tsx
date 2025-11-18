import { Reshaped } from "reshaped";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "reshaped/themes/slate/theme.css";
import "reshaped/themes/reshaped/theme.css";

export default function FrameComponent({ theme, children }) {
  return (
    <>
      <style>{`
        body { 
          margin: 0;
          background-color: var(--rs-color-background-page);
        }
      `}</style>

      <Reshaped theme={theme.theme} colorMode={theme.mode}>
        {children}
      </Reshaped>
    </>
  );
}
