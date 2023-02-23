# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
## Ticket 1: 
- As a facility,  I want to be able to save my own custom ids for each Agent assigned to me.
###### Acceptance Criteria: 
- Given that I have the role of a facility, when I go to the list of agents and click on an individual agent; the system should allow me enter a custom id for that agent
###### Time/Effort Estimates: 
- 2hours / 5/10
###### Implementation Details: 
- Create a new table "facility_agent_term" with these columns: id, agent_id, facility_id , custom_id and created_at. id is the primary key with auto increment.
- On the individual agent page on the front-end, add input field to edit the custom id.
- Get the id of facility from the logged in session and the id of the agent from the agent page
- Check the database to make sure a record of the agent id and the facility id does not exist. If it exists, throw an error notifying the user on the front-end. If it doesn't exist, save the record to the database and display a success message to the user on the front-end

## Ticket 2: 
- As a facility,  I want to be able to see, edit and delete custom ids for each Agent assigned to me.
###### Acceptance Criteria: 
- Given that I have the role of a facility, when I go to the list of agents and click on an individual agent; the system should allow me see existing custom id I have added for the agent and provide me options to edit or delete the id.
###### Time/Effort Estimates: 
- 1hour / 4/10
###### Implementation Details: 
- Run a query that checks the facility_agent_term table for the facility id 
- On the individual agent page on the front-end, display the custom id of the agent .
- Get the id of facility from the logged in session and the id of the agent from the agent page
- Check the database to make sure a record of the agent id and the facility id does not exist. If it exists, throw an error notifying the user on the front-end. If it doesn't exist, save the record to the database and display a success message to the user on the front-end

## Ticket 3: 
- As a facility,  I want to be able to generate reports for each agent with the custom id I have assigned to the agent.
###### Acceptance Criteria: 
- Given that I have the role of a facility, when I go to the report generation page; the system should provide an input field to enter an id and should include a submit button that matches the entered id with the custom id of the agent and generates a report for that agent.
###### Time/Effort Estimates: 
- 1hour / 4/10
###### Implementation Details: 
- Create a new table "facility_agent_term" with these columns: id, agent_id, facility_id and created_at. id is the primary key with auto increment.
- On the individual agent page on the front-end, add input field to edit the custom id.
- Get the id of facility from the logged in session and the id of the agent from the agent page
- Check the database to make sure a record of the agent id and the facility id does not exist. If it exists, throw an error notifying the user on the front-end. If it doesn't exist, save the record to the database and display a success message to the user on the front-end