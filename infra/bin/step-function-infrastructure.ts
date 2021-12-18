#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StepFunctionStack } from "../lib/step-function-stack";

const app = new cdk.App();
new StepFunctionStack(app, "StepFnctionStack");
