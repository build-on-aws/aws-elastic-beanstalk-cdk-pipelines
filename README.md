## Deploy sample Node.js application to AWS Elastic Beanstalk using AWS CDK and CDK Pipelines

Sample code repo to create AWS Elastic Beanstalk application using AWS CDK and using CDK Pipelines to set up a CI/CD pipeline. It forms the base of the following tutorial(s):
* [Build Infrastructure and CI/CD pipeline using AWS CDK and AWS Elastic Beanstalk](https://buildon.aws/tutorials/deploy-webapp-eb-cdk)


This source code :
- creates a simple non-containerized Node.js web application, and 
- then uses AWS CDK to :
    - package the web application source code
    - create the deployment infrastructure (using AWS Elastic Beanstalk resources), and 
    - create the CI/CD pipeline (using AWS CDK Pipelines).

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
