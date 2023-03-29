import { CfnOutput, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EBApplnStack } from './eb-appln-stack';

/**
 * Deployable unit of web service app
 */
export class CdkEBStage extends Stage {
      
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new EBApplnStack(this, 'WebService');
    
  }
}