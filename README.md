
# hotel-eden


Chantal Goethals 

- [Chantal Goethals](https://github.com/GOECHA) | [linkedIn](https://www.linkedin.com/in/chantalgoethalsgoecha/)


![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
<img alt="chai" src="https://user-images.githubusercontent.com/102189342/188754783-a7e4d05f-65c6-4d17-a3ff-235682441d54.png" width="30px">
<img alt="mocha-2" src="https://user-images.githubusercontent.com/102189342/188754796-29493e26-2e3b-4757-a428-d9e690357ed0.svg" width="30px">

A project built with JavaScript and Test Driven Development. This project holds beautiful UI and allows a user to login with credentials and make hotel reservataions. The app stores information about past & future reservations and keeps a tab on much the user has spent with a "points earned" system.



![2022-08-10 08 52 38](https://user-images.githubusercontent.com/102189342/183936690-7515399f-8fbe-42a7-a6ef-977a0e6be88f.gif)


- Any room bookings made (past or upcoming)
- The total amoun spent on rooms 

![2022-08-10 08 54 53](https://user-images.githubusercontent.com/102189342/183936726-9b1b9963-7af9-4d87-bed8-6770cf17b9af.gif)

- When first arriving at the site, a user should be able to log in with a username and password.


![2022-08-10 08 55 44](https://user-images.githubusercontent.com/102189342/183936761-2cecc3ec-ad7d-423c-aeeb-1e3447eeff87.gif)

- I should be able to select a date for which I’d like to book a room for myself

- Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date

- I should be able to filter the list of available rooms by their roomType property

- I should be able to select a room for booking






## Technologies
- the fetch API to retrieve and add data
- Mocha and Chai for testing your code
- JavaScript
- CSS
- GitHub





## Setup and Install

## Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something (just add a line in the README) and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

