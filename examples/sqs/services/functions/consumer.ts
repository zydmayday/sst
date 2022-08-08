import { SQSHandler } from "aws-lambda";

export const handler: SQSHandler = async (event) => {
  const message = event.Records[0].body;
  console.log(`Received message: ${message}`);
}