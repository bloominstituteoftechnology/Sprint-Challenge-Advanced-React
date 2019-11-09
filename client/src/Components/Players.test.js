const {player} = require("./Players");

test('component did mount', () => {
    expect(player).not.toBeNull();
})