// Exercise no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
//  to send out a new set of invitations. You’ll have to think of someone else to invite.

{
  let guestlist = ["Ramzan", "Sheraz", "Shan"];
  console.log("Guest List");

  for (let i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);
  }

  console.log(`unfortunatly ${guestlist[2]} wil not come in dinner due to some reason`);

guestlist[2]= "Daniyal";
for (let i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);

}
}