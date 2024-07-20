import messages from '../services/messages.js'

export function displayMessage(index) {
        const message = messages[index]
        return message ?? '-'
}