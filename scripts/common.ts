import {Config} from 'amo-widget-builder'
import * as path from 'path'

export const config: Config =
{
    name: {
        ru: 'Мой первый виджет',
        en: 'My first widget',
        es: 'Mi primer widget'
    },
    description: {
        ru: 'Здесь могло бы быть описание',
        en: 'Here could be description'
    },
    shortDescription: {
        ru: 'Здесь могло бы быть описание покороче, но оно оказалось длиннее',
        en: 'Here could be shorter description, but it turned out longer'
    },
    tourDescription: {
        ru: 'Здесь могло бы быть продающее описание'
    },
    advancedSettingsTitle: {
        ru: 'Настойки тут'
    },
    version: '0.0.1',
    fakeConfig: {
        required: false
    },
    locales: ['ru'],
    bundleDir: path.resolve(__dirname, '../dist'),
    outDir: path.resolve(__dirname, '..')

}