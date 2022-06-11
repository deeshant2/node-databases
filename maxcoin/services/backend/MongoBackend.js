/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const {MongoClient} = require('mongodb');

const CoinAPI = require('../CoinAPI');

class MongoBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.mongoUrl = "mongodb://localhost:37017/maxcoin";
    this.client = null;
    this.collection = null;
  }

  async connect() {
    const mongoClient = new MongoClient(this.mongoUrl, 
      {useUnifiedTopology: true, 
        useNewUrlParser: true});
      
      this.client = await mongoClient.connect();
      this.collection = this.client.db("maxcoin").collection("values");
      return this.client;
  }

  async disconnect() {}

  async insert() {}

  async getMax() {}

  async max() {
    console.info("Connecting to MongoDb");
    console.time("mongodb-connect");
    const client = await this.connect();

    if (client.isConnected()) {
      console.info("Connected to MongoDB");
    } else {
      throw Error("Connection to MongoDB failed");
    }

    console.timeEnd("mongodb-connect");
  }
}

module.exports = MongoBackend;