import React, { Component } from 'react';
import Intro from './components/Intro'
import Second from './components/Second'
import Story from './components/Story'
import Pancake from './components/Pancake'
import Death from './components/Death'
import Inventory from './components/Inventory'
import Bat from './components/Bat'
import Clothes from './components/Clothes'
import Leaving from './components/Leaving'
import Outside from './components/Outside'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      showSecond: false,
      userName: "",
      showFirst: false,
      enemies: [],
      ingredients: [],
      story: ["You Wake Up To Your Alarm Going Off"],
      showStory: false,
      showEntry: true,
      showMuffin: false,
      showPancake: false,
      showStarve: false,
      disableAlarm: false,
      getUp: false,
      showDecisionOne: false,
      showDeath: false,
      stoveOn: false,
      grabbedPan: false,
      grabbedBowl: false,
      showIngredients: false,
      showCooking: false,
      breakfastPour: true,
      breakfastDone: false,
      breakfastFlip: false,
      inventory: [],
      showInventory: false,
      equipment: [],
      showEquipment: false,
      companion: [],
      showCompanion: false,
      showBat: false,
      pancakeCount: 0,
      leaveCooking: false,
      showClothes: false,
      showNude: true,
      showShirt: true,
      showPants: true,
      showBoots: true,
      letsGo: false,
      showLeaving: false,
      weapon: "",
      showWeapon: false,
      enemyHit: false,
      enemyHealth: -20,
      playerHealth: 10,
      droppedItem: '',
      killedEnemy: false,
      player: [],
      disableCompanion: false,
      disablePlayerAttack: false,
      players: [],
      weaponDmg: 0,
      disablePickedUp: false,
    }
  }
  async componentDidMount() {
    let result = await fetch("https://react-game-api.herokuapp.com/enemies")
    let data = await result.json()
    this.setState({
      enemies: data.enemies
    })
    let playerResult = await fetch("https://react-game-api.herokuapp.com/players")
    let playerData = await playerResult.json()
    this.setState({
      players: playerData.players
    })
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.sendUser()
    }
  }
  setTimeOutAndState(number, string) {
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, string]
      });
    }, number)
  }
  addUser = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  firstButton = (event) => {
    if (this.state.disableAlarm === false) {
      let count = this.state.count + 1
      if (count < 10) {
        this.setState({
          count: this.state.count + 1,
          story: [...this.state.story, 'You Snoozed Your Alarm', '...'],
          disableAlarm: true
        })
        setTimeout(() => {
          this.setState({
            disableAlarm: false,
            story: [...this.state.story, 'The Alarm Goes Off Again']
          });
          if (count > 3) {
            this.setState({
              getUp: true,
            })
          }
        }, 500)
      }
      else if (count === 10) {
        this.setState({
          showFirst: false,
          getUp: false,
          story: [...this.state.story, '...', 'You Broke the alarm clock', '...', 'Do you Stay in Bed', 'OR', 'Start The Day'],
          showDecisionOne: true,
        })
      }
    }
  }
  cookBreakfast = (event) => {
    if (this.state.breakfastPour === true) {
      this.setState({
        leaveCooking: false,
        breakfastPour: false,
        story: [...this.state.story, 'You Pour The Batter Into The Pan']
      })
      this.setTimeOutAndState(1000, 'It Begins To Sizzle')
      setTimeout(() => {
        this.setState({
          story: [...this.state.story, 'Flip The Pancake'],
          breakfastFlip: true,
        });
      }, 2000)
      if (this.state.breakfastFlip === true) {
        this.setTimeOutAndState(3000, 'You Start To Smell Your Pancake Burning')
      }
      setTimeout(() => {
        if (this.state.breakfastFlip === true)
          this.setState({
            story: [...this.state.story, 'You Burnt Your Pancake!'],
            breakfastPour: true,
            breakfastFlip: false,
          });
      }, 4000)
    }
  }
  flipBreakfast = (event) => {
    if (this.state.breakfastFlip === true) {
      this.setState({
        breakfastFlip: false,
        story: [...this.state.story, 'You Flipped the Pancake']
      })
    }
    this.setTimeOutAndState(1000, 'It Is Almost Ready')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'The Pancake Is Ready!'],
        breakfastDone: true,
      });
    }, 2000)
    if (this.state.breakfastDone === true) {
      this.setTimeOutAndState(3000, 'You Start To Smell Your Pancake Burning')
      if (this.state.breakfastDone === true) {
        setTimeout(() => {
          this.setState({
            story: [...this.state.story, 'You Burnt Your Pancake!'],
            breakfastPour: true,
            breakfastDone: false,
          });
        }, 4000)
      }
    }
  }
  grabBreakfast = (event) => {
    if (this.state.breakfastDone === true) {
      this.setState({
        breakfastDone: false,
        breakfastPour: true,
        inventory: [...this.state.inventory, "Pancake"],
        story: [...this.state.story, 'You Got A Pancake!'],
        showInventory: true,
        pancakeCount: this.state.pancakeCount + 1
      })
    }
    if (this.state.pancakeCount >= 0) {
      this.setState({
        leaveCooking: true,
      })
    }
    if (this.state.pancakeCount === 2) {
      this.setState({
        showCooking: false,
      })
      this.setTimeOutAndState(1000, 'A Bat Flies Into Your Kitchen')
      setTimeout(() => {
        this.setState({
          story: [...this.state.story, 'What Do You Do?'],
          showBat: true,
        });
      }, 2000)
    }
  }
  addIngredient = (event) => {
    if (this.state.stoveOn === true && this.state.grabbedPan === true && this.state.grabbedBowl === true) {
      this.setState({
        ingredients: [...this.state.ingredients, 'added'],
        story: [...this.state.story, 'You Added Some Ingredients']
      })
      if (this.state.ingredients.length === 5) {
        this.setState({
          story: [...this.state.story, 'The Batter Is Made'],
          showCooking: true,
          showPancake: false,
        })
      }
    }
  }
  turnOnStove = (event) => {
    this.setState({
      stoveOn: true,
      story: [...this.state.story, 'You Turned The Stove On']
    })
  }
  grabPan = (event) => {
    this.setState({
      grabbedPan: true,
      story: [...this.state.story, 'You Grabbed The Pan']
    })
  }
  grabBowl = (event) => {
    this.setState({
      grabbedBowl: true,
      showIngredients: true,
      story: [...this.state.story, 'You Grabbed The Bowl']
    })
  }
  stayInBed = (event) => {
    this.setState({
      showDecisionOne: false,
      story: [...this.state.story, 'You Roll Back Over']
    });
    this.setTimeOutAndState(2000, 'You Drift Back To Sleep')
    this.setTimeOutAndState(3000, '...')
    this.setTimeOutAndState(5000, 'zzz')
    this.setTimeOutAndState(7000, 'zzZ')
    this.setTimeOutAndState(9000, 'zZZ')
    this.setTimeOutAndState(11000, 'ZZZ')
    this.setTimeOutAndState(12000, 'You Feel Something Next To You')
    this.setTimeOutAndState(14000, 'You Roll Over And Embrace It')
    this.setTimeOutAndState(16000, 'It Feels Like Something Completely Foreign')
    this.setTimeOutAndState(18000, 'You Open Your Eyes')
    this.setTimeOutAndState(19000, '!!!')
    this.setTimeOutAndState(20000, 'You See A Troll In You Arms')
    this.setTimeOutAndState(21000, 'YOU SCREAM!!!')
    this.setTimeOutAndState(22000, 'The Troll Wakes Up and Screams!')
    this.setTimeOutAndState(23000, 'AAARRGGHHHH!!!!')
    this.setTimeOutAndState(24000, 'In The Chaos The Troll Rolls Over')
    this.setTimeOutAndState(25000, 'He Rolls On Top Of You!')
    this.setTimeOutAndState(26000, 'Everything Goes Dark')
    this.setTimeOutAndState(27000, 'You Try To Breathe But You Cannot')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Die'],
        showDeath: true
      });
    }, 29000)
    this.setTimeOutAndState(31000, 'Maybe Get Out Of Bed You Lazy Butt')
  }
  wakeUp = (event) => {
    this.setState({
      getUp: false,
      showSecond: true,
      showFirst: false,
      showDecisionOne: false,
      story: [...this.state.story, 'You Get Out Of Bed']
    })
  }
  pancakeClick = (event) => {
    this.setState({
      showPancake: true,
      showSecond: false,
      story: [...this.state.story, 'Lets Get Cooking!']
    })
  }
  muffinClick = (event) => {
    this.setState({
      showSecond: false,
      inventory: [...this.state.inventory, "Muffin"],
      story: [...this.state.story, 'You Grab A Muffin From The Counter'],
      showInventory: true,
    })
    this.setTimeOutAndState(1000, 'Now Lets Get Dressed')
    this.setTimeOutAndState(2000, 'You Open Your Closet')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'What Do You Want To Wear?'],
        showClothes: true
      });
    }, 3000)
  }
  starveClick = (event) => {
    this.setState({
      showSecond: false,
      story: [...this.state.story, 'I Am Too Good For Food!']
    })
    this.setTimeOutAndState(1000, 'Well Lets Get Dressed Than')
    this.setTimeOutAndState(2000, 'You Open Your Closet')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'What Do You Want To Wear?'],
        showClothes: true
      });
    }, 3000)
  }
  sendUser = async (event) => {
    if (this.state.userName.length === 0) {
      alert("Please Enter Username")
    }
    if (this.state.userName.length > 0 && this.state.userName.length < 11) {
      let newPlayer = {
        id: this.state.players.length + 1,
        name: this.state.userName,
        attack: 0,
        range: 0,
        friendship: 0
      }
      for (var i = 0; i < this.state.players.length; i++) {
        if (this.state.players[i].name === this.state.userName) {
          return (await fetch('https://react-game-api.herokuapp.com/players', {
            method: 'PUT',
            body: JSON.stringify(newPlayer),
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => response.json())
            .then((response) => {
              this.setState({
                player: [newPlayer],
                showEntry: false,
                showFirst: true,
                showStory: true,
              })
            })
          )
        }
      }
      await fetch('https://react-game-api.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer)
      })
        .then(response => response.json())
        .then((response) => {
          this.setState({
            player: [newPlayer],
            showEntry: false,
            showFirst: true,
            showStory: true,
          })
        })
    }
    if (this.state.userName.length > 10) {
      alert("Sorry Too Long Of A Name, Keep It Under 10 Characters")
    }
  }

  panAttack = (event) => {
    this.setState({
      story: [...this.state.story, 'You Swing The Pan At The Bat'],
      batHealth: this.state.batHealth - 1
    })
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Hit The Bat, And It Dies'],
        showBat: false,
        showCooking: true,
      });
    }, 200)
  }
  pancakeThrow = (event) => {
    this.setState({
      story: [...this.state.story, 'You Throw A Pancake At The Bat'],
      batHealth: this.state.batHealth - 1,
      inventory: ["Pancake", "Pancake"]
    })
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'It Hits The Bat'],
        showBat: false,
      });
    }, 200)
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'It Falls To The Ground'],
        showCooking: true,
      });
    }, 1000)
  }
  pancakeOffer = (event) => {
    this.setState({
      story: [...this.state.story, 'You Hold A Pancake Up'],
      showBat: false,
    })
    this.setTimeOutAndState(1000, 'Whispering Sweet Nothing')
    this.setTimeOutAndState(2000, 'The Bat Lands On Your Hand')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Share The Pancake'],
        inventory: ["Pancake", "Pancake"]
      });
    }, 3000)
    this.setTimeOutAndState(4000, 'The Bat Looks Into Your Eyes')
    this.setTimeOutAndState(5000, 'The Bat Winks At You')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Got A New Companion!'],
        companion: [...this.state.companion, 'Bat'],
        showCompanion: true,
        showCooking: true,
      });
    }, 6000)
  }
  stopCooking = (event) => {
    this.setState({
      showCooking: false,
      story: [...this.state.story, 'You Stop Cooking']
    })
    this.setTimeOutAndState(1000, 'Now Lets Get Dressed')
    this.setTimeOutAndState(2000, 'You Open Your Closet')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'What Do You Want To Wear?'],
        showClothes: true
      });
    }, 3000)
  }
  addShirt = (event) => {
    this.setState({
      story: [...this.state.story, 'You Put A Shirt On'],
      showShirt: false,
      showNude: false,
      letsGo: true,
      equipment: [...this.state.equipment, "Shirt"],
      showEquipment: true,
    })
  }
  addPants = (event) => {
    this.setState({
      story: [...this.state.story, 'You Put Pants On'],
      showPants: false,
      showNude: false,
      letsGo: true,
      equipment: [...this.state.equipment, "Pants"],
      showEquipment: true,
    })
  }
  addBoots = (event) => {
    this.setState({
      story: [...this.state.story, 'You Put Boots On'],
      showBoots: false,
      showNude: false,
      letsGo: true,
      equipment: [...this.state.equipment, "Boots"],
      showEquipment: true,
    })
  }
  goNaked = (event) => {
    this.setState({
      story: [...this.state.story, 'LETS GO STREAKING!!!'],
      showClothes: false,
    })
    this.setTimeOutAndState(1000, 'You Prance To The Door')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'Do You Grab Anything Before You Leave?'],
        showLeaving: true
      });
    }, 2000)
  }
  goOutside = (event) => {
    this.setState({
      story: [...this.state.story, 'You Walk To The Door'],
      showClothes: false,
    })
    this.setTimeOutAndState(1000, 'You Grab Your Backpack')
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'What Do You Grab Before You Leave?'],
        showLeaving: true
      });
    }, 2000)
  }
  addUmbrella = (event) => {
    this.setState({
      weapon: 'Umbrella',
      story: [...this.state.story, 'You Grab Your Umbrella'],
      showLeaving: false,
      showWeapon: true,
    })
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Open The Door And Step Outside'],
        showOutside: true,
      });
    }, 2000)
  }
  addBoomerang = (event) => {
    this.setState({
      weapon: 'Boomerang',
      story: [...this.state.story, 'You Grab The Boomerang'],
      showLeaving: false,
      showWeapon: true,
    })
    setTimeout(() => {
      this.setState({
        story: [...this.state.story, 'You Open The Door And Step Outside'],
        showOutside: true,
      });
    }, 2000)
  }
  basicAttack = (event) => {
    if (this.state.disablePlayerAttack === false) {
      var that = this;
      if (this.state.enemyHealth === -20) {
        this._cancelInterval = setInterval(function () {
          if (that.state.killedEnemy === false) {
            if (that.state.playerHealth < 1) {
              that.setState({
                story: [...that.state.story, 'YOU DIED'],
                showOutside: false,
                killedEnemy: true,
                showDeath: true,
                showInventory: false,
              })
            }
            that.setState({
              playerHealth: that.state.playerHealth - 2
            })
          } else {
            that.setState({
              playerHealth: that.state.playerHealth
            })
          }
        }, 3000);
        this.setState({
          enemyHealth: this.state.enemies[0].grunt.health,
          enemyHit: true,
        })
      } else if (this.state.enemyHealth <= 1) {
        // clearInterval(this._cancelInterval)
        let itemIndx = Math.floor(Math.random() * this.state.enemies[0].grunt.items.length)
        this.setState({
          disablePickedUp: false,
          droppedItem: this.state.enemies[0].grunt.items[itemIndx],
          killedEnemy: true,
          story: [...this.state.story, "You Killed An Enemy, It Dropped An Item"],
          enemyHealth: -20
        })
      }
      else {
        this.setState({
          enemyHealth: (this.state.enemyHealth - 2) - this.state.player[0].attack - this.state.player[0].range - this.state.weaponDmg,
          disablePlayerAttack: true,
        })
        setTimeout(() => {
          this.setState({
            disablePlayerAttack: false
          });
        }, 1000)
      }
    }
  }
  companionAttack = (event) => {
    if (this.state.disableCompanion === false) {
      var that = this;
      if (this.state.enemyHealth === -20) {
        this._cancelInterval = setInterval(function () {
          if (that.state.killedEnemy === false) {
            if (that.state.playerHealth <= 1) {
              that.setState({
                story: [...that.state.story, 'YOU DIED'],
                showOutside: false,
                killedEnemy: true,
                showDeath: true,
                showInventory: false,
              })
            }
            that.setState({
              playerHealth: that.state.playerHealth - 1
            })
          } else {
            that.setState({
              playerHealth: that.state.playerHealth
            })
          }
        }, 9000);
        this.setState({
          enemyHealth: this.state.enemies[0].grunt.health,
          enemyHit: true,
        })
      } else if (this.state.enemyHealth <= 1) {
        clearInterval(this._cancelInterval)
        let itemIndx = Math.floor(Math.random() * this.state.enemies[0].grunt.items.length)
        this.setState({
          disablePickedUp: false,
          droppedItem: this.state.enemies[0].grunt.items[itemIndx],
          killedEnemy: true,
          story: [...this.state.story, "You Killed An Enemy, It Dropped An Item"],
          enemyHealth: -20
        })
      }
      else {
        this.setState({
          enemyHealth: ((this.state.enemyHealth - 1) - this.state.player[0].friendship),
          disableCompanion: true,
        })
        setTimeout(() => {
          this.setState({
            disableCompanion: false
          });
        }, 750)
      }
    }
  }
  pickUpItem = (event) => {
    this.setState({
      inventory: [...this.state.inventory, this.state.droppedItem],
      showInventory: true,
      droppedItem: '',
      disablePickedUp: true,
    })
  }
  clickInventory = (event) => {
    var count = 0
    var newInventory = []
    if (event.target.innerHTML === "Muffin" || event.target.innerHTML === "Pancake" || event.target.innerHTML === "Bread") {
      for (var i = 0; i < this.state.inventory.length; i++) {
        if (count === 0) {
          if (this.state.inventory[i] === event.target.innerHTML) {
            count++
          }
          else {
            newInventory.push(this.state.inventory[i])
          }
        }
        else {
          newInventory.push(this.state.inventory[i])
        }
      }
      this.setState({
        playerHealth: this.state.playerHealth + 4,
        inventory: newInventory
      })
    } else if (event.target.innerHTML === "Bow" || event.target.innerHTML === "Dagger") {
      for (var j = 0; j < this.state.inventory.length; j++) {
        if (count === 0) {
          if (this.state.inventory[j] === event.target.innerHTML) {
            count++
            newInventory.push(this.state.weapon)
          }
          else {
            newInventory.push(this.state.inventory[j])
          }
        }
        else {
          newInventory.push(this.state.inventory[j])
        }
      }
      this.setState({
        weapon: event.target.innerHTML,
        inventory: newInventory,
        weaponDmg: 1
      })
    } else if (event.target.innerHTML === "Potion") {
      for (var k = 0; k < this.state.inventory.length; k++) {
        if (count === 0) {
          if (this.state.inventory[k] === event.target.innerHTML) {
            count++
          }
          else {
            newInventory.push(this.state.inventory[k])
          }
        }
        else {
          newInventory.push(this.state.inventory[k])
        }
      }
      this.setState({
        playerHealth: this.state.playerHealth + 40,
        inventory: newInventory
      })
    } else {
      alert("Sorry I have not added this function yet!")
    }
  }
  leaveCombat = (event) => {
    var dattack = 0
    var drange = 0
    var dfriendship = 0
    if (this.state.weapon === "Umbrella" || this.state.weapon === "Dagger") {
      dattack += 1
      if (this.state.showCompanion === true) {
        dfriendship += 1
      }
    } else if (this.state.weapon === "Boomerang" || this.state.weapon === "Bow") {
      drange += 1
      if (this.state.showCompanion === true) {
        dfriendship += 1
      }
    }
    let updatePlayer = {
      id: this.state.player[0].id,
      attack: this.state.player[0].attack + dattack,
      range: this.state.player[0].range + drange,
      friendship: this.state.player[0].friendship + dfriendship,
      name: this.state.player[0].name
    }
    fetch('https://react-game-api.herokuapp.com/players', {
      method: 'PUT',
      body: JSON.stringify(updatePlayer),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          player: [updatePlayer],
          players: [response],
          killedEnemy: false,
        })
      })
  }

  render() {
    return (
      <div className="App container mainCont">
        <div className="secondCont row">
          <div className="col-4">
            <Story showStory={this.state.showStory} story={this.state.story} />
          </div>
          <div className="col-6">
            <Intro className="col-6" handleKeyPress={this.handleKeyPress} stayInBed={this.stayInBed} showDecisionOne={this.state.showDecisionOne} wakeUp={this.wakeUp} getUp={this.state.getUp} disableAlarm={this.state.disableAlarm} showEntry={this.state.showEntry} sendUser={this.sendUser} firstButton={this.firstButton} addUser={this.addUser} showFirst={this.state.showFirst} />
            <Second food={this.state.food} showSecond={this.state.showSecond} pancakeClick={this.pancakeClick} starveClick={this.starveClick} muffinClick={this.muffinClick} />
            <Death showDeath={this.state.showDeath} />
            <Pancake stopCooking={this.stopCooking} leaveCooking={this.state.leaveCooking} flipBreakfast={this.flipBreakfast} grabBreakfast={this.grabBreakfast} breakfastDone={this.state.breakfastDone} breakfastFlip={this.state.breakfastFlip} breakfastPour={this.state.breakfastPour} cookBreakfast={this.cookBreakfast} showCooking={this.state.showCooking} showIngredients={this.state.showIngredients} addIngredient={this.addIngredient} stoveOn={this.state.stoveOn} grabbedPan={this.state.grabbedPan} grabbedBowl={this.state.grabbedBowl} grabPan={this.grabPan} grabBowl={this.grabBowl} turnOnStove={this.turnOnStove} showPancake={this.state.showPancake} />
            <Clothes addBoots={this.addBoots} addPants={this.addPants} addShirt={this.addShirt} goNaked={this.goNaked} goOutside={this.goOutside} letsGo={this.state.letsGo} showPants={this.state.showPants} showShirt={this.state.showShirt} showNude={this.state.showNude} showBoots={this.state.showBoots} showClothes={this.state.showClothes} />
            <Leaving addUmbrella={this.addUmbrella} addBoomerang={this.addBoomerang} showLeaving={this.state.showLeaving} />
            <Outside disablePickedUp={this.state.disablePickedUp} leaveCombat={this.leaveCombat} disableCompanion={this.state.disableCompanion} disablePlayerAttack={this.state.disablePlayerAttack} companionAttack={this.companionAttack} pickUpItem={this.pickUpItem} killedEnemy={this.state.killedEnemy} droppedItem={this.state.droppedItem} basicAttack={this.basicAttack} enemyHit={this.state.enemyHit} showCompanion={this.state.showCompanion} companion={this.state.companion} userName={this.state.userName} showOutside={this.state.showOutside} playerHealth={this.state.playerHealth} enemyHealth={this.state.enemyHealth} enemies={this.state.enemies} />
            <Bat enemies={this.state.enemies} panAttack={this.panAttack} pancakeThrow={this.pancakeThrow} pancakeOffer={this.pancakeOffer} userName={this.state.userName} showBat={this.state.showBat} />
          </div>
          <div className="col-2">
            <Inventory clickInventory={this.clickInventory} showWeapon={this.state.showWeapon} weapon={this.state.weapon} showCompanion={this.state.showCompanion} showEquipment={this.state.showEquipment} companion={this.state.companion} equipment={this.state.equipment} showInventory={this.state.showInventory} inventory={this.state.inventory} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;