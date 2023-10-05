export interface BoilVolume {
    value: number;
    unit: string;
}

export interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}

export interface Hop {
    name: string;
    amount: BoilVolume;
    add: string;
    attribute: string;
}

export interface Malt {
    name: string;
    amount: BoilVolume;
}

export interface Method {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist: null;
}

export interface Fermentation {
    temp: BoilVolume;
}

export interface MashTemp {
    temp: BoilVolume;
    duration: number;
}