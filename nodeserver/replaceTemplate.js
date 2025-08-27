module.exports = (data, template) => {
  let one = template.replace("{item}", data.product);
  one = one.replace("{index}", data.id);
  one = one.replace("{title}", data.title);
  one = one.replace("{about}", data.about);
  return one;
};
