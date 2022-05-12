# PushSkill

## Description

This app was created as the Front-End portion of the final project phase on the Northcoders bootcamp.

**.push(skill)** was created as a platform to allow anyone who wants to self learn a new skill to pair up with someone who can encourage them and hold them accountable to goals they have set themselves. The thinking being that if you have no one to ask you how your learning is going it is easier to let it slip and not complete tasks. Users can also gain achievements as a way of gamifying the learning experience.

The site allows a user to sign up or log in. Once they have logged in users will see a list of people who have been selected as they share traits with the user. From there the user can select one of these people to become your learning buddy. They can then chat to them in real time. The User can also view their profile, award achievements to their partner and see any achievements they have earned.

The chat function was facilitated using socket.io. The site was created as a PWA using React and the authentication was achieved using JWT. The styling was written with JSS and API requests were handled with axios.

a hosted version of the app can be found at: [pushskill](https://pushskill.netlify.app)

Team members:

- Adam Sackfield - github: [adampaulsackfield](https://github.com/adampaulsackfield)
- Dane Whitfield - github: [danewhitfield](https://github.com/danewhitfield)
- Owen Corrigan - github: [ojcorrigan](https://github.com/ojcorrigan)

---

### Dependencies

- React
- React router dom
- React Toastify
- Socket io client
- Styled components
- Axios

---

### Step by Step

1.  Fork the repo on git hub.

2.  Once you have the URL for your forked repo run navigate your terminal to the folder you wish to clone it into. Once there run the command

        git clone

3.  After your repo is cloned you will need to install the dependencies listed above using the following command:

        npm i

4.  When they have finished installing you can start the App using:

        npm start

5.  This should start the app in your web browswer. From here you can create an account and log in to see the other features of the site.

---

### Minimum Versions

| Dependency        | Version |
| ----------------- | ------- |
| React             | v18     |
| React router dom  | v6      |
| React toastify    | v9      |
| Socket io client  | v4      |
| Styled components | v5      |
| Axios             | v0.27   |

---

### Available Scripts

`npm start` - starts the app

### Key Features

- Encrypted passwords using Bcrypt
- Data persistence using MongoDB
- Matching system based on user traits
- Form validation
- Error messages and error notifications
- User notifications
- User pairing
- Live chat functionality
- Persistent chat for offline messaging
