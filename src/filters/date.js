export default (value) => {
    const date = new Date(value)

    console.log(date.toLocaleString(['en-US']))

    return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit'})


    return ''
}