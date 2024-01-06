const paths = [
    '/src/assets/avatars/cat.svg',
    '/src/assets/avatars/hotdog.svg',
    '/src/assets/avatars/pug.svg',
    '/src/assets/avatars/red-cat.svg',
]

export function GetRandomAvatarPath(): string {
    return paths[Math.floor(Math.random() * paths.length)];
}