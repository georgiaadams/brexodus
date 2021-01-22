## Brexodus

### Description

"Brexit" - it took 4.5 years but unfortunately here we are. The aim of the game is to collect as many "goods" as possible, to give you enough points to get into Europe. The player needs to avoid our different EU politicians or we will be kicked back to 'Old Blighty' by border control.

### MVP (DOM - CANVAS)

The player can move from left to right on the screen with the keyboard. They have to collect goods to gain points whilst avoiding our politicians. Each good is worth 10 points and the game is won when you reach 100 points. The game is over when the player collides 3 times with a politician.

### Data Structure

1. index.html
2. styles.css
3. main.js
4. game.js
5. player.js
6. enemy.js
7. goods.js

##### 1. Index.html

##### 2. styles.css

##### 3. main.js

- buildDom()
- createSplashScreen/removeSplashScreen
- create gameScreen/removeGameScreen
- create gameOverScreen/removeGameOverScreen
- create winScreen/remove winScreen
- startGame/endGame

##### 4. Game class

```javascript
class Game {}
```

##### 5. Player class

```js
class Player {}
```

##### 6. Enemy class

```js
class Enemy {}
```

#### 7. Goods class 
```js
class Goods {}
```

### States and States Transitions

- splashScreen

  - Start the game - shows game rules and game title
  - When _Start_ button is clicked, it goes to game screen

- gameScreen

  - game is running whilst lives (border control) < 3
  - goes to gameOverScreen if lives are === 3
  - goes to winScreen if points are === 100

- gameOverScreen

  - shows a losing message, image and a _Try Again_ button
  - goes back to splashScreen when _Try Again_ is clicked

- winScreen

  - shows a winning message, image, number of lives left and _Restart_ button
  - goes back to splashScreen when _Restart_ button is clicked

### Tasks

- Initialise git and gitHub
- Create and connect src files: main.js, game.js, player.js, enemy.js
- BuildDOM in the main.js
- Outline 4 screen states in the main.js & set game state
- Create the screen transitions in the main.js
- Create Game class & add methods
- Create player class in player.js
- Move player in game.js
- Create enemy class in enemy.js
- Move enemy in game.js
- Create goods class - goods.js
- Move goods in game.js
- Create game loop in game.js
- Handle collisions between player & enemy in game.js
- Handle collision between player & goods
- Increment points in _scoreboard_ if "goods" collected
- Deduct "lives" from _border control_
- Add images, audio, CSS etc.

### Backlog

- Time limit (give the player 45 seconds to get 100points)
- Points deduction -- add new enemy (Boris Johnson) - player points are deducted by 10 if you hit him
- Player shooting ability - able to take out politicians
