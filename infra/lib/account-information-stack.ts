import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class AccountInformationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    const stackProps: StackProps = {
      description: "This is my statement generator stack.",
    };

    super(scope, id, stackProps);
  }
}
