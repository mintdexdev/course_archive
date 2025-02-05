document.querySelector("h1").style.color = "red";
$("h1").css("color", "coral");
$("h1").addClass("larger");
$("h1").text("heloow");
$("h1").html("<u>helow html</u>");
$("h1").click(function () {
    $("h1").css("color", "lightgreen");
});

//manipulate attributs
$("a").attr("href", "https://google.com");
$("img").attr(
    "src",
    "https://images.pexels.com/photos/30248380/pexels-photo-30248380/free-photo-of-beach-sunset-silhouette-photograph-with-vintage-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
// $("input").keyup(function (event) {
//     $("h1").text(event.key);
//     console.log(event.key);
// });

document.querySelector("input").addEventListener("change", (event) => {
    let data = event.target.value;

    console.log(event.target.value);
    document.querySelector("h1").innerText = data;
    event.target.value = "";
});

$("#hideh1").on("click", function () {
    // $("h1").hide("h1");
    // $("h1").show("h1");
    // $("h1").toggle("h1");

    // $("h1").fadeOut("h1");
    // $("h1").fadeIn("h1");
    $("h1").fadeToggle("h1");
});
