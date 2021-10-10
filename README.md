# News Application
> This is a small React Native application which displays news fetched from the News API sorted by different categories.


## General Information
- I undertook this project in order to familiarize myself with the basics of React Native
- In particular, I wanted to get to know some of the prominent libraries in relation to working with React Native e.g., react-navigation
- I also wanted to test Expo CLI for running the project server while developing and checking the app in a simulator


## Technologies Used
- React Native 0.65
- Expo CLI 4.12.0


## Features
- Displaying news for different categories from different news outlets 
- Navigating through the different categories
- Providing information about the respective articles e.g., image, brief description, date and a like to the article itself


## Screenshots
![Example screenshot](https://i.ibb.co/fH5vkJp/react-native-app-screenshot.jpg)


## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Get a free API key at https://newsapi.org/
2. Clone the repo
3. Install NPM packages
```
npm install
```
in the terminal in the project folder
4. Enter your API key in /config/config.js
```
export const API_KEY = `Enter your API key here`;
```
5. Run the app typing
```
expo start
```
in your terminal and choose where you want to run the app e.g., mobile phone or web browser



## Learnings
- using React-Native-Elements to add icons to the navigation bar
- using tabBarIcon to style the icons and highlight the active screen
- using NativeBase library to render single articles from the News API with the help of the FlatList component instead of using the JS map array method
- using NativeBase to add a spinner as a loading screen
- using the moment.js library to display the date of when the article was published



## Project Status
The project is basically done. Over time I may revisit it to experiment with adding certain features to it. 


## To do
- Dark Mode
- Filtering out some news outlets


## Acknowledgements
- This project was based on [this tutorial](https://www.freecodecamp.org/news/build-an-android-news-app-with-react-native-and-native-base/).
- I took the general structure and ideas from this tutorial. I added a few features and changed the styling a bit to my liking.


