// const app = require("../view/app");
const request = require("supertest");
const model = require("../model/model");
const { sequelize } = require("../model/dataBase");
require("dotenv").config({ path: "../.env" });

// beforeAll(async () => {
//   try {
//     await sequelize.sync();
//     console.log("Connected to DB");
//   } catch (error) {
//     console.log("Error in connection DB:" + error);
//   }
// });

// test("Sign up", async () => {
//   const result = await request(app).post("/signup").send({
//     email: "jidesh0410@gmail.com",
//     password: "jiJI@#27",
//     name: "jidesh",
//   });
//   console.log(result.body);
//   expect(result.body.success).toBeTruthy();
//   expect(result.body.msg).toBe("Created user");
// });

// test('login',async()=>{
//     await request(app).post('/signup')
//     .send({
//         "email":"jidesh0410@gmail.com",
//         "password":"jiJI@#27",
//         "name":"jidesh"
//     })
//     .expect(200)
// })

// describe('Node App', () => {
//     // beforeAll(async () => {
//     //     try {
//     //         await sequelize.sync()
//     //         console.log("Connected to DB");

//     //     } catch (error) {
//     //         console.log("Error in connection DB:"+error);
//     //     }
//     // });
//     // afterAll(async () => {
//     //     await sequelize.close()
//     //     console.log("DB Closed");
//     // });
//     it('Sign up',async()=>{
//         const result = await request(app).post('/signup')
//         .send({
//             "email":"jidesh0410@gmail.com",
//             "password":"jiJI@#27",
//             "name":"jidesh"
//         })
//         expect(result.success).toBeTruthy()
//         expect(result.msg).toBe("Created user")

//     })
//     // it('Login', async () => {
//     //     await request(app).post('/login')
//     //     .send({
//     //         "id":"1",
//     //         "password":"jiJI@#27",
//     //     })
//     //     .expect(200)
//     // })
// })

// (async ()=>{try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }})()

beforeAll(async () => {
  try {
    await sequelize.sync();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error in connection DB:" + error);
  }
});
test('Test add user',async ()=>{
    try {
        await sequelize.sync();
        const res = await model.addAuthor({name:"jidesh",email:"jidesh0410@gmail.com",password:"aaAA#$12"})
        console.log(res);
        expect(res.success).toBeTruthy()
        
    } catch (error) {
        console.log(`Error : ${error}`);
    }
    
})