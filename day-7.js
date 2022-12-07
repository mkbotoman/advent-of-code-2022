const { input7 } = require('./day-7-input')
const example = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`


const part1 = (rawInput) => {
    const rootDir = generateDirectories(rawInput);
    const dirList = flattenDir(rootDir);

    const sizeLimit = 100000;

    return dirList
        .filter((dir) => dir.getSize() < sizeLimit)
        .reduce((sum, dir) => sum + dir.getSize(), 0);
};

const part2 = (rawInput) => {
    const rootDir = generateDirectories(rawInput);
    const dirList = flattenDir(rootDir);

    const maxAllowedSpace = 40000000;
    const neededExtraSpace = rootDir.getSize() - maxAllowedSpace;

    const deletionCandidates = dirList
        .map((dir) => dir.getSize())
        .filter((size) => size > neededExtraSpace);
    return Math.min(...deletionCandidates);
};

const generateDirectories = (rawInput) => {
    const commands = parseCommands(rawInput);

    const rootDir = new Dir('/', null);
    let currentDir = rootDir;

    for (const command of commands) {
        switch (command[0].substring(0, 2)) {
            case 'ls':
                const listResults = command.slice(1);
                currentDir.addListResults(listResults);
                break;

            case 'cd':
                currentDir = currentDir.changeDir(command[0].substring(3));
                break;
            default:
                console.log('Unknown command: ' + command.join(' '));
        }
    }

    return rootDir;
};

const parseCommands = (rawInput) =>
    rawInput
        .split('\n$ ')
        .map((el) => el.split('\n'))
        .slice(1);

const flattenDir = (dir) => {
    const dirs = [dir];
    dir.children.forEach((child) => {
        dirs.push(...flattenDir(child));
    });

    return dirs;
};

class Dir {
    files = [];
    children = [];

    constructor(name, parentDir) {
        this.name = name;
        this.parentDir = parentDir;
    }

    getSize() {
        const fileSize = this.files.reduce((sum, file) => (sum += Number(file[0])), 0);
        const childDirSize = this.children.reduce((sum, child) => (sum += child.getSize()), 0);
        return fileSize + childDirSize;
    }

    changeDir(targetDir) {
        return targetDir === '..'
            ? this.parentDir
            : this.children.find((child) => child.name === targetDir);
    }

    addListResults(results) {
        for (const result of results) {
            const item = result.split(' ');
            if (item[0] === 'dir') {
                this.children.push(new Dir(item[1], this));
            } else {
                this.files.push(item);
            }
        }
    }
}

console.log(part2(input7))