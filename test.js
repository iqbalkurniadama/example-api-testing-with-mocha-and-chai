const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("POST User request", function(){
  // post user
  it("success Register user", async function() {
    const res = await request
    .post("/api/users")
    .send(
        {
          name: "kurnia",  
          job: "QAenggineer"
        }
      )
    
    expect(res.body.name).to.eql('kurnia')
    expect(res.body.job).to.eql('QAenggineer')
    expect(res.statusCode).to.equal(201);
  })

  // get user
  it("get single user", async function() {
    const res = await request
    .get("/api/users/2")
    
    expect(res.statusCode).to.equal(200);
  })

  // put user
  it("success update user", async function() {
    const res = await request
    .put("/api/users/2")
    .send(
        {
          name: "Iqbal Kurnia Dama",  
          job: "QA enggineer"
        }
      )
    
    expect(res.body.name).to.eql('Iqbal Kurnia Dama')
    expect(res.body.job).to.eql('QA enggineer')
    expect(res.statusCode).to.equal(200);
  })

  // delete user
  it("success delete user", async function() {
    const res = await request
    .delete("/api/users/2")
    
    expect(res.statusCode).to.equal(204);
  })

})