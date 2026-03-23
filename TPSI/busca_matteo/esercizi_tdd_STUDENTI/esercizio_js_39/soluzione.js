export const reverse = (l) => {
    let lnuovo = []
    for(let el of l){
        lnuovo.unshift(el)
    }
    lnuovo.reduce((acc, current) => acc += current,0);

    return lnuovo        
};