console.log("test")

let wineArray = [
    {name:"Dumanet", color:"witte wijn", year:2021, grape: "Chardonnay",country:"Frankrijk",image:  "../images/wijn1.png"},
    {name:"Nativ Suadens", color:"witte wijn", year: 2015, grape: "Falanghina",country:"Italië",image:"../images/wijn2.png"},
    {name:"Marlborough Sun", color:"witte wijn", year: 2021, grape: "Sauvignon",country:"Nieuw-Zeeland",image: "../images/wijn3.png"},
    {name:"Antinori Cervaro",color :"witte wijn",year: 2016,grape: "Chardonnay",country: "Italië",image: "../images/wijn4.png"},
    {name:"Elena Walch Beyond The Clouds",color :  "witte wijn",year: 2018,grape: "Chardonnay  Blanc",country: "Italië",image: "../images/wijn5.png"},
    {name:"Antinori Bramito",color :"witte wijn",year: 2022,grape: "Chardonnay",country: "Italië",image: "../images/wijn6.png"},
    {name:"Bernardus Chardonnay",color :"witte wijn",year: 2017,grape: "Chardonnay",country: "Italië",image: "../images/wijn7.png"},
    {name:"Panamera",color: "witte wijn",year:2020,grape: "Sauvignon  Blanc",country: "Italië",image: "../images/wijn8.png"},
    {name:"Gayda Chemin de Moscou",color :  "rode wijn",year: 2018,grape: "Shiraz/Syrah",country: "Italië",image: "../images/wijn9.png"},
    {name:"Félix Solís Mucho Más",color :  "rode wijn",year: 2021,grape: "Blend",country: "Spanje",image: "../images/wijn10.png"},
    {name:"Bernardus Pinot Noir",color :  "rode wijn",year: 2019,grape: "Pinot Noir",country: "Verenigde Staten",image: "../images/wijn11.png"},
    {name:"Gayda Figure Libre Cabernet Franc",color :  "rode wijn",year: 2022,grape: "Sauvignon  Blanc",country: "Frankrijk",image: "../images/wijn12.png"},
    {name:"Stellenbosch Lanzerac",color :  "rode wijn",year: 2021,grape: "Merlot",country: "Zuid Afrika",image: "../images/wijn13.png"}
];

const template = document.getElementById("wijn-template")

//functionsortArray()
wineArray.sort();

wineArray.sort((a,b) => a.name.localeCompare(b.name))

// function replaceElementContent(elementId, content) {
//     let element = document.getElementById(elementId)
//     if (element) {
//         element.innerHTML = content
//     }
// }
//wineArray = wineArray.slice(0,5)

let container = document.getElementById("flex-container-items")
let itemsPerPage = 5
let currentPage = 1
function showItemFromTo() {
    template.innerHTML=""
    const wineArraySliced = wineArray
        .slice((currentPage-1)*itemsPerPage,(currentPage-1)*itemsPerPage+itemsPerPage)
    wineArraySliced.forEach(item => {
        const wineElement = document.createElement('div')
        wineElement.innerHTML = `    <div><img src="${item.image}" alt="Wijnfles  ${item.name}" width="100px">
        <h1>${item.name}</h1>
    </div>
    <div class="flex-container">
        <div class="flex-child details">
            <div> <h1>merk:</h1></div>
            <div> <h1>kleur:</h1></div>
            <div> <h1>herkomst:</h1></div>
            <div> <h1>druif:</h1></div>
            <div> <h1>jaar:</h1></div>
        </div>
        <div class="flex-child details">
            <div> <h1>${item.name}</h1></div>
            <div> <h1>${item.color}</h1></div>
            <div> <h1>${item.country}</h1></div>
            <div> <h1>${item.grape}</h1></div>
            <div> <h1>${item.year}</h1></div>
        </div>
    </div>`
        wineElement.className = "flex-container"
        template.appendChild(wineElement)
    })
}
//
showItemFromTo()
// showItemFromTo(0,5)
// showItemFromTo(5,10)
// showItemFromTo(10,15)

const paginationElement = document.getElementById("pagination")
function managePages(wineArray,wrapper){
    wrapper.innerHTML=""
    const numberOfPages = Math.ceil(wineArray.length/itemsPerPage)
    for (let i = 1; i < numberOfPages+1; i++){
        const button = pageButton(i,wineArray)
        wrapper.appendChild(button)
    }}
