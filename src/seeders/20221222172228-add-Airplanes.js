'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
         model_number:'Beoing737',
         capacity:300,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
        model_number:'AirbusA320',
        capacity:350,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      model_number:'Beoing777',
      capacity:400,
      createdAt: new Date(),
      updatedAt: new Date()
   },{
    model_number:'Beoing707',
    capacity:320,
    createdAt: new Date(),
    updatedAt: new Date()
     },{
      model_number:'Beoing747',
      capacity:150,
      createdAt: new Date(),
      updatedAt: new Date()
},
{
  model_number:'AirbusA330',
  capacity:300,
  createdAt: new Date(),
  updatedAt: new Date()
},
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
