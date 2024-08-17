# FitHeal - Frontend

A React-based frontend for the FitHeal application, designed to help users manage their fitness routines, track their dietary habits, and monitor progress with ease. The platform provides tailored interfaces for both users and administrators (trainers, dietitians) to manage fitness plans, dietary recommendations, and user progress.

[Watch the Demo Video](https://youtu.be/X10poHhC6zo)

## Features

### User Role

- **Dashboard:** Personalized dashboard displaying workout stats, dietary insights, and progress tracking.
- **Workout Management:** Browse, schedule, and log workouts, view detailed exercise plans.
- **Diet Management:** Track daily meals, view nutritional breakdowns, and receive dietary recommendations.
- **Progress Monitoring:** Visualize fitness progress with charts, graphs, and personalized insights.
- **Profile Management:** Update personal details, set fitness goals, and manage account settings.

### Admin Role (Trainer/Dietitian)

- **Dashboard:** Overview of user activities, workout logs, and dietary adherence.
- **User Management:** Access and manage user profiles, monitor progress, and adjust fitness/diet plans.
- **Workout & Diet Plan Management:** Create, update, and assign workout routines and diet plans to users.
- **Analytics & Reports:** Generate and review user progress reports, adherence rates, and overall fitness trends.

## Technologies

- **React.js:** Core frontend library for building user interfaces.
- **Redux:** State management library for managing application state.
- **Bootstrap:** UI styling framework for responsive design and layout.

## API Integration

The frontend communicates with the backend via a RESTful API, handling operations for both User and Admin roles. This includes managing workout routines, dietary plans, user profiles, and progress data.

## Future Works

- **Mobile Optimization:** Enhance responsiveness and usability on mobile devices to ensure a seamless experience.
- **Multi-Language Support:** Add support for multiple languages to cater to a diverse user base.
- **Advanced Analytics:** Integrate advanced analytics for admins to monitor user engagement, progress, and fitness trends.

## Challenges

- **State Management:** Managing complex state logic across multiple user roles (User and Admin) was challenging but effectively handled with Redux.
- **API Integration:** Ensuring smooth and secure API communication, especially with sensitive user data, required careful planning and thorough testing.
- **Responsive Design:** Maintaining a consistent and user-friendly interface across different screen sizes was challenging but achieved through Bootstrap.

## Environment Variables

- `REACT_APP_API_URL`: The base URL of the backend API.

## Authors

- Aashraya Karki
