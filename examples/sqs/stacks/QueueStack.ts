
import { StackContext, Queue } from "@serverless-stack/resources";

export function QueueStack({ stack }: StackContext) {
  const queue = new Queue(stack, "Queue", {
      consumer: "functions/consumer.handler",
  });
}
