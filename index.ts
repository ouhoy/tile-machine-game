import * as readlineSync from 'readline-sync';

type Tile = {
    emoji: string,
    state: string,
    index: number
}


let tiles: Tile[] = [];

function createTiles(emojis: string[]): Tile[] {

    const shuffledEmojis = [...emojis, ...emojis];
    console.log(shuffledEmojis)
    for (let i = 0; i < shuffledEmojis.length; i++) {
        const randomPos = Math.floor(Math.random() * (i + 1));
        const currentEmoji = shuffledEmojis[i];

        // Swap [i] value with [randomPos] value.
        shuffledEmojis[i] = shuffledEmojis[randomPos];
        shuffledEmojis[randomPos] = currentEmoji;
    }

    console.log(shuffledEmojis)
    // 3. Map
    return shuffledEmojis.map((e, index) => {
        return {
            emoji: e,
            state: 'up',
            index
        };
    });
}

tiles = createTiles(['💐', '🌿', '🍱', '🎃', '🍳', '🍩', '🍫', '🍥']);




