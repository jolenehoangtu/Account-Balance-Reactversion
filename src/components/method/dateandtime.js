function displayDateandTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    const dateandtime = `${day}/${month}/${year} ${hour}:${minute}`;
    return dateandtime;

}
