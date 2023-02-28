export type IPokemonRes = {
    pokemons: [IPokemonStat] | undefined

};

export type ICard = {
    img: string;
    name: string;
    number: string;
    classification: string;
    attack: [IAttack]
    specialAttack: [IAttack]
};

export type IAttack = {
    damage: number
    name: string
    type: string
}

export type IPokemonStat = {
    image: string;
    name: string;
    maxCP: number
    maxHP: number
    types: [string]
    weaknesses: [string]
    resistant: [string]
    height: IPokemonHeight
    weight: IPokemonWeight
    number: string;
    classification: string;
    attacks: IAttacks
};

export type IAttacks = {
    fast: [IAttack]
    special: [IAttack]
}

export type IPokemonHeight = {
    maximum: string
    minimum: string
}
export type IPokemonWeight = {
    maximum: string
    minimum: string
}