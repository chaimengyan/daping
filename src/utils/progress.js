
import { progressColor } from '@/enum/common.js'


export const progressColorKey = Object.keys(progressColor)
progressColorKey.sort((a, b) => b - a);

export const getProgressColor = (value) => {

    for (let i = 0; i < progressColorKey.length; i++) {
        const key = progressColorKey[i];
        if (value >= key) {
            return progressColor[key];
        }
    }

    return progressColor["30"]
}