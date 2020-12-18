import mongoose from "mongoose";
import { assert } from "chai";

import { User } from "../src";

describe("UserModel", () => {
  let user;

  before(async (done) => {
    // runs once before the first test in this block
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection
      .once("open", () => console.log("Connected!"))
      .on("error", (error) => {
        console.warn("Error : ", error);
      });

    mongoose.set("useCreateIndex", true);

    done();
  });

  it("#create()", (done) => {
    user = new User({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@testing.com",
      phoneNumber: "+254710101010",
      gender: "Male",
    });

    user
      .save()
      .then(() => {
        assert(!user.isNew);

        done();
      })
      .catch(console.error);
  });

  it("#findOne()", (done) => {
    User.findOne({ email: "john.doe@testing.com" })
      .then(() => {
        // @ts-ignore
        assert(user.firstName === "John");

        done();
      })
      .catch(console.error);
  });

  it("#remove()", (done) => {
    user
      .remove()
      .then(() => User.findOne({ email: "john.doe@testing.com" }))
      .then((result) => {
        assert(result === null);
        done();
      })
      .catch(console.error);
  });

  after((done) => {
    // runs once after the last test in this block
    mongoose.connection.close();
    done();
  });
});
