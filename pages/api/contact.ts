import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = req.body;
  if (req.method === "POST") {
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const url = "mongodb://localhost:27017/messagesDb";

    let client;
    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);

      return res
        .status(201)
        .json({ message: "Successfully stored message!", result });
    } catch (error) {
      return res.status(500).json({ message: "Could not store message" });
    }
  }
};

export default handler;
