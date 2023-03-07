export function lobby(highestLeveli = 1) {
	window.test = function (level) {
		if (typeof level === "string") {
			go("game", parseInt(level) - 1, true)
		} else {
			go("game", level - 1)
		}
	}

	let highestLevel;
	
	if (localStorage.getItem("level") != null) {
		highestLevel = localStorage.getItem("level")
	} else {
		highestLevel = highestLeveli;
	}
	
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
		text("[Level Select]", {
			letterSpacing: 5,
			font: "Tahoma",
			size: 45,
		})
	])

	function createTextLevel(num, px, py) {
		add([
			pos(width() * px, height() * py),
			color(...(num > 15 ? [125, 67, 232] : (num > highestLevel ? [227, 70, 70] : [88, 237, 93]))),
			anchor("center"),
			rect(64, 64),
			area(),
			z(100),
			"btn",
			(num > highestLevel ? "no" : "yes"),
			{ num }
		])
	
		add([
			pos(width() * px, height() * py),
			anchor("center"),
			z(100),
			text(num.toString(), {
				font: "pixel",
				size: 32,
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

	onHover("no", () => {
		setCursor("not-allowed")
	})
	
	onHover("yes", () => {
		setCursor("pointer")
	})

	onClick("yes", (btn) => {
		go("game", btn.num - 1)
	})

	onHover("btn", (btn) => {
		square.pos = vec2(btn.pos).add(3, 3)
	})

	onHoverEnd("btn", () => {
		setCursor("default")
	})
	
	for (let i = 0; i < 20; i++) {
		createTextLevel(1 + i, (1 + i % 5) / 6, (2 + Math.floor(i / 5)) / 6)
	}
}