const server = require('./src/server.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;
// const {createDepartments, createCitys, createUserAuto} = require("./src/hardcode/demography.js")


conn.sync({ force: false, alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Server listening at ${PORT}`);
  });
});
