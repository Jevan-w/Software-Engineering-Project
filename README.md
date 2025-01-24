# Software-Engineering-Project
Software Engineering Project For NCH (Tidied Room Cleaning App)
# README for Room Cleaning Reminder Web App

## 1. Introduction

### Project Title: Tidied

Tidied is a sleek and intuitive web app designed to help youngsters and teens maintain a clean and organized living space. By setting a weekly reminder, users can establish a consistent cleaning routine, ensuring their rooms are always tidy. The app takes inspiration from the iPhone alarm clock system, offering a familiar interface that integrates seamlessly into users' daily lives.

**Tech Stack:**

- **Frontend:** HTML, CSS, JavaScript
- **Notifications:** Web Notifications API
- **Design Tool:** Figma

## 2. Product Proposal

Tidied addresses a common issue: the lack of regular room-cleaning habits among youngsters and teens. By offering a visually appealing, easy-to-use app, Tidied encourages users to schedule cleaning reminders and stick to them. The app’s design and functionality are inspired by the iPhone alarm clock, ensuring familiarity and ease of use.

### Target Audience

- Youngsters and teens looking to build consistent habits.
- Users who want a simple, no-frills tool to remind them to clean their room.

### Key Features

- **Set Weekly Reminder:** Users can set an alarm every Sunday.
- **Snooze Alarm:** Option to snooze the alarm if needed.
- **Customizable Interface:** Inspired by iPhone design aesthetics, offering intuitive navigation.

## 3. Design Process

The design of Tidied was created using **Figma**, focusing on simplicity and functionality. Each feature was planned to align with user habits and expectations.

### Design Flow

1. **Homepage:**

   - A clean layout with a central "Set Timer" button.
   - A "Settings" icon in the top-left corner for future customization (e.g., changing backgrounds).

2. **Alarm Set State:**

   - Once the timer is set, the homepage updates to show "Alarm Set!" with an option to set another timer.

3. **Triggered Alarm Modal:**

   - A full-screen overlay displaying:
     - **Clock Icon:** Positioned in the top-right.
     - **Tidy O'Clock! Message:** Encouraging users to clean their room.
     - **Snooze Button:** Located at the bottom to delay the reminder.

[**Link to Figma Design**](https://www.figma.com)

### Visual Style

- **Font:** Inter, a clean and modern sans-serif font.
- **Colors:**
  - Gradient background: Soft pink and peach tones for a calming aesthetic.
  - Buttons: Blue for primary actions and yellow for secondary (snooze).

## 4. MVP Development Process

### Development Phases

1. **Phase 1:**

   - Created the basic HTML structure with a homepage and modal for the alarm.
   - Implemented the Web Notifications API for reminders.

2. **Phase 2:**

   - Styled the app using CSS, adding responsive design for mobile and desktop screens.

3. **Phase 3:**

   - Added JavaScript functionality:
     - Weekly alarm scheduling.
     - Triggering the alarm modal.
     - Removing the modal when snooze is clicked.

4. **Phase 4:**

   - Integrated features like notification permissions and debugging to ensure smooth functionality.

## 5. Project Planning

The project followed Agile principles, using a Kanban board in GitHub Projects for task management.

### Key Columns

- **To-Do:** Tasks like implementing alarm logic and modal design.
- **In Progress:** Active development tasks.
- **Completed:** Finished features like snooze functionality and responsive styling.

[**Link to GitHub Project Board**](https://github.com/Jevan-w/Software-Engineering-Project/projects)

## 6. Features

### Implemented Features

- Weekly alarm functionality.
- Full-screen alarm modal with snooze option.
- Responsive design for mobile and desktop users.
- Notifications via the Web Notifications API.

### Future Scope

- Allow users to customize backgrounds using the settings menu.
- Add support for multiple alarms.
- Include a progress tracker for completed cleaning tasks.

## 7. Technical Documentation

### Key Functionalities

1. **Alarm Scheduling:**
   - JavaScript calculates the next Sunday and triggers a reminder.
2. **Notifications:**
   - Uses the Web Notifications API to prompt users.
3. **Modal Management:**
   - JavaScript dynamically removes the alarm modal when snooze is clicked.

### Folder Structure

```
/css
   styles.css
/js
   app.js
index.html
README.md
```

## 8. Testing

### Functional Tests

1. Verified the alarm triggers at the correct time.
2. Confirmed the modal displays with all elements (clock, message, snooze button).
3. Ensured the snooze button removes the modal from the DOM.

### Compatibility Tests

- Tested on:
  - **Browsers:** Chrome, Firefox, Edge.
  - **Devices:** Mobile and desktop screens.

### Responsive Design

- Adjusted font sizes and layout for smaller screens to ensure usability on mobile devices.

## 9. Evaluation

### Strengths

- **Intuitive Interface:** Simple design inspired by iPhone aesthetics.
- **Core Functionality:** Reliable alarm and snooze features.
- **Responsive Design:** Works seamlessly across devices.

### Weaknesses

- **Limited Customization:** Currently, no option to change backgrounds or add multiple alarms.
- **No Data Persistence:** Alarms are not saved after a page refresh.

### Lessons Learned

- The importance of testing across browsers and devices.
- How to integrate user-friendly design with minimal functionality.
- Effective task management using GitHub Projects.

## 10. Submission Checklist

-

---

Thank you for reviewing my project. I welcome any feedback or suggestions for improvement.

