let allBudgets = {}
allBudgets.tags = [1,,3]


testfun = () => {
    let tags = allBudgets.tags
    let newTags = []
    for (tag in tags) {
        if (tag !== "") {
            newTags.push(tag)
            console.log(tag)
        }
    }
    return newTags
}

console.log(testfun())


var inputs  = "2021-09-30"
var date  = (new Date(inputs).toDateString("en-US", {timeZone: "America/Los_Angeles"})).split(" ").splice(1,2).join(" ")

console.log(date)


// <% 
// var inputs  = $("input[type='date']").value
// var date  = (new Date(inputs).toDateString("en-US", {timeZone: "America/Los_Angeles"})).split(" ").splice(1,2).join(" ") 
// %>
