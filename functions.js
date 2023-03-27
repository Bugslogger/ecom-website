import * as AiReactIcons from "react-icons/ai";
import * as MdReactIcons from "react-icons/md";
import * as BiReactIcons from "react-icons/bi";

export const ReactIcons = function (iconName) {
  console.log(iconName);
  if (iconName.startsWith("Ai")) {
    return AiReactIcons[iconName];
  }
  if (iconName.startsWith("Md")) {
    return MdReactIcons[iconName];
  }
  if (iconName.startsWith("Bi")) {
    return BiReactIcons[iconName];
  }
};
