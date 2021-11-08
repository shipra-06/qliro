# qliro

## Prerequisite : As Cypress is the javascript based framework and installed packages using npm, so as a prerequisite you must have node installed.

Cypress currently supports the iphone-xr view which has the same dimensions as ihpone-11 so I have written tests for that, I hope it should be fine. below are the commands

To run the test in mobile view run below command

npm run cypress:open -- --env envType="mobile"

To run the test in web view run below command

npm run cypress:open

To run in browser stack for different browsers options run below command

browserstack-cypress run --sync
