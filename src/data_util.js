export const types = ['plugin', 'lib']
export const categories = ['adminTool', 'devTool', 'chat', 'economy', 'game', 'protection', 'roleplay', 'worldManagement', 'misc']
export const platforms = ['spigot', 'paper', 'sponge', 'minestom']

export function getDataFromType(type) {
    switch (type.toLowerCase()) {
        case 'plugin': return {
            name: 'Plugin',
            icon: 'bi:plugin'
        }
        case 'lib': return {
            name: 'Bibliothek',
            icon: 'material-symbols:menu-book'
        }
    }
}

export function getDataFromCategory(category) {
    switch (category.toLowerCase()) {
        case 'admintool': return {
            name: 'Admin-Tool',
            icon: 'ic:baseline-remove-red-eye'
        }
        case 'devtool': return {
            name: 'Developer-Tool',
            icon: 'material-symbols:developer-mode'
        }
        case 'chat': return {
            name: 'Chat',
            icon: 'material-symbols:chat'
        }
        case 'economy': return {
            name: 'Economy',
            icon: 'mdi:money-100'
        }
        case 'game': return {
            name: 'Game',
            icon: 'ion:game-controller'
        }
        case 'protection': return {
            name: 'Schutz',
            icon: 'material-symbols:admin-panel-settings-rounded'
        }
        case 'roleplay': return {
            name: 'Rollenspiel',
            icon: 'mdi:castle'
        }
        case 'worldmanagement': return {
            name: 'Welt-Management',
            icon: 'mdi:world'
        }
        case 'misc': return {
            name: 'Sonstiges',
            icon: 'akar-icons:dot-grid-fill'
        }
    }
}

export function getDataFromPlatform(platform) {
    switch (platform.toLowerCase()) {
        case 'spigot': return {
            name: 'Spigot',
            icon: 'material-symbols:water-drop'
        }
        case 'paper': return {
            name: 'Paper',
            icon: 'mdi:paper'
        }
        case 'sponge': return {
            name: 'Sponge',
            icon: 'fluent-emoji-high-contrast:sponge'
        }
        case 'minestom': return {
            name: 'Minestom',
            icon: 'tabler:square-dot'
        }
    }
}