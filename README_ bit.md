# React Coding Challenge

> Welcome to the React Coding Challenge!

## Overview

To complete this challenge, you will need to write a simple [React](https://facebook.github.io/react/) based web app, and provide us the source files to be built.

The purpose of this challenge is to assess your **skills and approach to composing a simple web app** given a set of screens. We will also assess the **generated HTML, CSS, and JS** output.

## The Challenge

Using the provided screens as a reference, you'll need to build a set of React components to render the app. You'll also need to request a JSON feed, filter that data, and use the relevant fields.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and tested code** in the submission.

## Details

Click [here](https://github.com/BitcotDev/fresher-machin-test/tree/main/screens/) to look Screens and Convert into **REACT JS** then Implement.

You will need to build the following 5 screens with React:
- "Contacts View" screen
- "Add Contact" screen
- "Edit Contact" screen
- "View Contact Details" screen
- "Search Contact" screen


Please create components for each part of the screens (eg. Contacts View, Add/Edit Contact, Contact Detail, etc).

The pages should also be usable on mobile and tablet devices.

You can assume that you do not have to support legacy browsers without features such as `fetch` or `flexbox`.

### "Contacts View" Screen

For this page you will need to fetch this JSON [sample.json](https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json) feed

Refer to the [Contacts View](https://github.com/abdulbitcot/fresher-machin-test/blob/main/screens/Screen1.png) Screen

- Save the Contact list data into the state
- Display Contact list
- On click delete icon it should be remove from contact list and local state.

**Note:** local state means React state.

### "Add Contact" Screen

Refer to the [Add Contact](https://github.com/abdulbitcot/fresher-machin-test/blob/main/screens/Screen2.png) Screen

- You have to create a modal for **Add Contact**.
- Add validation of all the fields.
- After submitting the **Contact** form then the Contact should be add in the Contact list locally in the state and should be display in Contact list.

**Note:** Do not use API to add contact. just work on local state of React JS.

### "Edit Contact" Screen

Refer to the [Edit Contact](https://github.com/abdulbitcot/fresher-machin-test/blob/main/screens/Screen3.png) Screen

- You have to create a modal for **Edit Contact**.
- When I click on Edit icon from the contact list then  **Edit** Modal should be open and all the field should be auto fill of contact detail which I selected on Edit icon.
- Add validation of all the fields.
- When user Submitted **Edit Contact** form then it will be reflected in the contact list.
- Also maintain the validation in edit form.

### "View Contact Details" Screen

Refer to the [View Contact Details](https://github.com/abdulbitcot/fresher-machin-test/blob/main/screens/Screen4.png) Screen

- You have to create a modal for **View Contact Details**.
- When I click on Eye icon (View icon) from the contact list then  **View Contact Details** Modal should be open and all the data should be shown.

### "Search Contact" Screen

Refer to the [Search Contact](https://github.com/abdulbitcot/fresher-machin-test/blob/main/screens/Screen5.png) Screen

- When I write any this thing in the search field it should be search by first name, last name and phone number.


## Other Notes

- It is important you follow good programing practices, clean code, good logic with proper comments, naming conventions.
- Write as many functions you require, you must focus on code reusability and avoid repetition of code.

## Share Your Test

- Create a public git repository on Github
- Repositry name should be your name-bitcot and push code.
- Do not include dependency folder like node_module.
- Once finished kindly submit your Github account repository URL.
- Do not include any Zip file in Email
- Read full instruction before submitting the task. 
