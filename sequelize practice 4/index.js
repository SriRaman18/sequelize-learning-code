const { Sequelize,DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize ("sequelize-video","postgres", "12345678", {
    dialect:"postgres"
});


async function myfunction(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database');
      }
}

myfunction();

// sequelize.authenticate().then(()=>{
//     console.log("connection successful");

// }).catch((err)=>{
//     console.log("error connecting to database!");
// });

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue:22
      }
  }, {
    // Other model options go here

  }
  

  );

//   methode to add model(table) to database

  async function synchModels(){
    try {
        await User.sync();
        // console.log('model added succesfully');

        // methode 1 to add column

        // const user = User.build({firstName:"john", lastName:"doe", age:25})
        // return user.save();

        // method 2 to add row

        // return User.create({
        //     firstName:"andrew",
        //     lastName:"doe",
        //     age: 26,
        // })
        
        
        
        // methode 3 to add row 
        // const jane = await User.create({firstName:"kane", lastName: "sen", age: 45})

        // console.log(jane); // Don't do this
    //  console.log(jane.toJSON()); // This is good!

     // Find all users
      // const userss = await User.findAll({        
      // //   // change the column name
      // //   // attributes: [['firstName', "yourName"], 'age']

      // //   // doing functions
      // //   // attributes: [[sequelize.fn("COUNT",sequelize.col('john')), "howmanytimes"]]
      // //   // attributes: [[sequelize.fn("Sum",sequelize.col('age')), "howolds"]]
        

      // //   // using WHERE
      // //   // where: {
      // //   //   age:40
      // //   // }

      // //   // using group by
      // //   // attributes: ['firstName', [sequelize.fn("Sum",sequelize.col('age')), "howolds"]],
      // //   // group: "firstName"

      // //   // using OR operator
      //   where: {
      //     //   [Op.or]:
      //     //     {firstName:"john", firstName: "rick"}
            
      //     age:{
      //       [Op.gt]:60
      //     },  [Op.or]:
      //         {firstName:"kane", firstName: "john"}
      //     }
  
      // },);
      // console.log(userss.every(user => user instanceof User)); // true
      // console.log("All users:", JSON.stringify(userss, null, 2));


      // updating data

      // const userss = await User.update({age:100}, {where: {firstName :"john"}})


      // deleting user

      // User.destroy({where:{firstName:"john"}})

      // getting maximum value 

    const maximumAge=  User.max("age")
    console.log(maximumAge)


      userss.forEach((ele)=>{
        console.log(ele.toJSON());
      })

      } catch (error) {
        console.log('Unable to add model');
      }
  }

  synchModels()




console.log("another task");