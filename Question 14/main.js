// Exercise no 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your 
//  list to print a message to each person, inviting them to dinner.
var guestlist = ["Ramzan", "Sheraz", "Shan"];
for (var i = 0; i < guestlist.length; i++) {
    var guest = guestlist[i];
    console.log("Hey ".concat(guest, ", you are cordially invited to dinner with me."));
}
