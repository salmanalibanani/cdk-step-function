import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class StepFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    const stackProps: StackProps = {
      description: "This is my step function stack.",
    };

    super(scope, id, stackProps);
  }
}
