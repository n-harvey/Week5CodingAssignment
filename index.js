class Game{
    constructor(name){
        this.name = name
    }
}

class Menu{
    constructor(){
        this.gameLibrary = []
    }

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

    getGameList(){
        let gameList = ''
        for(let i = 0; i < this.gameLibrary.length; i++){
            gameList += `${i}) ${this.gameLibrary[i].name} \n`
        }
        return gameList
    }

    addGame(){
        let game = prompt(`Enter name of game:`)
        this.gameLibrary.push(new Game(game))
    }

    removeGame(){
        let index = prompt(`Enter index of game to remove: \n ${this.getGameList()}`)
        if (index > -1 && index < this.gameLibrary.length){
            this.gameLibrary.splice(index,1)
        }
    }

    viewGames(){
        alert(this.getGameList())
    }
}

let menu = new Menu
menu.start()