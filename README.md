<table>
  <tr>
    <td valign="middle">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" width="80" />
    </td>
    <td valign="middle">
      <h1>PokeMemo</h1>
    </td>
  </tr>
</table>

> **Gotta Remember 'Em All!** 🧠
> *A React-based memory challenge where you must catch unique Pokemon without clicking the same one twice.*

[![Live Demo](https://img.shields.io/badge/Play_Now-FFCB05?style=for-the-badge&logo=pokemon&logoColor=2d7dd2)](https://karnVen.github.io/MemroyCard/)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![PokeAPI](https://img.shields.io/badge/PokeAPI-EF5350?style=flat-square&logo=pokemon&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

---

## 🎮 How to Play

The rules are simple, but the game is tricky:

1.  **🖱️ Click:** Pick a Pokemon card to earn **+1 Score**.
2.  **🔀 Shuffle:** The grid shuffles instantly after every click.
3.  **🧠 Memory:** Don't click the same Pokemon twice!
4.  **🏆 Win/Loss:** If you click a duplicate, your score resets to 0. Try to beat your **Best Score**!

---

## ✨ Features

* **🔥 Live API Integration:** Fetches real-time Pokemon data (Images, Names, IDs) from the [PokeAPI](https://pokeapi.co/).
* **🎲 Dynamic Shuffling:** Uses the Fisher-Yates algorithm logic to randomize card positions after every interaction, keeping the game unpredictable.
* **💾 Persistent Scoring:** Tracks your current streak and saves your **High Score** during the session.
* **📱 Responsive UI:** Built with CSS Grid and Flexbox to look great on both desktop and mobile.
* **✨ Glassmorphism:** Modern UI with 3D tilt effects and hover animations.

---

## 🧠 What I Learned

Building this project sharpened my core React skills:

* **`useEffect` Mastery:** Handling side effects (API calls) and preventing infinite render loops using dependency arrays.
* **State Management:** Using `useState` to track complex game logic (Score, High Score, Clicked Cards Array, Game Over status).
* **Asynchronous JavaScript:** Fetching data cleanly using `fetch`, `async/await`, and `Promise.all` to load multiple Pokemon cards simultaneously.
* **Conditional Rendering:** seamless switching between "Loading..." states and the active game grid.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Functional Components, Hooks)
* **Build Tool:** Vite (Blazing fast HMR)
* **Styling:** CSS3 (Variables, Animations, Glassmorphism)
* **Data Source:** PokeAPI (REST)

---

## 🚀 Getting Started

Want to run this locally?

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/karnVen/MemroyCard.git](https://github.com/karnVen/MemroyCard.git)
    ```
2.  **Enter Directory**
    ```bash
    cd MemroyCard
    ```
3.  **Install Dependencies**
    ```bash
    npm install
    ```
4.  **Start the Game**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```bash
src/
├── assets/          # Static images & global styles
├── components/
│   └── Card.jsx     # Reusable Card component (Props: image, name, handler)
├── App.jsx          # Main Game Logic (State, API fetch, Shuffle logic)
├── App.css          # Glassmorphism & Grid styling
└── main.jsx         # React Entry point
```
---
## 👤 Author
**karnVen**

* 🐙 GitHub: [@karnVen](https://www.google.com/search?q=https://github.com/karnVen)
* 💼 LinkedIn: [karnVen](https://www.linkedin.com/in/karnven)


<p align="center">
<i>Made with 🧠 and React Hooks 🎣</i>
</p>
