**WEEKLY UPDATE** of Aarushi Gahlawat (1024160008)

**25/8/26:**
**Task Done**
- Designed the Data Flow Diagrams (DFDs) for the MeterIQ system at Level 0, Level 1, and Level 2.
- Level 0 represents the overall MeterIQ system and its interaction with external entities.
- Level 1 breaks the system into major processes such as data preprocessing, anomaly detection, load forecasting, and decision support.
- Level 2 further decomposes the major processes into more detailed sub-processes and shows how data moves between them.
**Learning**
- Learned how DFDs represent the movement and transformation of data within a software system.
- Understood the difference between Level 0, Level 1, and Level 2 DFDs and how each level provides increasing detail.
- Learned how to identify external entities, processes, data stores, and data flows while designing a system.
Improved my understanding of the overall architecture and interaction between the different components of MeterIQ.
**Challenges Faced**
- Deciding the appropriate level of detail to include at each DFD level without making the diagrams too complex.
- Maintaining consistency between Level 0, Level 1, and Level 2 while decomposing the same system into smaller processes.
- Clearly representing the data flow between preprocessing, anomaly detection, forecasting, and decision-support components.
**29/8/26:**
**Task Done**
- Explored different smart-meter datasets relevant to the MeterIQ project and examined their structure, features, and suitability for anomaly detection and load forecasting.
- Studied the available meter readings and identified important attributes such as meter ID, timestamp, and electricity consumption.
**Learning**
- Learned how to explore and understand a real-world dataset before directly applying machine learning techniques.
- Understood the importance of checking data quality, especially missing values, timestamps, duplicates, and inconsistent records in time-series smart-meter data.
**Challenges Faced**
- Handling the large volume of time-series meter readings and understanding the structure of the raw data.
- Identifying which columns and readings were actually relevant to the project's objectives.
**7/9/26:**
**Task Done**
- Created a preprocessing validation function to verify that the processed smart-meter dataset is ready for further analysis.
- Checked for the presence of the essential columns: meter_id, timestamp, and consumption.
- Added validation for missing/NaN values in these important columns.
- Included a structure for checking whether the dataset is correctly ordered by meter ID and timestamp.
- The function collects validation errors in an errors list and returns both the validation status and the detected errors. 
validation
**Learning**
- Learned the importance of data validation after preprocessing, especially before using the data for ML models.
- Understood how missing columns or values can affect subsequent analysis and lead to incorrect results.
- Learned how to create a reusable Python validation function using conditional statements, lists, loops, and Pandas functions.
- Understood how returning both a Boolean status and error messages makes debugging and data-quality checking easier.
**Challenges Faced**
- Deciding which columns were essential for validation and should be checked before proceeding.
- Handling multiple possible validation errors in a structured manner instead of stopping execution immediately.
- Implementing the sorting check efficiently, especially for a potentially large smart-meter dataset, where checking the complete dataset could be computationally expensive.
