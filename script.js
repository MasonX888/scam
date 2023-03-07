import { settings } from "./settings.js"
import { lobby } from "./lobby.js"
import { game } from "./game.js"
import { win } from "./won.js"
import { main } from "./main.js"

kaboom({
	background: [92, 187, 242],
	pixelDensity: 2,
	debug: false,
})

loadSprite("settings", "sprites/settings.png")
loadSprite("damage", "sprites/damage.png")
loadSprite("grass", "sprites/grass.png")
loadSprite("lobby", "sprites/lobby.png")
loadSprite("dirt", "sprites/dirt.png")
loadSprite("lock", "sprites/lock.png")
loadSprite("key", "sprites/key.png")

loadFont("pixel", "fonts/pixel.otf")

loadSound("jump", "sounds/jump.mp3")
loadSound("fly", "sounds/fly.mp3")
loadSound("oof", "sounds/oof.mp3")

scene("settings", settings)
scene("lobby", lobby)
scene("game", game)
scene("main", main)
scene("win", win)

if (localStorage.getItem("level") == null) {
	localStorage.setItem("level", "1")
}

onLoad(() => {
	go("main")
})