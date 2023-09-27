# TypeScript Webresource Template for Dynamics 365 CE

A simple template for Dynamics 365 CE webresource development using typescript. Based on Scott Durow's cource and put into convenient for me structure.

### Plan of Action
1. Go to ```TSWebresourceTemplate > webpack.common.js``` and edit "output" section to your needs.
2. Go to ```spklSolution > spkl.json``` and edit accourding to your solution needs.
3. Create one terminal for TSWebresourceTemplate directory and one terminal for spklSolution.
4. In spklSolution terminal publish solution by navigating to spkl folder and launching .\deploy-webresources.bat.
5. In TSWebresourceTemplate authorise using ```npx dataverse-auth your-organization.crm.dynamics.com```. Launch dataverse-ify using ```npx dataverse-gen init``` and generate early-boundings.
