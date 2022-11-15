import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

// Hack to get the tailwind breakpoint for a specified screen size.
// This is js because resolveConfig is not supported in Typescript
const fullConfig = resolveConfig(tailwindConfig);

export default function getBreakpoint(value) {
  return fullConfig.theme.screens[value].slice(
    0, 
    fullConfig.theme.screens[value].indexOf('px')
  );
}