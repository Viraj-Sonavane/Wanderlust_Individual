const request = require("supertest")("http://localhost:3000/api");
const expect = require("chai").expect;

const test_data = [
  ["Shashta", "Mountain Area" , "Cold", "California", "true"],
  ["Tahoe", "Lake" , "Scenry", "California", "true"],
  ["Yosemite", "Camping" , "LightCold", "California", "true"]
  ];


  describe("DELETE /photography", function () {
    it("Deletes all Location", async function () {
      const response1 = await request.delete("/photography");
      expect(response1.status).to.eql(200);
      const response2 = await request.get("/photography");
      expect(response2.status).to.eql(200);
      expect(response2.body.length).to.eql(0);
    });
  });
  

  describe("GET /photography", function () {
    it("Returns all PhotographyLocation", async function () {
      await request.delete("/photography");

      for (let photograpy of test_data) {
        await request
          .post("/photography")
          .send({
            photographyPlace: photograpy[0],
            photographyDescription: photograpy[1],
            photographyReview: photograpy[2],
            photographyAddress: photograpy[3],
            isBooked: photograpy[4]
          });
      }

      const response = await request.get("/photography");

      expect(response.status).to.eql(200);
      expect(response.body.length).to.eql(test_data.length);
    });
  });


  describe("POST /photography", function () {
    it("Adds new Photography Location", async function () {
      const response = await request
        .post("/photography")
        .send({
               photographyPlace: test_data[0][0], 
               photographyDescription: test_data[0][1], 
               photographyReview: test_data[0][2], 
               photographyAddress: test_data[0][3], 
               isBooked: test_data[0][4] 
        });
      expect(response.status).to.eql(200);
    });
  });
 
  describe("UPDATE /photography", function () {
    it("Update a Location", async function () {
      let photographyId = null;

      for (let photography of (await request.get("/photography")).body) {
        if (photography.photographyPlace == "Shashta") {
          photographyId = photography._id;
          console.log("Location Name to update => '" + photography.photographyPlace + "'");
          break;
        }
      }

      const response = await request
        .put("/photography/" + photographyId)
        .send({
            photographyPlace: "Mount.Tamalpais",
            photographyDescription: "Mountain",
            photographyReview: "Cloudy",
            photographyAddress: "California",
            isBooked: "True"
        });

      expect(response.status).to.eql(200);
      for (let photography of (await request.get("/photography")).body) {
        if (photography._id == photographyId) {
          console.log("Location Name after update '" + photography.photographyPlace + "'");
        }
      }
    });
  });
  