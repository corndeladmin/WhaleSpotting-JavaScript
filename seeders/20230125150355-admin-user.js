"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await User.bulkCreate([
			{
				name: "Admin",
				email: "admin@test.com",
				isAdmin: true,
				hash: "$2b$10$Fx7C.brmBFhoNRNIB3rGO.CBzOoqaGPG/PDJT8Tu5fa8yyZvHCxk.",
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		queryInterface.bulkDelete("Users", null, {});
	},
};
