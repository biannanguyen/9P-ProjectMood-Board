$(".calm,.sleepy,.happy,.sad").hide();

$("button").click(function() {
   var input= $(".moodInput").val();
   
function show(backgroundcolor, textcolor,picture) {
    $("body").css("background-color", backgroundcolor);
    $("body").css("color", textcolor);
    $(".picture").append("<img src=" + picture +">");
    
}
if(input === "calm") {
    show("lightgray", "white", "https://www.yogajournal.com/.image/t_share/MTQ2MTgwNzM5MDQ5OTg5NjY0/sunset-meditation-mudra.jpg");
 
} else if(input === "sleepy") {
     show("lightgray", "lightpink", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NXInKiGfHxPw5Mw4HhBJENYFe6JuWU77SrGOcEAwucCbmWz5");
  
} else if(input ==="happy") {
     show("orange", "yellow", "https://deneylaine.files.wordpress.com/2014/06/happy.jpg");

} else if(input ==="sad") {
     show("lightblue", "blue", "https://lh3.googleusercontent.com/-AEA9_d77klU/Vv6D8ws1iaI/AAAAAAAAIBY/e4n0DuPIWTwsi68NaGMvHvJqjT_-E-_JgCCo/s550-Ic42/Best%2Bsad%2Bquotes%2Bpics%2Bimages%2Bpictures%2B%2B%252844%2529.jpg");

}
   
});




