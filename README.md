# Number Guessing Game

A simple number guessing game built with HTML, CSS, JavaScript, and Node.js.

## Description

This is a web-based number guessing game where the user tries to guess a randomly generated number between 1 and 100. The server provides feedback on whether the guess is too high, too low, or correct. If the guess is correct, the game resets with a new random number.

## Features

- Guess a number between 1 and 100
- Get feedback on whether the guess is too high, too low, or correct
- The game resets with a new random number upon a correct guess

## Technologies Used

- HTML
- CSS
- JavaScript (Front-end)
- Node.js (Back-end)
- Express (Node.js framework)

## Setup and Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/guess-number-game.git
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Run the server:
    ```sh
    node server.js
    ```

4. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## File Structure
application/
├── node_modules/
├── public/
│ ├── index.html
│ └── styles.css
├── package.json
└── server.js


- `index.html`: The main HTML file for the front-end.
- `styles.css`: The CSS file for styling the front-end.
- `server.js`: The Node.js server file.
- `package.json`: The npm package file containing the project metadata and dependencies.

## Usage

1. Open the application in your web browser.
2. Enter a number between 1 and 100 in the input field.
3. Click the "Guess" button.
4. The result will be displayed below the input field, indicating whether your guess was too high, too low, or correct.
5. If the guess is correct, the game will reset with a new random number.

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add your feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Open a pull request.

## Acknowledgments

- Inspired by traditional number guessing games.
- Built with love and JavaScript.

---

Feel free to customize this README to better fit your project's needs. If you have any questions or need further assistance, please don't hesitate to ask.