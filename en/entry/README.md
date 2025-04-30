# Introduction

## Starting Ejunz

The following startup parameters are supported:

- `--port=2333` Specify the startup port  
- `--debug` Enable development mode  
- `--watch` Enable hot reload (experimental)  

Step1. `yarn ejun addon add @ejun/ui-default`
Step2. `yarn debug --port=2333 --watch`
Step3. `yarn build:ui:dev`

Use `yarn debug --port=2333 --watch` to start Ejunz, and run `yarn build:ui:dev` in the background to perform real-time transpilation of the front-end source code. This can save compilation time when making repeated modifications. Once started, you can access the Ejunz instance on port 8000, and any changes to the front-end will take effect immediately. (Backend hot reload may have bugs, and some module modifications may still require a restart to take effect)  
Note: This feature only works when the `@ejunz/ui-default` plugin is enabled.


