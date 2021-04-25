User Guide for CSE6242 Team 15's Final Project

Description:
This is a project containing multiple analyses of NBA data to highlight some interesting trends observed in the unique 2020 NBA "Bubble" season. Our approach to this project is broken down into 3 sets of visualizations:

    - Shot Maps : A set of shot maps comparing shooting positions and accuracy of players and teams as a whole, before and inside the Bubble.
    - Prediction Model Comparison : Python notebooks and an interactive visualization to compare predictions of Machine Learning models on past games, 2019-20 non-bubble games and Bubble games.
    - Choropleth: *explanation*

Installation:
All our code is attached to the official canvas submission under the folder CODE. The code can also be cloned from Github using the following command:
        git clone https://github.com/dsam7/cse6242-NBA.git

Execution:

1. Shot Maps: *Insert demo instructions*

2. Prediction Model Comparison:
    i. Python notebooks for pre-processing and models:
        a. Navigate to the "Prediction Models" folder and run `jupyter notebook`.
        b. In preprocessing.ipynb, run the cells sequentially to see the datasets used and calculated advanced stats.
        c. NOTE: Only run the prepare_game_data() function and further cells if the file `Prediction Models\generated_data\games_formatted.csv` does not exist.
        d. In models_predictions.ipynb, run the cells sequentially to create the models and write the predictions to the output file.
    ii. d3 visualizations:
        a. Navigate to the "Prediction Models" folder and run `python -m http.server 8080`.
        b. Navigate to "Web Pages" folder and open `predictions.html`.
        c. On the page, use the dropdown menu to select a particular game. The UI should update to display the selected game, the actual result of the game, and the winners predicted by the ML models.
        d. In the `analysis.html` web page, view interesting tabulated results and inferences drawn from the predictions of the ML models.

3. Choropleth: *Insert demo instructions*
