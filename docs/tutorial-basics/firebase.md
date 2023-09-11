---
sidebar_position: 3
---

# Firebase

## Setup

Let's configure Firebase for cloud messaging

1. Navigate to https://firebase.google.com/ and sign to your existing account or sign up

2. Create a new project and give it a name (e.g. ChatAI)

![Firebase 1](/img/firebase/firebase-1.png)

2. Press on **continue**

![Firebase 2](/img/firebase/firebase-2.png)

3. Select a **google analytics account** and press on **Create project**

![Firebase 3](/img/firebase/firebase-3.png)

4. We have to add both **Android** and **iOS** Apps. Let's start by adding the Android App. Press On the **Android** icon.

![Firebase 4](/img/firebase/firebase-4.png)

5. Type the **package name** and press on **Register App**.

![Firebase 5](/img/firebase/firebase-5.png)

6. Press on **Download google-services.json** and save it somewhere on your pc. Then press next till the end.

![Firebase 6](/img/firebase/firebase-6.png)

7. Go back to the **project overview** and press on the **Apple** icon.

8. Type the apple **bundle Id** and press on **Register App**

![Firebase 7](/img/firebase/firebase-7.png)

9. Press on **Download GoogleService-Info.plist** and save it somewhere on your pc. Then press next till the end.

![Firebase 8](/img/firebase/firebase-8.png)

8. Go to your project files and add the previously downloaded **json** and **plist** files in steps **6** and **9** to the root project folder.s

![Firebase 9](/img/firebase/firebase-9.png)

## Realtime Database

9. Go back to firebase, then to the project overview and download this json files <a target="_blank" href="/json/chatai-rtdb.json" download="chatai-rtdb.json">Download</a>

10. Press on the **Realtime Database** and **import the JSON** file previously downloaded. This will import the necessary configuration of the app.

![Firebase 10](/img/firebase/firebase-10.png)

11. After successfully importing the configuration, let's explore the various configurable aspects of the application (In the next 3 images):

    1. ***Configuration***:

    - **Ads**: In this section, you should input your Ad IDs, which you will generate in the next step.
    - **Examples**: This is where you can customize the content of the application's homepage, including text in three different languages.
    - **Links**: Here, you need to provide the links to your privacy policy and terms & conditions, which will be displayed within the app.
    - **Product IDs**: This section is where you should enter the subscription IDs after creating them in Apple Store Connect and Google Play Console.
    - **Other**: In this category, you should input the Apple App ID and Google Package Name to enable the App rating feature. Additionally, you can set the daily free message limit, which is initially set to 5 messages.

    2. ***Users***: In this section, you can view all of the application's users and adjust their daily message limits. Please be cautious when removing a user from this list, as it may result in unintended behavior within the app.


This revision aims to make each section's purpose clearer and easier to understand.

![Firebase 11](/img/firebase/firebase-11.png)

![Firebase 12](/img/firebase/firebase-12.png)

![Firebase 13](/img/firebase/firebase-13.png)
