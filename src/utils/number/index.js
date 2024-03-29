/**
 * 千分位格式化
 * @param val 原數值
 * @param isDecimal2 保留小數2位
 * @returns {string}
 */
export function formatCurrency(val: number = 0, isDecimal2 = true) {
    const dec = isDecimal2 ? toDecimal2(val) : Math.floor(val);
    const parts = dec.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

/**
 * 保留小數第二位
 * @returns {string}
 * @param x
 */
export function toDecimal2(x: number) {
    let f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    f = Math.round(x*100)/100;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}