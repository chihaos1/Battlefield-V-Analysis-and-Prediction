# Battlefield-V-Analysis-and-Prediction

Final Website Link: https://battlefieldv-stats-prediction.herokuapp.com/

**Project Overview:**\
The project aimed to analyze the statistics of Battlefield V players and to predict and understand a player's ability through Score Per Minute. 

**Data Collection:**\
The data were scrapped from [Battlefield Tracker](https://battlefieldtracker.com/), which encompassed ~18k BFV players that were registered on the website (account names have been removed for privacy reason). Scrapy was used for this task and the outputs were stored in a CSV file.  
  
**Data Analysis and Model Building:**\
The notebook used for this step could be found [here](https://nbviewer.jupyter.org/github/chihaos1/Battlefield-V-Analysis-and-Prediction/blob/main/Battlefield%20V%20Prediction.ipynb). The analysis used Score Per Minute as the target, which was a variable that represented the amount of points a player could earn every minute. Compared to the other variables, Score Per Minute was the most unbiased indicator because it has little room for manipulation. Achieving a high Score Per Minute requires players to contribute to the team consistently through a match, hence it was chosen as the basis for determining how "good" a player is. A linear regression model was built for predicting the target. 

**Model Deployment:**\
The model was deployed through a web application using Flask. The Home page contained the visualizations of player statistics that were graphed with Chart.js. The Predict page contained input fields for users to enter statistics and generate a prediction for Score Per Minute. 

**Graph Interpretation:**\
Guide on how to interpret the graphs on the Home page.

![Graph](https://user-images.githubusercontent.com/73306413/120029804-94731f80-bfc4-11eb-9b88-7fd563573619.png)

Using Total Hours Played as an example, the doughnut graph breaks down the ranges of time that all players have spent on Battlefield V. Hovering the cursor on a specific segment will display the number of players that belong to that segment. In this case, 8,232 players have spent between 100 to 500 hours on the game. 


**Example Prediction:**\
Using my own profile as an example. I have 507.79 Score Per Minute and the rest are features that will be used to predict that score. 

![Capture](https://user-images.githubusercontent.com/73306413/120030669-c2a52f00-bfc5-11eb-8e7a-3aac165f192d.PNG)

1. ![Capture 1](https://user-images.githubusercontent.com/73306413/120031181-77d7e700-bfc6-11eb-9db5-dbc9aee25c0a.PNG)\
This is the interface which allows users to enter the inputs. 
2. ![Capture 2](https://user-images.githubusercontent.com/73306413/120031575-fb91d380-bfc6-11eb-90b8-8a44693a0052.PNG)\
After the inputs have been entered, users can click on Predict to generate a prediction.
3. ![Capture 3](https://user-images.githubusercontent.com/73306413/120031795-44498c80-bfc7-11eb-93e0-8d491a16bce5.PNG)\
The prediction outcome will be displayed below the Predict button. The prediction could be slightly off from the actual score but should be still within a reasonable range. 

The prediction function will work as long as users know their statistics and input them correctly. 

