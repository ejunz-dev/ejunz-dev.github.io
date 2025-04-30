# Startup

## Starting Ejunz

The following startup parameters are supported:

- `--port=2333` Specify the startup port  
- `--debug` Enable development mode  
- `--watch` Enable hot reload (experimental)  

Use the command `yarn debug --port=2333 --watch` to start Ejunz, and run `yarn build:ui:dev` in the background. This enables real-time transpilation of frontend source code, significantly reducing build time during frequent modifications.  
Once started, you can access the Ejunz instance on port 8000, and any frontend changes will take effect immediately.  