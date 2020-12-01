export default (key, errors, touched) => {
  if (touched[key]) {
    if (errors[key]) {
      return { class: "error" };
    } else {
      return { class: "success" };
    }
  } else {
    return "";
  }
};
