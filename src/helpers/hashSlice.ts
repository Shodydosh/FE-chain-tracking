export function shortSlice(s : string){
    return `${s.slice(0, 8)}...${s.slice(-8)}`
}
export function longSlice(s : string){
    return `${s.slice(0, 18)}...${s.slice(-18)}`
}