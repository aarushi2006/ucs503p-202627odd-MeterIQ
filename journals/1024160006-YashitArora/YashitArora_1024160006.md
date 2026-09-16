# WEEKLY UPDATE of Yashit Arora (1024160006)

## 25/08/2026 — Use Case Diagram

Made the Use Case Diagram for the MeterIQ project and identified the major
system functionalities and user interactions.

### Work Completed
- Identified the major functionalities of the MeterIQ system.
- Designed the Use Case Diagram representing the interaction between users
  and the system.
- Defined the major user interactions with the MeterIQ platform.
- Studied how anomaly/risk detection, load forecasting, and decision support
  fit into the overall system workflow.

### Learning
Understood how Use Case Diagrams represent system functionality from the
user's perspective and how system requirements can be represented as
interactions between actors and the system.

### Challenges Faced
- Identifying the appropriate actors and system functionalities.
- Representing the complete project workflow without making the diagram
  unnecessarily complex.
- Maintaining consistency between the proposed functionality and the
  overall system design.


## 30/08/2026 — Dataset Exploration

Explored the available smart-meter datasets and studied their structure,
attributes, timestamps, consumption values, and suitability for the project's
ML tasks.

### Work Completed
- Examined the available smart-meter datasets.
- Studied important attributes such as meter ID, timestamp, and consumption.
- Analysed the time-series nature of the smart-meter data.
- Studied how the dataset could support anomaly/risk detection and
  short-term load forecasting.
- Discussed the overall project workflow and development requirements.

### Learning
Developed a better understanding of smart-meter datasets and how the same
time-series data can support different analytical tasks.

### Challenges Faced
- Understanding the time-series structure of the data.
- Determining which data attributes are useful for the two ML tasks.
- Understanding how the dataset should be prepared before model development.


## 09/09/2026 — Dashboard Development

### Work Completed
- Developed the MeterIQ frontend dashboard using React and Vite.
- Designed the dashboard layout with sidebar navigation and reusable UI
  components.
- Implemented meter search, meter information, statistics, consumption
  charts, and anomaly/risk visualisation.
- Created separate Dashboard, Meter Analysis, and supporting interfaces.
- Added responsive styling for different screen sizes.
- Used mock data to test the frontend before connecting the ML and backend
  components.
- Configured the frontend for deployment through GitHub Pages.
- Successfully added the frontend to the shared MeterIQ GitHub repository.

### Challenges Faced
- Designing the dashboard before the ML and backend components were ready,
  requiring the use of mock data.
- Deciding how to present consumption, anomaly/risk, and meter information
  clearly without making the interface complex.
- Structuring the React application into reusable components.
- Resolving GitHub synchronization and authentication issues while adding
  the frontend.
- Fixing npm installation and project-directory issues during local setup.

### Current Status
The Phase 1 frontend dashboard has been successfully developed, tested
locally, and added to the shared MeterIQ repository.

### Next Steps
- Connect the processed smart-meter data with the analytical pipeline.
- Implement anomaly/risk detection and short-term load forecasting.
- Connect the ML outputs with the dashboard.
- Perform system integration and testing.


## 14/09/2026 — Project Documentation & Gantt Chart

### Work Completed
- Created and updated the project Gantt Chart according to the current
  development progress.
- Documented the completed project activities and assigned responsibilities
  between the team members.
- Started preparing the MeterIQ prototype report using LaTeX and Overleaf.
- Added the system diagrams and frontend prototype screenshots to the report.
- Structured the report according to the Software Engineering prototype
  requirements.
- Worked on organising the report pages, headings, diagrams, captions, and
  screenshots for a professional presentation.
- Updated the shared project documentation according to the latest
  development status.

### Learning
Learned how to organise software engineering project documentation,
maintain a development schedule using a Gantt Chart, and structure a
technical prototype report using LaTeX.

### Challenges Faced
- Maintaining consistent formatting and alignment of diagrams in the
  LaTeX report.
- Managing different diagram formats and ensuring they fit properly within
  the report pages.
- Keeping the documentation consistent with the actual project progress.
- Coordinating documentation work with the development activities being
  completed by both team members.

### Current Status
The Gantt Chart and major parts of the prototype documentation have been
prepared. The frontend prototype is also completed and available in the
shared repository.

### Next Steps
- Complete the anomaly/risk detection ML module.
- Complete the short-term load forecasting ML module.
- Integrate the ML outputs with the frontend dashboard.
- Perform testing and evaluate the integrated system.
