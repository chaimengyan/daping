
export function updateTime () {
    let time = ''
    let date = ''
    let week =  ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let cd = new Date()
    time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2)
    date = zeroPadding(cd.getFullYear(), 4) + '.' + zeroPadding(cd.getMonth() + 1, 2) + '.' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]+ ' '
    return date + time
}
export function zeroPadding (num, digit) {
    let zero = ''
    for (var i = 0; i < digit; i++) {
        zero += '0'
    }
    return (zero + num).slice(-digit)
}
