const Bounty = require('./models/Bounty.js');
const mongoose = require("./db/connection");
/*
 * Instructions:
 *
 * For each prompt below, write a query that completes the task described in
 * the prompt.
 *
 * Tip: comment out your answers before moving on to the next prompt.
 *
 */

// Create a new Bounty with the following values:
// - name: Han Solo,
// - wanted for:  Owing Money
// - client: Jabba the Hut
// - reward: 10000000
// - ship: Millennium Falcon
// - hunters: Bobba Fett, Dengar, IG-88, Zuckus, Greedo, Bossk, 4-Lom
// - captured: false

// PROMPT ONE ANSWER
// Bounty.create({
//     name: "Han Solo",
//     wanted_for: "Owing Money",
//     client: "Jabba the Hut",
//     reward: "10000000",
//     ship: "Millennium Falcon",
//     hunters:["Bobba Fett", "Dengar", "IG-88", "Zuckus", "Greedo", "Bossk", "4-Lom"],
//     captured: false
//   }).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });


// Find all bounties in the database

//PROMPT TWO ANSWER
// Bounty.find({ }).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });


// Find all bounties where the client is 'Time Bureau'

//PROMPT THREE ANSWER
// Bounty.find({ client: "Time Bureau" }).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });

// Find all bounties that have been captured

//PROMPT FOUR ANSWER
// Bounty.find({captured: true }).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });

// Find all bounties with a reward greater than 100,000

//PROMPT FIVE ANSWER
// Bounty.find({ reward: { $gt: 100000 }}).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });


// Starbuck and the Captain have come to an understanding. Remove her record.


//PROMPT SIX ANSWER
// Bounty.findOneAndRemove({  name: "Starbuck" } ).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });


// Update Sara Lance's name to be her super hero alias, 'White Canary'

// PROMPT SEVEN ANSWER
// Bounty.findOneAndUpdate(
//     { name: "Sara Lance" },
//     { $set: { name: "White Canary" } },
//     { new: true }
//   ).then(output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//   });

// Update Rocket's ship to be 'The Milano 2'

// PROMPT EIGHT ANSWER
// Bounty.findOneAndUpdate(
//     { name: "Rocket" },
//     { $set: { ship: "The Milano 2" } },
//     { new: true }
//     ).then (output => {
//     console.log(output);
//     console.log("exiting db connection");
//     mongoose.disconnect();
//     });
