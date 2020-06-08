---
title: 'Let's Get Custom Wallet Notifications! (5 mins)'
---

Get a formatted email with the information you want whenever your balance goes beneath a certain threshold.

<iframe width="567" height="319" src="https://www.youtube.com/embed/zh37XlSw1Mo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# The Steps

1. Login to the EventFlow app.
2. Select "Design a Flow"

![welcome](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/introduction/welcome.png)

3. Click "Create Flow"

![create-flow](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/getting-started/create-flow.png)

4. Welcome to a fresh flow! Let's name this flow (this is optional, but helps you remember what this flow did later). Click the "New Flow" name next to "Editing Flow".

Set the name to "Custom Wallet Notification Demo":

![custom-wallet-flow-start](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/getting-started/custom-wallet/custom-wallet-flow-start.png)

5. In Step 1, select the data source as a "Fixed Interval Timer", which periodically checks for something, and select the "Execute this Flow" as the source trigger, which fires an empty JSON event at a fixed interval.

![custom-wallet-flow-start](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/getting-started/custom-wallet/custom-wallet-execute-this-flow.png)

6. Hit Save & Continue.

7. Select an Interval Period of 30 minutes in the "Set Required Parameters":

![custom-wallet-flow-start](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/getting-started/custom-wallet/custom-wallet-required-parameters.png)

8. Hit Save & Continue, and Step 1 should be complete.

9. Click the " + " button below to add a new step.

10. In Step 2, select the "Ethereum Wallet" as the data source, and the "Get Balance" as the action to perform in the step.

![custom-wallet-flow-start](https://github.com/BUIDLHub/docs/gatsby-gitbook-starter/src/assets/images/getting-started/custom-wallet/custom-wallet-get-eth-balance.png)

11. In Step 2, part 2, you can set the required parameters. Select your Ethereum Network of choice. For the purpose of this tutorial, I will go with "Rinkeby".

12. Copy and paste your own Metamask address for the Ethereum address prompt. (You can use this: 0x00aF41c6EE0B153E973004529db12e35A65748f6 to save time)

13. Hit Save & Continue, and Step 2 should be complete.

14. Click to create a new step.

15. In Step 3, start by selecting the "Filter" as a data source, and select "Filter Input" as the action to perform, which filters data by specific input event fields.

16. In Step 3, part 2, click to "Add Filter." An on screen modal should appear to Filter the Source Field. Click on the "Filterable Fields" to expand the selection options. In this example, only the "balance" from the previous step is callable.

17. After this, we can select the Grouping Logic, in this case we want "ALL" aspects of our filter to be true. Then we can modify the Current Filters. A row is presented that shows a field name, in this case "balance" across from some value to check for, in this case we set it to "0.5 eth".

18. Click Save & Continue, and Step 3 should be complete. By this point, every 30 minutes, a wallet address balance is returned and then examined if its balance of Ethereum is less than 0.5 ETH. In the case that this is not true (you have more than 0.5 ETH), you're going to get an email.

19. In Step 4, in "Select Action Source", select "Email "as the data source, and "Send Email to Yourself" as the action to perform in the step.

20. In the "Set Required Parameters" you can copy the following. Subject: "Balance is Low!" And for the message body, "Add some ETH to the wallet man!"

21. Then Start the Flow in the top navbar, make sure "auto-refresh" so the dashboard updates, and Wallah!

22. Check your email to make sure that it worked!

Any questions, suggestions, or want to make a new friend? **Please** [**let us know**](support@buidlhub.com)!

---

Use **BUIDLHub** for FREE to dramatically reduce the time on blockchain-based event integrations.

Please join our community here:

[**Youtube**](https://www.youtube.com/channel/UCBudqf1FNGwtOrPL8f99lCA/featured) | [**Twitter**](https://twittter.com/buidlhub) | [**Medium**](https://medium.com/buidlhub​) | [**LinkedIn**](https://www.linkedin.com/company/buidlhub/​) | [**Telegram**](https://t.me/buidlhub​) | [**Discord** ](https://discord.gg/fQtpeT2​)
​
