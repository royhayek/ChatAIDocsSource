---
sidebar_position: 6
---

# Languages & App Name

## App Name

To update the app name, follow these steps:

1. Go to the **app.json** file.

2. Replace both the **name** and **slug** fields with your preferred app name.

![Appname 1](/img/language/appname-1.png)

## Language

1. Return to the project files, locate the **index** file within the **constants** folder if you wish to make changes to the App's languages. Please uncomment line 11 and proceed to update both the language and the title as needed. To modify titles, navigate to the **lang** folder and add or edit the language keys in the three files: **ar**, **en**, and **fr**.

![Language 1](/img/language/language-1.png)

2. If you wish to add a new language, go to the **lang** folder, duplicate the **en.json** file, rename it to the language you're adding, and modify its contents as needed.

3. In addition to the previous step, uncomment line 13 to include the newly added language and import the language file you created earlier at the beginning of the file

![Language 2](/img/language/language-2.png)
