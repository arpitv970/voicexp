# Feedback Dashboard

The Feedback Dashboard is a feature-rich web application designed for efficient management and analysis of user feedback. This application provides functionalities such as viewing, filtering, sorting, and interacting with feedback data, including audio playback for voice-based feedback.

## Purpose of the Project

The primary purpose of this project is to create an intuitive and interactive dashboard for managing feedback. This includes the ability to sort, filter, and play audio-based feedback directly from the interface. The project is built to handle structured feedback data stored locally, making it an excellent tool for lightweight and client-side applications.

---
## Features of the Project
- **Feedback Management:** View and manage feedback with detailed information such as name, contact number, email, and audio feedback.
- **Audio Playback:** Play audio feedback directly from the dashboard.
- **Interactive Table:** Sort, filter, and toggle rows dynamically using a modern data table.
- **Local Storage Integration:** Fetch and manage feedback data stored in the browser’s local storage.
- **Mobile-Responsive Design:** Fully responsive design that works seamlessly across devices.

## Tech Stack
- **Frontend Framework:** React.js with functional components.
- **UI Components:** Custom and reusable components like buttons, checkboxes, dropdowns, and input fields.
- **Data Table Library:** TanStack Table (React Table) for advanced table functionalities.
- **Icons:** Lucide React for dynamic icons like sort arrows and menu icons.
- **State Management:** Context API for managing state across components.
- **Styling:** Tailwind CSS for a sleek and modern design.

# Setup Project Locally

## Prerequisites
- `Node.js` => 18.0.0 (LTS version recommended)
- `npm` or `yarn` package manager

## Steps to Setup
1. Clone the Repository:
    ```
    git clone https://github.com/your-username/feedback-dashboard.git
    cd feedback-dashboard
    ```
2. Install Dependencies:
    - Install the required dependencies using npm or yarn.

    ```
    npm install
    # or
    yarn install
    ```


3. Run the Development Server:
    - Start the development server.
    ```
    npm run dev
    # or
    yarn dev

4.  Access the Application:
    - Open your browser and navigate to http://localhost:3000.

    Using the Application
	1.	Add Feedback Data:
	    •	Add feedback data directly to the local storage in JSON format using the browser’s developer tools. Example:
        ```
[
  {
    "id": "1",
    "data": {
      "name": "John Doe",
      "contactNo": "1234567890",
      "email": "johndoe@example.com",
      "referencedBy": "Jane Doe"
    },
    "audioBlob": "data:audio/wav;base64,...",
    "createdAt": "2025-01-01T00:00:00Z"
  }
]

        ```


        •	Key: feedbacks

    2.  View and Manage Feedback:
	    •	Open the dashboard to view, sort, and filter feedback entries.
	    •	Click “Play Audio” to listen to the audio feedback.
	3.	Filter Feedback:
	    •	Use the search bar to filter by email or other fields.
	4.	Sort Feedback:
	    •	Click on the column headers to sort data in ascending or descending order.

# Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page for open issues.
	1.	Fork the repository.
	2.	Create your feature branch: git checkout -b feature/YourFeatureName.
	3.	Commit your changes: git commit -m 'Add some feature'.
	4.	Push to the branch: git push origin feature/YourFeatureName.
	5.	Open a pull request.

License

This project is licensed under the MIT License.

Acknowledgements
	•	Thanks to the contributors of TanStack Table for creating such an incredible library.
	•	Inspired by best practices in React development and UI design.

Let me know if you’d like any adjustments!
