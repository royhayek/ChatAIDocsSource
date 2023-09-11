---
sidebar_position: 5
---

# In-App Subscription

## Android

If you did not upload a version of your App which includes the billing permission, you might see the following error:

Your app doesn't have any in-app products yet
To add in-app products, you need to add the BILLING permission to your APK

![InApp Subscriptions 1](/img/subscriptions/subscriptions-1.png)

In this scenario, upload a new version of your app to either the internal or alpha channel. This step is sufficient to initiate the first subscription. Please refer to the last step of the tutorial for instructions on how to deploy.

If one of your app versions include the Billing permission, the screen will look like the following:

1. Click on **Create subscription**

![InApp Subscriptions 2](/img/subscriptions/subscriptions-2.png)

2. Fill in Product ID, Name and Description

   There are 4 important information you need to fill in in order to create a subscription:

   - **Product ID**: a unique identifier that you cannot change after you've create the subscription. The id is used to show the subscription in your App. We will enter this this id in the firebase configuration.
   - **Name**: The name of your subscription. The name is displayed when the user view the purchase dialog from Google. You can still change the name after you've created the subscription.
   - **Description**: Describe your subscription with the features it includes.

Name your subscriptions similarly to the examples provided: chatai_pro_weekly, chatai_pro_monthly and chatai_pro_yearly.

![InApp Subscriptions 3](/img/subscriptions/subscriptions-3.png)

3. Subscription Price

   Google has a field for the subscription default price. The default price is a little bit tricky because it‘s the price without taxes!
   If you click on Set price, a dialog opens where you can type in your default price. You also see a country list below it.

![InApp Subscriptions 4](/img/subscriptions/subscriptions-4.png)

**What does “price without taxes“ mean?**

Let's say we set 0.99€ to our 1 month subscription as the default price. Germany has 19% taxes, this would mean that on top of 0.99€, Google adds the taxes which are calculated 0,19€ and results in a price of 1.19€ of your subscription in Germany.

The taxes in Spain are currently 21% which means it would add 0.21€ to your default price of 0.99€. Google still supports you a bit and sets the end price to 1.19€ to your 1 month subscription in Spain to avoid having many different numbers in each state.

The calculation is different if the country has a different currency. In Sweden is the default price set to 9.60 SEK which is calculated by Google using the current exchange rate. Google now adds the taxes of Sweden on top of the default price (25% taxes = 2.40 SEK) and results in a price of 12 SEK. Google tries to round the numbers to the country specific prices.

You can still change the price of your subscription in any country in the world. For example, you could have a different price in Germany and Spain, even if the currency is the same.

:::danger Caution:

If you change the price while your users have already purchased the subscription, your users must confirm the price change change. If they don't, the subscription will not automatically renew anymore and would end after the period.
:::

4. Save and Activate your Subscriptions

After you're satisfied the the name, description and prices then you can save the subscription and is by default inactive.

![InApp Subscriptions 5](/img/subscriptions/subscriptions-5.png)

You can now activate your subscription.

:::info Attention:

Once you have activated a subscription, it cannot be deactivated.

:::

You're now all set and your subscriptions should be active and ready for sale!

![InApp Subscriptions 6](/img/subscriptions/subscriptions-6.png)

5. Return to the Firebase Realtime Database and update the Android product IDs with the ones you've just created

![InApp Subscriptions 7](/img/subscriptions/subscriptions-7.png)

## iOS

1. For iOS, refer to this article for detailed guidance: https://qonversion.io/blog/configure-iap-app-store-connect/

2. After creating the product ids return to the Firebase Realtime Database and update the iOS products IDS with the ones you've just created

![InApp Subscriptions 8](/img/subscriptions/subscriptions-8.png)