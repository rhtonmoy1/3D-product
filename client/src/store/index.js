import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    // logoDecal: './threejs.png',
    // fullDecal: './threejs.png',
    logoDecal: './v-gen.png',
    fullDecal: './v-gen.png',
});

export default state;