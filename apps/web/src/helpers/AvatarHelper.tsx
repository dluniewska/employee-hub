const paths = [
    './src/assets/avatars/cat.svg',
    './src/assets/avatars/chicken.svg',
    './src/assets/avatars/hotdog.svg',
    './src/assets/avatars/pug.svg',
    './src/assets/avatars/red-cat.svg',
    './src/assets/avatars/snail.svg',
]

export function GetRandomAvatarPath(): string {
    return paths[Math.floor(Math.random() * paths.length)];
}