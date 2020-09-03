export interface Prefecture {
    id: number,
    region: number,
    name: string,
    short: string,
    kan: string,
    en: string,
    neighbor: number[]
}

export interface Region {
    id: number,
    name: string
}