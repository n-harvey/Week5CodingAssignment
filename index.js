// The Game class takes a constructor of name

class Game{
    constructor(name){
        this.name = name
    }
}

// The Menu Class the main code for the menu app
// Uses a constructor of gameLibrary for storing objects from the Game class
//

class Menu{
    constructor(){
        this.gameLibrary = []
    }

    //Begins the Menu, asks the user what they would like to do

    start(){
        let selection = this.showMainMenuOptions()
        while(selection != 0){
            switch (selection){
                case '1':
                    this.addGame()
                    break
                case '2':
                    this.removeGame()
                    break
                case '3':
                    this.viewGames()
                    break
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert('Exiting')
    }

    //The menu to show the user

    showMainMenuOptions(){
        return prompt(`
        Welcome to Game Library
        ----------------------
        1) Add New Game
        2) Delete Game
        3) View Games
        0) Exit
        `)

    }

    //Function to get the list of games that have been added to the library and return them as a string
    getGameList(){
        let gameList = ''
        for(let i = 0; i < this.gameLibrary.length; i++){
            gameList += `${i}) ${this.gameLibrary[i].name} \n`
        }
        return gameList
    }

    //Function to add games to the gameLibrary
    addGame(){
        let game = prompt(`Enter name of game:`)
        this.gameLibrary.push(new Game(game))
    }

    //Function to remove games from the gameLibrary
    removeGame(){
        let index = prompt(`Enter index of game to remove: \n ${this.getGameList()}`)
        if (index > -1 && index < this.gameLibrary.length){
            this.gameLibrary.splice(index,1)
        }
    }

    //Function to view games in the gameLibrary
    viewGames(){
        alert(this.getGameList())
    }
}

//Intialize a new menu and run the start function
let menu = new Menu
menu.start()