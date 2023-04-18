function setMenuForArticles(data) {
    localStorage.setItem("news", JSON.stringify(data))
    localStorage.setItem("currentNews", data[0]._id)
    let menu = [];
    data.forEach(d => {
        let piece = d.news.productInfo.productName.split(" ")
        let id = d._id
        menu.push([id,piece[0]+" "+piece[1]+" "+piece[2]+" ..."])
    })
    let JsonMenu = JSON.stringify(menu)
    
    localStorage.setItem("newsMenuItems", JsonMenu)

    
}

export default setMenuForArticles;