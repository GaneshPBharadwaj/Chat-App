# [Chat Application](https://chat0app1.netlify.app/)

A full-stack chat application built using **React**, **Firebase**, and **Zustand** for state management. The application supports real-time messaging, user authentication, image uploads, and more, with data stored in Firebase Firestore.

## Features

- **User Authentication**: User login and registration via Firebase Authentication.
- **Realtime Messaging**: Chat updates in real-time using Firebase Firestore.
- **Image Uploads**: Users can send and receive images in chat, stored using Firebase Storage.
- **User Blocking**: Users can block others, preventing further messaging or profile viewing.
- **Notifications**: Integrated `react-toastify` for displaying success, error, and warning messages.
- **State Management**: Handled global state efficiently using **Zustand**.

## Tech Stack

- **Frontend**: React, Zustand, CSS
- **Backend**: Firebase Authentication, Firestore, Firebase Storage
- **Notifications**: react-toastify

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/realtime-chat-app.git
   cd realtime-chat-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
- Create a Firebase project and enable Authentication, Firestore, and Storage.

4. Start the development server:
    ```
    npm run dev
    ```

## Usage
- Log in or register to access the chat.
- Search for users and initiate new conversations.
- Send real-time messages, including images, which are instantly synced across clients.
- Block unwanted users from contacting you.
- View notifications for successful actions and errors.

## Contributing
If you have any suggestions or improvements, please create a pull request or open an issue on the repository.

## License
This project is licensed under the MIT License
