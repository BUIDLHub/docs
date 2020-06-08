---
title: 'Let's Add Automations with Chatbots! (8 mins)'
---

Push data to other sites, using Maker DAI. You'll learn you can either subscribe to data on-chain and send it to discord or you can trigger an on-chain call and manually send the response over.

<iframe width="567" height="319" src="https://www.youtube.com/embed/nnTDgx3nZG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Michael Coon demonstrates the App Builder with Maker DAI.

# The Steps

1. Login to the Eventflow app.

2. Select "Connect an App".

3. Click "Create App'

Apps are abstractions of what smart contracts offer. You define the inputs and outputs of the smart contract. For those uninformed how to interpret the ABI, we make it really easy to get started to play around with these contracts.

The caveat is that creating apps requires "insider knowledge" or at least being pretty familiar with how the contracts of the dapp work. So the app should be given meaningful descriptions so other people can use it.

4. Give the new app a name: "Maker DAI"

5. Give it the description "DAI Stablecoin Platform"

6. Add a web URL (optional): "https://makerdao.com/"

7. You can give it some icon as a picture. Download and use [this](https://sfo2.digitaloceanspaces.com/engamb/wp-content/uploads/2019/10/09141745/NEW-dai-logo-e1570610882413.png).

8. Click "Save".

9. You are now routed back to the App Overview Page

10. If you click "Show Example" in the top right, you can see what we're building.

As we go through the steps on the left, we fill in critical information that becomes selection input fields for yourself and potentially thousands of others.

10. Click to "Add a Connector"

11. In Step 1, Select Data Source, select "Ethereum Smart Contract" as the connector type.

12. In Step 2, Setup Paramters, select "Mainnet" for Ethereum Network and paste in this address: "0x6b175474e89094c44da98b954eedeac495271d0f" (link). You could alternatively use your own and either upload from Raw JSON or Upload Contract Build Files

13. Then click "Resolve from Etherscan".

14. Then click "Save and Continue".

15. Next we're going to add Alerts. Click "Add Alerts" in the App Builder overview page.
    Alerts are things being emitted on-chain, so transactions, function calls, and log events are prime examples.

16. In Step 1, to select the alert trigger, select "Specific Event"
17. In Step 2, to set the required parameters, our event of interest is an "Approval"
18. In Step 3, you can click "Skip", as we don't need to apply any filters
19. In Step 4, we're going to add some details so that this can be meaningful and reusable for ourselves and others throughout the application.

Make the name: "New Approval"

Make the description: "Triggers when an approval is detected in a transaction."

19. In Step 5, click "Add Outputs". A modal should appear. For this example, you can select all the events that appear under Log Event Attributes / Approval. This includes Approval.src, Approval.guy, and Approval.wad. When selected, these will move into the "Current Output Mappings" table.

20. Hit "Save & Continue".

At this point you have a connector, tells BUIDLHUb where it lives on the network, and alert, tells BUIDLHUb when it's going to emit data on-chain.

There's also a chance to add queryable functions, but for this particular case, that's not needed—because we're dealing with an event listener that will send data to us, not calling out to the chain to get updates on the current state—and we have everything we need to start testing.

21. Navigate to the Flow Designer by scrolling to the left sidebar.

22. On the Flows overview page, click "Create Flow".

23. Now that we're starting a new flow, we can select the data source in step 1. Select Maker DAI, and select the New Approval source trigger for this step. This was based on our Alert that we'd defined.

24. Click "Save & Continue"

25. In Step 2, to select an "action source", select "HTTP Webhook".

26. Select "Send Data" as the specific action to perform in this step.

27. Click "Save & Continue"

28. Now you need to know a destination URL. In Discord, navigate to your Server Settings. Click the name of your chat and click the link in the dropdown

29. Then click "Webhooks" in the sidebar. An "Edit Webhook" modal should appear. Select the channel you want it to appear. Copy the Webhook URL that appears and click save.

30. Back in our flows, set the "Destination URL" to this copy and pasted Webhook link.

31. Click "Save & Continue"

32. In Step 3, for assembling output JSON, you are deciding what information will be sent to the specified endpoint. Remove the other two fields, but keep Approval_wad in Current Output Mappings. Then rename Approval_wad to "content". This will now become a content field.

33. You could go ahead and turn on the field to experiment with the responses you've gotten and test the connection!

34. Return to App Builder and select the Maker DAI app we've started.

35. In the overview, click to add a new query function.

36. In Step 1, select the action to be "Call Function".

37. In Step 2, set the totalSupply as the function to call.

38. In Step 3, you can set the name and details.

Set name to "Get Total Supply"

Set the description to "Get total supply of DAI"

39. You can skip the input parameters in step 4. Hit save & continue.

40. Return to flow designer. For this, you can create a new flow.

41. For this, we're going to use an HTTP webhook as the trigger source data. And Inbound JSON Post as the source trigger for this step.
    We're going to use our previous flow to trigger this flow. Which means you can use flows to trigger other triggers.

Wait, but that's illegal?
No, keep reading.

42. You can skip Connection Details in step 2

43. In Step 3, when enering the JSON Payload Schema, you can simply pass in a placeholder:

```
{
    "field": 1
}
```

44. In Step 4, when Confirming the Output Mappings, your schema should be derived from Step 3. Go ahead and click "Confirm".

When you post to this webhook, you can call to a smart contract.

45. Create a New Step

46. In the second step, in the first step to select the action source select Maker Dai. Then select the "Get Total Supply", from our query functions, as the action to perform in this step.

Click "Save & Continue"

47. Create a new step. Select HTTP Webhook as the action to perform, and select send "Send Data" as the specific action to perform.

48. In step 2, copy and paste your webhook link in the destination URL.

49. In Step 3, click "add outputs" and select the "contractCallResult" as the output field. Then rename it to content in the Current Output Mappings table input field.

50. At this point, the flow is done, and you can run the flow!

If you have Postman or Insomnia, you can make a call to that URL and watch the flow act up.

Any questions, suggestions, or want to make a new friend? **Please** [**let us know**](support@buidlhub.com)!

---

Use **BUIDLHub** for FREE to dramatically reduce the time on blockchain-based event integrations.

Please join our community here:

[**Youtube**](https://www.youtube.com/channel/UCBudqf1FNGwtOrPL8f99lCA/featured) | [**Twitter**](https://twittter.com/buidlhub) | [**Medium**](https://medium.com/buidlhub​) | [**LinkedIn**](https://www.linkedin.com/company/buidlhub/​) | [**Telegram**](https://t.me/buidlhub​) | [**Discord** ](https://discord.gg/fQtpeT2​)
​
