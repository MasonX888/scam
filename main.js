export function main(highestLeveli = 1) {
	add([
		opacity(0.25),
		sprite("lobby", {
			height: height(),
			width: width()
		})
	])
	
	add([
		pos(center().x, 45),
		anchor("top"),
		text("Jetpack Platformer!", {
			font: "pixel",
			size: 45,
		})
	])

	add([
		pos(center().x, 90),
		anchor("top"),
		text("Do you know that there is a random chance for the cursor to be a no sign?", {
			font: "pixel",
			width: 300,
			size: 16,
		})
	])

	add([
		pos(width() - 64, 32),
		anchor("right"),
		z(100),
		text("Settings", {
			font: "pixel",
			size: 24,
		})
	])
	
	const settingsGUI = add([
		pos(width() - 32, 32),
		anchor("center"),
		area(),
		z(100),
		sprite("settings", {
			height: 32,
			width: 32,
		}),
		"btn",
		{
			nohover: true,
			cl () {
				go("settings")
			}
		}
	])

	function createTextLevel(txt, px, py, cl=null, red=true, small=false, smallmult=0.75) {
		add([
			pos(width() * px, height() * py),
			color(...(red ? [227, 70, 70] : [88, 237, 93])),
			anchor("center"),
			rect(...(small ? [400 * smallmult, 64 * smallmult] : [400, 64])),
			area(),
			z(100),
			"btn",
			{ cl }
		])
	
		add([
			pos(width() * px, height() * py),
			anchor("center"),
			z(100),
			text(txt, {
				font: "pixel",
				size: 32 * (small ? smallmult : 1),
			})
		])
	}

	const square = add([
		pos(center().scale(4)),
		anchor("center"),
		opacity(0.5),
		color(BLACK),
		rect(64, 64),
		z(50)
	])
	
	onHover("btn", () => {
		// setCursor(choose(["pointer", "not-allowed"]))
		setCursor("pointer")
	})

	onClick("btn", (btn) => {
		btn.cl?.()
	})

	onHover("btn", (btn) => {
		if (!btn.nohover) {
			square.height = btn.height;
			square.width = btn.width;
			square.opacity = 0.5;
			square.pos = vec2(btn.pos).add(3, 3)
		}
	})

	onHoverEnd("btn", () => {
		setCursor("default")
		square.opacity = 0;
	})
	
	createTextLevel("There's a level select!", 1 / 2, 1.675 / 4, () => {
		go("lobby")
	}, true, true)
	
	createTextLevel("Play the game!", 1 / 2, 2.25 / 4, () => {
		go("lobby")
	}, false)
	createTextLevel("Tutorial", 1 / 2, 3 / 4, () => {
		go("game", 0, true)
	}, true)

	createTextLevel("more", 1 / 2, 3.675 / 4, () => {
		window.open(choose([
			"https://replit.com/@Tovtovim/Baldis-Basics-in-Coding-and-Learning-ALPHA?v=1",
			"https://replit.com/@Tovtovim/Impossible-Snake-But-you-Are-Food-Game-COOL?v=1",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		]))
	}, true, true, 0.375)
}