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
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(Goblin)
    statusbar.max = 100
    statusbar.value = 100
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.attachToSprite(Goblin2)
    statusbar2.max = 100
    statusbar2.value = 100
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.attachToSprite(Goblin3)
    statusbar3.max = 100
    statusbar3.value = 100
    statusbarPlayer = statusbars.create(20, 4, StatusBarKind.Health)
}
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Player1.x += -16
    Player1.setImage(assets.image`heroWalkShieldSideLeft0`)
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
function dinoTutorialCreation () {
    Goblin = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Goblin, sprites.castle.tileDarkGrass1)
    Goblin2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Goblin2, sprites.castle.tileDarkGrass1)
    Goblin3 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
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
let statusbarPlayer: StatusBarSprite = null
let Goblin3: Sprite = null
let statusbar3: StatusBarSprite = null
let Goblin2: Sprite = null
let statusbar2: StatusBarSprite = null
let Goblin: Sprite = null
let statusbar: StatusBarSprite = null
let Player1: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
dinoTutorialCreation()
statusbarCreation()
let HealthPlayer = 100
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
forever(function () {
    dinoWalkingMechanism3()
})
forever(function () {
    statusbarPlayer.attachToSprite(Player1, 0, 0)
    statusbarPlayer.max = MaxHealth
    statusbarPlayer.value = HealthPlayer
})
forever(function () {
    dinoWalkingMechanism()
})
forever(function () {
    dinoWalkingMechanism2()
})