function pageButton(page,wineArray){
    const button = document.createElement("button")
    button.innerHTML = page
    if (currentPage === page)button.classList.add("active")
    button.addEventListener("click",function (){
        currentPage = page
        showItemFromTo(0,5)
        //let button1 = document.querySelector(".pagenumbers button.active")
        // console.log(button1)
        // button1.classList.remove("active")
        //button.classList.add("active")
        document.title="Page"+currentPage
    })
return button
}

managePages(wineArray,paginationElement)
//document.getElementById("myBtn1").addEventListener("click",showItemFromTo(0,5))
// document.getElementById("myBtn2").addEventListener("click",showItemFromTo(5,10))
// document.querySelector('#myBtn3').addEventListener('click', showItemFromTo(10,15))

// for (let i = 0; i < wineArray.length; i++) {
//     replaceElementContent("bottle-" + (i+1), wineArray[i].name)
//     replaceElementContent("name-" + (i+1), wineArray[i].name)
//     replaceElementContent("color-" + (i+1), wineArray[i].color)
//     replaceElementContent("grape-" + (i+1), wineArray[i].grape)
//     replaceElementContent("country-" + (i+1), wineArray[i].country)
//     replaceElementContent("year-" + (i+1), wineArray[i].year)
//     document.getElementById("image-" + (i+1)).src = wineArray[i].image
// }


//document.getElementById("myImg").src = "hackanm.gif";

//const numberOfItems = wineArray.length

//const currentPage = 1
//const numberOfPages = Math.ceil(numberOfItems/numberPerPage)


//document.getElementById("grape-" + [2]).innerHTML = wineArray[2].grape;

//document.getElementById("wine-color-3").innerHTML = "groen";
//    document.getElementById("wine-color-2").innerHTML = wineArray[1].color;
    // ["Dumanet", "white wine", 2021, "Chardonnay", "Frankrijk", "../images/wijn1.png"],
    // ["Nativ Suadens", "white wine", 2015, "Falanghina", "Italië", "../images/wijn2.png"],
    // ["Marlborough Sun", "white wine", 2021, "Sauvignon  Blanc", "Nieuw Zeeland", "../images/wijn3.png"],
    // ["Antinori Cervaro", "white wine", 2016, "Chardonnay", "Italië", "../images/wijn4.png"],
    // ["Elena Walch Beyond The Clouds", "white wine", 2018, "Chardonnay  Blanc", "Italië", "../images/wijn5.png"],
    // ["Antinori Bramito", "white wine", 2022, "Chardonnay", "Italië", "../images/wijn6.png"],
    // ["Bernardus Chardonnay", "white wine", 2017, "Chardonnay", "Italië", "../images/wijn7.png"],
    // ["Panamera", "white wine", 2020, "Sauvignon  Blanc", "Italië", "../images/wijn8.png"],
    // ["Gayda Chemin de Moscou", "white wine", 2018, "Shiraz/Syrah", "Italië", "../images/wijn9.png"],
    // ["Félix Solís Mucho Más", "white wine", 2021, "Blend", "Spanje", "../images/wijn10.png"],
    // ["Bernardus Pinot Noir", "white wine", 2019, "Pinot Noir", "../images/wijn11.png"],
    // ["Gayda Figure Libre Cabernet Franc", "red wine", 2022, "Sauvignon  Blanc", "../images/wijn12.png"],
    // ["Stellenbosch", "red wine", 2021, "Merlot", "../images/wijn13.png"]
//];
console.log("test")

// let koppeling1 = document.getElementById("bottle-1")
// koppeling1.innerHTML = wine[0][0] + " " + wine[0][2]
//
// let koppeling2 = document.getElementById("bottle-2")
// koppeling2.innerHTML = wine[1][0] + " " + wine[1][2]

//document.getElementById("bottle-3").innerHTML = wine[j][0];
// for (let i = 1; i < 2; i++) {
//    // document.getElementById("bottle-" + [i+1]).innerHTML = wine[i][0].toString();
//     document.getElementById("bottle-" + [i]).innerHTML = wine1.name;
//    // document.getElementById("bottle-4").innerHTML = wine[3][0].toString();
// }


