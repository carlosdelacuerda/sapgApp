export interface SponsoredModel {
    id: number,
    name: string,
    birth: string,
    description: string,
    imgs: string[]
}

export interface SponsoredState {
    loading: boolean,
    sponsoreds: ReadonlyArray<SponsoredModel[]>
}