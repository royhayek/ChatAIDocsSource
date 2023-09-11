---
sidebar_position: 2
---

# API Key

In this step, we are going to create an **OpenAI API Key**.

## Creating the key

1. Navigate to https://platform.openai.com/account/api-keys

- Login with your existing account or sign up.

![Api Key 1](/img/api-key-1.png)

- Create a secret key, and note it somewhere

![Api Key 2](/img/api-key-2.png)

:::danger Free Quota

As a free trial API user, you will benefit from an initial credit of $5 that expires after three months.

Upgrading to the pay-as-you-go plan will increase your usage quota to $120/month which is required when deploying the app and going live.

:::

- Set up a paid account for production

![Api Key 4](/img/api-key-4.png)

- You can monitor your usage under the usage tab

![Api Key 4](/img/api-key-5.png)

## Setting the key

2. Go to the project files, open the **.env** file and paste your **API Key**

![Api Key 3](/img/api-key-3.png)

3. Save and move to the next step

:::tip Changing the key

The app should be rebuilt and restarted whenever any change is made to the key within the env file

:::
