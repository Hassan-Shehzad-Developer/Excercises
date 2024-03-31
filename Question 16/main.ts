// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
//  program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest
//  to the end of your list. • Print a new set of invitation messages, one for each person in your list.

{
let guestlist = ["Ramzan", "Sheraz", "Daniyal"];
console.log("Guest List")

for(let i=0; i<guestlist.length; i++)
{
    console.log(`Hey ${guestlist[i]},"We've just upgraded to a bigger dinner table, so there's more space is available`)
}
console.log("Updated List with one new guest name in the biginning")

//  In the below code i am adding one new guest name in the biginning of my array.
guestlist.unshift("Faraz")
for(let i=0; i<guestlist.length; i++)
{
console.log(guestlist[i])
}
console.log("Updated List with one new guest name in the middle")

// In the below code i am adding one new guest name in the middle of my array.
guestlist.splice(2, 0, "Waqar");
for(let i=0; i<guestlist.length; i++){
    console.log(guestlist[i])
}
console.log("Updated List with one new guest name in the end")

// In the below code i am adding one new guest name in the end of my array.
guestlist.push("Salman")
for(let i=0; i<guestlist.length; i++){
    console.log(guestlist[i])

}}