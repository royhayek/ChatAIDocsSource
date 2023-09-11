---
sidebar_position: 4
---

# Admob

Let's configure Admob for rewarded ads

1. Navigate to https://admob.google.com/ and press on **Sign in** or **Get Started**

![Admob 0](/img/admob/admob-0.png)

## Android

2. Let's start by setting up an Android App. Press on **Add Ad Unit**

![Admob 6](/img/admob/admob-6.png)

3. Select **Android** in the platform, precise if the app is already listed on app store or not then press on **Continue**

![Admob 3](/img/admob/admob-3.png)

4. Select the **Rewarded** Ad

![Admob 7](/img/admob/admob-7.png)

5. Give the ad a **name**, and in the reward settings, set the **reward amount** to 1, give the **reward item** a name then press on **Create ad unit**

![Admob 8](/img/admob/admob-8.png)

6. Now after successfully creating the ad, copy the **app ID** and the **ad unit ID** and note them somewhere (we are going to use them in the last 2 steps). Press on **Done**.

![Admob 9](/img/admob/admob-9.png)

## iOS

7. Now let's create an iOS App, give the app a name and then press on **Add App**

![Admob 10](/img/admob/admob-10.png)

8. Select the **Rewarded** Ad

![Admob 7](/img/admob/admob-7.png)

9. Give the ad a **name**, and in the reward settings, set the **reward amount** to 1, give the **reward item** a name then press on **Create ad unit**

![Admob 8](/img/admob/admob-8.png)

10. Now after successfully creating the ad, copy the **app ID** and the **ad unit ID** and note them somewhere (we are also going to use them in the last 2 steps). Press on **Done**.

![Admob 2](/img/admob/admob-2.png)

## App Settings

11. Now Let's go back to the project files, open **app.json** and replace both the **Android** and **iOS app ids** with the ones you copied earlier.

![Admob 11](/img/admob/admob-11.png)

## Firebase

12. Go back to the **Realtime Database** in **Firebase** and replace the Ad ids with the ones you copied earlier in step **6** and **10**

![Admob 12](/img/admob/admob-12.png)
