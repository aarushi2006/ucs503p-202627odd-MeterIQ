# WEEKLY UPDATE of Aarushi Gahlawat (1024160008)

## 25/08/2026 — Data Flow Diagram Development

Made the Data Flow Diagrams (Level 0, Level 1, and Level 2) for the MeterIQ
project.

### Work Completed
- Created the Level 0 DFD representing the overall MeterIQ system and its
  interaction with external entities.
- Created the Level 1 DFD decomposing the system into major processes such
  as data preprocessing, anomaly detection, load forecasting, and decision
  support.
- Created the Level 2 DFD providing further detail about the flow of data
  within the major processes.
- Maintained consistency between the different DFD levels.

### Learning
Understood how DFDs represent the movement and transformation of data within
a system and how different DFD levels provide increasing levels of detail.

### Challenges Faced
- Maintaining consistency between the three DFD levels.
- Deciding the appropriate amount of detail to include.
- Representing the complete system workflow without making the diagrams
  unnecessarily complex.


## 29/08/2026 — Dataset Exploration & Data Quality Analysis

Explored the available smart-meter datasets and started understanding their
structure and preprocessing requirements.

### Work Completed
- Examined the dataset structure and important attributes such as meter ID,
  timestamp, and electricity consumption.
- Investigated data-quality aspects such as missing values, duplicates, and
  inconsistent records.
- Studied the time-series characteristics of the consumption data.
- Started preparing the raw data for further analysis and ML processing.
- Identified important data fields required for subsequent analysis.

### Learning
Understood the importance of exploring and validating real-world datasets
before applying machine learning techniques.

### Challenges Faced
- Understanding the large volume of time-series data.
- Identifying relevant features while ensuring that useful consumption
  patterns were not removed.
- Handling data-quality issues without unnecessarily removing useful
  information.


## 09/09/2026 — EDA & Data Preprocessing

### Work Completed
- Performed Exploratory Data Analysis (EDA) on the smart-meter datasets.
- Analysed the data structure and electricity consumption patterns.
- Investigated missing values, duplicate records, and other data-quality
  issues.
- Worked on data preprocessing and prepared the data for further ML
  processing.
- Studied important temporal and consumption-related patterns.
- Analysed the requirements of the anomaly/risk detection and short-term
  load forecasting tasks.
- Studied suitable ML approaches for both analytical tasks.

### Learning
Developed a better understanding of smart-meter time-series data,
preprocessing techniques, and the requirements of the two different ML
tasks.

### Challenges Faced
- Understanding the structure and characteristics of the smart-meter data.
- Handling data-quality issues while preserving useful consumption patterns.
- Identifying which features are relevant to anomaly detection and
  forecasting.
- Understanding which ML approaches are suitable for the two tasks.

### Current Status
EDA and initial data preprocessing have been completed, and the ML
approaches required for anomaly detection and load forecasting have been
studied.

### Next Steps
- Complete feature engineering.
- Complete the remaining system diagrams.
- Implement the ML models for anomaly/risk detection and load forecasting.
- Evaluate the models and analyse their results.
- Integrate the ML outputs with the MeterIQ dashboard.


## 14/09/2026 — ER Diagram & Activity Diagram

### Work Completed
- Completed the Entity Relationship (ER) Diagram for the MeterIQ system.
- Identified the major entities required for the system and represented
  their relationships.
- Designed the Activity Diagram to represent the step-by-step workflow of
  the MeterIQ system.
- Ensured that the ER Diagram was consistent with the data requirements
  identified during the earlier analysis and preprocessing stages.
- Ensured that the Activity Diagram was consistent with the overall system
  workflow and previously created DFDs.
- Added and organised the completed diagrams for use in the project
  documentation.

### Learning
Understood how an ER Diagram represents the structure and relationships of
data within a system and how an Activity Diagram represents the sequence of
activities and system workflow.

Also learned how different Software Engineering diagrams need to remain
consistent with each other while describing different aspects of the same
system.

### Challenges Faced
- Identifying the appropriate entities and relationships for the ER Diagram.
- Representing the system workflow clearly in the Activity Diagram.
- Maintaining consistency between the ER Diagram, Activity Diagram, and
  previously created DFDs.
- Deciding the appropriate level of detail without making the diagrams
  unnecessarily complex.

### Current Status
The ER Diagram and Activity Diagram have been completed and added to the
project documentation.


## 14/09/2026 — Feature Engineering & Prepared Dataset

### Work Completed
- Completed feature engineering on the prepared smart-meter data.
- Created useful temporal and consumption-related features for the
  subsequent ML stage.
- Prepared and validated the dataset for machine learning development.
- Reviewed the engineered features for their suitability for anomaly/risk
  detection and short-term load forecasting.
- Updated the project documentation according to the latest development
  progress.

### Learning
Developed a better understanding of feature engineering for smart-meter
time-series data and how engineered features can support different machine
learning tasks.

### Challenges Faced
- Selecting useful features while preserving important consumption
  patterns.
- Handling time-dependent features appropriately.
- Ensuring that the prepared dataset is suitable for the next stage of model
  development.
- Maintaining consistency between the prepared data and the requirements of
  the two ML tasks.

### Current Status
The DFDs, ER Diagram, Activity Diagram, EDA, data preprocessing, and feature
engineering work have been completed. The prepared dataset is ready for the
machine learning stage.

### Next Steps
- Implement anomaly/risk detection models.
- Implement the short-term load forecasting model.
- Evaluate the ML models using appropriate performance metrics.
- Analyse the model outputs.
- Integrate the ML results with the MeterIQ dashboard.
- Perform complete system testing.
