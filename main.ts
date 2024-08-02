namespace SpriteKind {
    export const Goblin1 = SpriteKind.create()
    export const Goblin2 = SpriteKind.create()
    export const Goblin3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const GoblinHealth1 = StatusBarKind.create()
    export const GoblinHealth2 = StatusBarKind.create()
    export const GoblinHealth3 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goblin2, function (sprite, otherSprite) {
    statusbar2.value += Damage
    otherSprite.follow(Player1, 10)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goblin3, function (sprite, otherSprite) {
    statusbar3.value += Damage
    otherSprite.follow(Player1, 10)
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.cameraShake(4, 1000)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Player1.y += -16
    Player1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function statusbarCreation () {
    statusbar = statusbars.create(20, 4, StatusBarKind.GoblinHealth1)
    statusbar.attachToSprite(Goblin)
    statusbar.max = 100
    statusbar.value = 100
    statusbar2 = statusbars.create(20, 4, StatusBarKind.GoblinHealth2)
    statusbar2.attachToSprite(Goblin2)
    statusbar2.max = 100
    statusbar2.value = 100
    statusbar3 = statusbars.create(20, 4, StatusBarKind.GoblinHealth3)
    statusbar3.attachToSprite(Goblin3)
    statusbar3.max = 100
    statusbar3.value = 100
    statusbarPlayer = statusbars.create(20, 4, StatusBarKind.Health)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HealthPot >= 1) {
        if (statusbarPlayer.value < 100) {
            statusbarPlayer.value += 50
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goblin1, function (sprite, otherSprite) {
    statusbar.value += Damage
    otherSprite.follow(Player1, 10)
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 8 8 8 8 8 8 8 9 9 9 8 8 8 8 . 
        8 8 8 6 6 8 6 6 6 6 6 6 8 6 9 8 
        8 6 6 6 8 8 6 9 9 9 6 6 6 8 9 8 
        9 6 9 9 9 6 6 8 6 8 6 6 6 8 6 9 
        9 9 6 6 6 6 8 6 8 6 8 6 6 6 6 9 
        8 9 6 6 8 9 8 6 8 6 8 9 6 6 6 8 
        8 6 6 9 6 9 6 8 6 6 8 9 6 9 6 9 
        8 6 8 8 6 6 6 8 8 6 9 6 6 9 6 9 
        8 9 9 9 6 9 9 9 6 9 9 9 6 9 6 8 
        8 6 6 8 8 9 8 6 6 6 6 8 6 8 6 8 
        8 6 6 6 9 6 8 6 8 6 6 8 8 8 6 8 
        9 9 9 6 9 9 9 6 9 9 8 9 6 6 6 9 
        9 6 6 6 6 6 9 9 8 8 6 9 8 8 6 9 
        8 9 9 6 9 9 6 6 6 8 6 8 8 9 6 8 
        8 6 6 6 8 6 6 6 8 8 6 8 8 6 6 8 
        . 8 8 8 9 9 8 8 8 9 9 8 8 8 8 . 
        `, Player1, 100, 0)
    projectile2 = sprites.createProjectileFromSprite(img`
        . 8 8 8 8 8 8 8 9 9 9 8 8 8 8 . 
        8 8 8 6 6 8 6 6 6 6 6 6 8 6 9 8 
        8 6 6 6 8 8 6 9 9 9 6 6 6 8 9 8 
        9 6 9 9 9 6 6 8 6 8 6 6 6 8 6 9 
        9 9 6 6 6 6 8 6 8 6 8 6 6 6 6 9 
        8 9 6 6 8 9 8 6 8 6 8 9 6 6 6 8 
        8 6 6 9 6 9 6 8 6 6 8 9 6 9 6 9 
        8 6 8 8 6 6 6 8 8 6 9 6 6 9 6 9 
        8 9 9 9 6 9 9 9 6 9 9 9 6 9 6 8 
        8 6 6 8 8 9 8 6 6 6 6 8 6 8 6 8 
        8 6 6 6 9 6 8 6 8 6 6 8 8 8 6 8 
        9 9 9 6 9 9 9 6 9 9 8 9 6 6 6 9 
        9 6 6 6 6 6 9 9 8 8 6 9 8 8 6 9 
        8 9 9 6 9 9 6 6 6 8 6 8 8 9 6 8 
        8 6 6 6 8 6 6 6 8 8 6 8 8 6 6 8 
        . 8 8 8 9 9 8 8 8 9 9 8 8 8 8 . 
        `, Player1, -100, 0)
    canAttack = false
    pause(500)
    canAttack = true
})
function dinoWalkingMechanism () {
    Goblin.x += 16
    pause(500)
    Goblin.x += 16
    pause(500)
    Goblin.x += 16
    pause(500)
    Goblin.setImage(assets.image`myImage`)
    Goblin.x += -16
    pause(500)
    Goblin.x += -16
    pause(500)
    Goblin.x += -16
    pause(500)
    Goblin.setImage(assets.image`myImage0`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, sprites.dungeon.floorLight1)
    game.showLongText("Don’t touch the border", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Player1.x += -16
    Player1.setImage(assets.image`heroWalkShieldSideLeft0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goblin1, function (sprite, otherSprite) {
    statusbarPlayer.value += -6
    otherSprite.x += 32
    scene.cameraShake(4, 500)
})
function dinoWalkingMechanism3 () {
    Goblin3.x += 16
    pause(500)
    Goblin3.x += 16
    pause(500)
    Goblin3.x += 16
    pause(500)
    Goblin3.setImage(assets.image`myImage`)
    Goblin3.x += -16
    pause(500)
    Goblin3.x += -16
    pause(500)
    Goblin3.x += -16
    pause(500)
    Goblin3.setImage(assets.image`myImage0`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    HealthPot += 1
})
function dinoTutorialCreation () {
    Goblin = sprites.create(assets.image`myImage`, SpriteKind.Goblin1)
    tiles.placeOnRandomTile(Goblin, sprites.castle.tileDarkGrass1)
    Goblin2 = sprites.create(assets.image`myImage`, SpriteKind.Goblin2)
    tiles.placeOnRandomTile(Goblin2, sprites.castle.tileDarkGrass1)
    Goblin3 = sprites.create(assets.image`myImage`, SpriteKind.Goblin3)
    tiles.placeOnRandomTile(Goblin3, sprites.castle.tileDarkGrass1)
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.castle.tileDarkGrass1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Player1.x += 16
    Player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
})
statusbars.onZero(StatusBarKind.GoblinHealth3, function (status) {
    sprites.destroy(Goblin3)
    EXP += 30
    game.showLongText("+30 exp", DialogLayout.Bottom)
    game.showLongText("+30 exp", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goblin3, function (sprite, otherSprite) {
    statusbarPlayer.value += -6
    otherSprite.x += 32
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goblin2, function (sprite, otherSprite) {
    statusbarPlayer.value += -6
    otherSprite.x += 32
    scene.cameraShake(4, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Player1.y += 16
    Player1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest0, function (sprite, location) {
    scene.cameraShake(4, 1000)
    Player1.x += -32
    game.showLongText("You are not ready", DialogLayout.Bottom)
})
statusbars.onZero(StatusBarKind.GoblinHealth1, function (status) {
    sprites.destroy(Goblin)
    EXP += 30
    game.showLongText("+30 exp", DialogLayout.Bottom)
    game.showLongText("+30 exp", DialogLayout.Bottom)
})
function dinoWalkingMechanism2 () {
    Goblin2.x += 16
    pause(500)
    Goblin2.x += 16
    pause(500)
    Goblin2.x += 16
    pause(500)
    Goblin2.setImage(assets.image`myImage`)
    Goblin2.x += -16
    pause(500)
    Goblin2.x += -16
    pause(500)
    Goblin2.x += -16
    pause(500)
    Goblin2.setImage(assets.image`myImage0`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (canfightBoss == true) {
        tiles.placeOnTile(Player1, tiles.getTileLocation(3, 22))
    } else {
        scene.cameraShake(4, 500)
        game.showLongText("You have not finished the tutorial", DialogLayout.Bottom)
        tiles.placeOnRandomTile(Player1, sprites.dungeon.floorLight1)
    }
})
statusbars.onZero(StatusBarKind.GoblinHealth2, function (status) {
    sprites.destroy(Goblin2)
    EXP += 30
    game.showLongText("+30 exp", DialogLayout.Bottom)
    game.showLongText("+30 exp", DialogLayout.Bottom)
})
let Level = 0
let EXP = 0
let projectile2: Sprite = null
let projectile: Sprite = null
let Goblin3: Sprite = null
let Goblin2: Sprite = null
let Goblin: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbarPlayer: StatusBarSprite = null
let canfightBoss = false
let Player1: Sprite = null
let Damage = 0
let canAttack = false
let HealthPot = 0
tiles.setCurrentTilemap(tilemap`level2`)
HealthPot = 0
dinoTutorialCreation()
statusbarCreation()
canAttack = true
let HealthPlayer = 100
Damage = -6
let MaxHealth = 100
Player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Player1)
tiles.placeOnRandomTile(Player1, sprites.dungeon.floorLight1)
canfightBoss = false
statusbarPlayer.value = 100
game.showLongText("Welcome to MagiQuest!", DialogLayout.Bottom)
game.showLongText("The chest next to you contains a health potion. Press B to regain health with it", DialogLayout.Bottom)
game.showLongText("In this game you will fight bosses, dinosaurs, grind, get through minigames for exp, and more!", DialogLayout.Bottom)
game.showLongText("Get health potions and kill three enemies to unlock the portal to fight your first boss", DialogLayout.Bottom)
game.showLongText("The number on top of your head is your level ", DialogLayout.Bottom)
game.showLongText("Good luck", DialogLayout.Bottom)
forever(function () {
    dinoWalkingMechanism3()
})
forever(function () {
    statusbarPlayer.attachToSprite(Player1, 0, 0)
    statusbarPlayer.max = MaxHealth
})
forever(function () {
    dinoWalkingMechanism()
})
forever(function () {
    dinoWalkingMechanism2()
})
forever(function () {
    if (EXP == 90) {
        game.showLongText("LEVEL UP!", DialogLayout.Bottom)
        game.showLongText("LEVEL UP!", DialogLayout.Bottom)
        game.showLongText("LEVEL UP!", DialogLayout.Bottom)
        game.showLongText("+50 max health", DialogLayout.Bottom)
        MaxHealth += 50
        game.showLongText("+6 damage", DialogLayout.Bottom)
        Damage += 6
        game.showLongText("Your exp has been reset. Gain 90 exp again to level up.", DialogLayout.Bottom)
        EXP = 0
        Level += 1
        game.showLongText("It is recommended to be lvl 10 before continuing to the boss", DialogLayout.Bottom)
        game.showLongText("Go and explore the rest of the realm comrade. Your life awaits you!", DialogLayout.Bottom)
        canfightBoss = true
    }
    Player1.sayText(Level)
})
