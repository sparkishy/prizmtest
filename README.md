#  Prizm Media Test Application
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) 

## :arrow_forward: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Either connect your device or run AVD Manager from Android Studio and choose a suitable device from the list (or create new android virtual device)
    * then run `react-native run-android`

## :arrow_forward: About the app

- This app validates the email address.
- Currently, this app sends the post request to my personal server, https://developerspark.ca/php/prizmsql.php. In this repo, duplicated php file is in the root folder.
- Current mysql table in the server has three columns => id, email, and the type (whether its valid type or not).
- White border means there is no value, blue means it is valid and red means it is invalid.
- This app uses animatable library for all animation effects.


## :arrow_forward: Table ScreenShot

![alt text](http://developerspark.ca/images/table.png)