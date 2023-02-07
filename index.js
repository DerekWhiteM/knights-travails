function Node(position, path = [position]) {
    return { position, path };
}

function isValidPosition(position) {
    return position[0] >= 0 
        && position[0] <= 7 
        && position[1] >= 0 
        && position[1] <= 7;
}

function knightMoves(start, end) {
    const moves = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-2, 2]
    ];
    const queue = [Node(start)];
    let currentNode = queue.shift();
    console.log(`> knightMoves([${start}],[${end}])`);
    while(currentNode.position[0] !== end[0] || currentNode.position[1] !== end[1]) {
        for (const move of moves) {
            const nextPos = [
                currentNode.position[0] + move[0], 
                currentNode.position[1] + move[1]
            ];
            if (isValidPosition(nextPos)) {
                queue.push(Node(nextPos, currentNode.path.concat([nextPos])));
            }
        }
        currentNode = queue.shift();
    }
    console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
    currentNode.path.forEach(position => console.log('  ' + `[${position}]`));
}

knightMoves([3,3],[4,3]);