/*Subir archivos al cdn*/
const cdn = require("./files");

const setupData = (
  req,
  _path,
  name,
  isSeveral = false,
  isMultiple = false,
  array
) => {
  if (isSeveral) {
    if (isMultiple) {
      const { originalname, buffer } = array;
      const fileName = `${Date.now()}_${originalname}`;
      const path = _path;
      cdn.upFiles(path, fileName, buffer);
      req.body[name] = `${path}/${fileName}`;
    } else {
      if (req.files == undefined) {
        return;
      }
      const { originalname, buffer } = req.files[name][0];
      const fileName = `${Date.now()}_${originalname}`;
      const path = _path;
      cdn.upFiles(path, fileName, buffer);
      req.body[name] = `${path}/${fileName}`;
    }
  } else {
    if (req.file == undefined) {
      return;
    }
    const { originalname, buffer } = req.file;
    const fileName = `${Date.now()}_${originalname}`;
    const path = _path;
    cdn.upFiles(path, fileName, buffer);
    req.body[name] = `${path}/${fileName}`;
  }
};

module.exports = setupData;
