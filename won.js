export function win() {
	add([
		anchor("center"),
		pos(center()),
		text("CONGRADULATIONS\nYOU WON!!!", {
			letterSpacing: 2,
			align: "center",
			font: "pixel",
			size: 64,
		})
	])
}