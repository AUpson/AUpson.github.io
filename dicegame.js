/*
 Filename:    dicegame.js
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Student:      Austin Upson
 Date:        January 2026
 Purpose:     Assignment #1 - Dice Game Implementation
 */

// Global variables
let overallScore = 0;
let roundNumber = 0;
let diceValues = [1, 2, 3, 4, 5, 6];

// Get references to DOM elements
let allDice = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4"),
    document.getElementById("image5"),
    document.getElementById("image6"),
];

let hScore = document.getElementById("hScore");
let pRolled = document.getElementById("pRolled");
let pRollScore = document.getElementById("pRollScore");
let btnRestart = document.getElementById("btnRestart");
let tblRolls = document.getElementById("tblRolls");
let roundListHeader = document.getElementById("roundListHeader");

// Add click listeners
for (let i = 0; i < 6; i++) {
    allDice[i].onclick = rollDice;
}
btnRestart.onclick = restartGame;

/**
 * Main function to roll all dice with animation
 * Animates dice rolling for 1 second (updating every 100ms)
 * then processes the final roll result
 */
function rollDice() {
    // Prevent clicking during roll animation
    setDiceState(false);

    let iterations = 0;
    const maxIterations = 10; // 1 second / 100ms = 10 iterations

    // Animate the dice rolling
    const rollInterval = setInterval(() => {
        // Generate random values during animation
        for (let i = 0; i < 6; i++) {
            let tempValue = Math.floor(Math.random() * 6) + 1;
            allDice[i].src = "dice" + tempValue + ".png";
        }

        iterations++;

        // After 1 second (10 iterations), stop and process final roll
        if (iterations >= maxIterations) {
            clearInterval(rollInterval);

            // Generate final roll values
            for (let i = 0; i < 6; i++) {
                diceValues[i] = Math.floor(Math.random() * 6) + 1;
                allDice[i].src = "dice" + diceValues[i] + ".png";
            }

            // Process the completed roll
            processRoll();
        }
    }, 100);
}

/**
 * Processes the completed roll by calculating score,
 * updating display, and checking win conditions
 */
function processRoll() {
    // Calculate score for this roll
    let rollScore = calculateScore(diceValues);
    roundNumber++;

    // Display results
    pRolled.textContent = "You rolled: " + diceValues.join(", ");
    pRollScore.textContent = "This roll scored: " + rollScore + " points";

    // Update overall score
    overallScore = overallScore + rollScore;
    hScore.textContent = "Overall Score: " + overallScore;

    // Add row to table (most recent first)
    let newRow = tblRolls.insertRow(0);
    newRow.insertCell(0).textContent = "Round " + roundNumber;
    newRow.insertCell(1).textContent = diceValues.join(", ");
    newRow.insertCell(2).textContent = rollScore;

    // Check win conditions
    checkWinCondition();

    // Re-enable dice if game is still ongoing
    if (overallScore < 5000) {
        setDiceState(true);
    }
}

/**
 * Calculates the score for a given set of dice values
 * @param {Array} 
 * @returns {number}
 */
function calculateScore(dice) {
    let score = 0;

    // Check for six 1's (automatic win)
    let countOnes = 0;
    for (let i = 0; i < 6; i++) {
        if (dice[i] === 1) {
            countOnes++;
        }
    }

    if (countOnes === 6) {
        return 5000; // Automatic win amount
    }

    // Count occurrences of each number (1-6)
    let counts = [0, 0, 0, 0, 0, 0, 0]; 

    for (let i = 0; i < 6; i++) {
        let value = dice[i];
        counts[value]++;
    }

    // Check for three of a kind
    for (let num = 1; num <= 6; num++) {
        if (counts[num] >= 3) {
            if (num === 1) {
                score = score + 1000;
            }
            if (num !== 1) {
                score = score + num * 100;
            }
            counts[num] = counts[num] - 3; // Remove the three counted
        }
    }

    // Count remaining 1's (each worth 100)
    score = score + counts[1] * 100;

    // Count remaining 5's (each worth 50)
    score = score + counts[5] * 50;

    return score;
}

/**
 * Checks if any win/lose conditions have been met
 */
function checkWinCondition() {
    let countOnes = 0;
    for (let i = 0; i < 6; i++) {
        if (diceValues[i] === 1) {
            countOnes++;
        }
    }

    if (countOnes === 6) {
        endGame(" SIX 1's! AUTOMATIC WIN! ");
    }
    if (overallScore === 5000) {
        endGame(" YOU WIN! You reached exactly 5000 points! ");
    }
    if (overallScore > 5000) {
        endGame(
            "😞 YOU LOSE! You went over 5000 points. You had " +
                overallScore +
                " points.",
        );
    }
}

/**
 * Ends the game and displays the final message
 * @param {string} message - The win/lose message to display
 */
function endGame(message) {
    pRollScore.textContent = message;
    setDiceState(false);
    btnRestart.classList.remove("hidden");
    btnRestart.classList.add("displayed");

    // Add round count to header as required
    roundListHeader.textContent =
        "List of Rounds: (Game completed in " + roundNumber + " rounds)";
}

/**
 * Enables or disables dice clicking
 * @param {boolean} enabled - Whether dice should be clickable
 */
function setDiceState(enabled) {
    for (let i = 0; i < 6; i++) {
        allDice[i].style.opacity = enabled ? "1" : "0.5";
        allDice[i].style.cursor = enabled ? "pointer" : "not-allowed";
        // Disable/enable onclick to prevent clicks during animation
        allDice[i].onclick = enabled ? rollDice : null;
    }
}

/**
 * Restarts the game to initial state
 */
function restartGame() {
    // Reset variables
    overallScore = 0;
    roundNumber = 0;
    diceValues = [1, 2, 3, 4, 5, 6];

    // Reset display
    hScore.textContent = "Overall Score: 0";
    pRolled.textContent = "";
    pRollScore.textContent = "";
    tblRolls.innerHTML = "";
    roundListHeader.textContent = "List of Rounds:";

    // Hide restart button
    btnRestart.classList.remove("displayed");
    btnRestart.classList.add("hidden");

    // Re-enable dice and reset images
    setDiceState(true);
    for (let i = 0; i < 6; i++) {
        allDice[i].src = "dice" + (i + 1) + ".png";
    }
}
