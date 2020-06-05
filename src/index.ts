import { transform } from "./transform";
import { define, load } from "./load";

// Note, shimport hardcodes the global name here - load and internal functions
// assume this, so don't try and initialise to a different global variable as it
// won't work.
const initialise = () => {
  self.__shimport__ = { transform, define, load };
};

export { transform, define, load, initialise };
