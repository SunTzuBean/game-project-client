const S_DIED = 0
const S_SPAWNED = 1
const S_TIME = 2

// modifies game object
function run(player) {
	player.setPlayerColor(255, 255, 255);
	return "done";
}

// example of handling event
function handleStatus(status) {
	if (status == S_DIED) {
		printStatus("You died!");
	} else if (status == S_SPAWNED) {
		printStatus("You spawned!");
	} else if (status == S_TIME) {
		printStatus("What are you doing to time???");
	}
	return "done";
}

// raises an event
function teleport(manager, e, x, y) {
	x.data = 40;
	y.data = 40;
	e.addArg("X_POS", x);
	e.addArg("Y_POS", y);
	manager.raise(e);
}