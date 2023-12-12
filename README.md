## Quiz-App
A simple dynamic quiz application using HTML, CSS, and JavaScript (vanilla JS or any preferred framework/library like React). The application should load questions from a local JSON file, present them one at a time to the user, and finally display the user's score at the end.


**<a href="https://quiz-app-arunima14.vercel.app/">Live Demo</a>**


**Functional Requirements:**

1. **Quiz Data Structure**: The quiz questions are be stored in a JSON file with the format containing the question text, a set of multiple-choice answers, and the correct answer.

```json
[
  {
    "question": "What is the capital of France?",
    "options": ["New York", "London", "Paris", "Dublin"],
    "answer": "Paris"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
    "answer": "Leonardo Da Vinci"
  }
  // more questions...
]
```

2. **Dynamic Question Rendering**: Loading and displaying one question at a time and cycle through the questions as the user answers them.

3. **Answer Selection**: Allows the user to select an answer and submit it to move to the next question.

4. **Score Calculation**: Keeps track of the correct answers and calculates the score once the quiz is complete.

5. **Results Display**: At the end of the quiz, displays the user's score with a personalized message.


**Technical Requirements:**

- Used Vanilla JavaScript to implement the quiz logic.
- Stored and loaded the quiz data from a JSON file.
- The application is fully responsive and works across modern desktop and mobile browsers.
- Implemented basic animations or transitions for question transitions and result display.
- Randomized the order of questions each time the quiz is started.
- Implemented a timer per question and a total time taken to complete the quiz.
- Contains a progress bar indicating how many questions have been answered.
