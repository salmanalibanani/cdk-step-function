#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StatementGeneratorStack } from "../lib/statement-generator-stack";

const app = new cdk.App();
new StatementGeneratorStack(app, "StatementGeneratorStack");
