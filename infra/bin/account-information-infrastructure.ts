#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AccountInformationStack } from "../lib/account-information-stack";

const app = new cdk.App();
new AccountInformationStack(app, "AccountInformationStack");
