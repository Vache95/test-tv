export const textReplace = (filmItems) => {
  return filmItems
    ?.replaceAll("<p>", " ")
    .replaceAll("</p>", " ")
    .replaceAll("<b>", " ")
    .replaceAll("</b>", " ")
    .replaceAll("<i>", " ")
    .replaceAll("</i>", " ");
};
