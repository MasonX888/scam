export function settings() {
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
		text("Settings", {
			font: "pixel",
			size: 45,
		})
	])

	add([
		pos(width() - 64, 32),
		anchor("right"),
		z(100),
		text("Go back", {
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
				go("main")
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
	
	onHover("btn", () => {
		// setCursor(choose(["pointer", "not-allowed"]))
		setCursor("pointer")
	})

	onClick("btn", (btn) => {
		btn.cl?.(btn)
	})

	onHoverEnd("btn", () => {
		setCursor("default")
	})

	createTextLevel("Disable Helper Text", 1 / 2, 1.75 / 4, (btn) => {
		disableAllHelperText()
		btn.color = rgb(88, 237, 93)
	})
	
	createTextLevel("Disable Death Screen", 1 / 2, 2.5 / 4, (btn) => {
		disableDeathScreen()
		if (btn.color.r === 227) {
			btn.color = rgb(88, 237, 93)
		} else {
			btn.color = rgb(227, 70, 70)
		}
	})
}