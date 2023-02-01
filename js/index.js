// $("body").on("click", "addCart , buyNow", function () {
//   console.log(this);
// });
// import productList from "./Products.json";

//console.log(data);
var productId = 1;

$(".addCart, .buyNow").click(function () {
  productId = $(this).siblings("h1").attr("id");
  productId = Number(productId.substring(0, productId.length - 1));
  localStorage.setItem("productId", productId);
});

var prName = "Product Name";
var prDetails = "Good Product";
var prPrice = "89";
var prStok = "100";
var prRating = "5";

// let index = document.getElementById("44").value;
var index = localStorage.getItem("productId");

// document.getElementById("value").value = index;

function prDLoad() {
  prName = productList.list[index - 1].ProductName;
  prDetails = productList.list[index - 1].ProductDetail;
  prPrice = productList.list[index - 1].Price;
  prStok = productList.list[index - 1].Stock;
  prRating = productList.list[index - 1].Ratings;

  document.getElementById("prN").innerText = prName;
  document.getElementById("prP").innerText = prPrice;
  var dis = (prPrice / 100) * 25;
  var num = parseInt(prPrice - dis);
  document.getElementById("prSp").innerText = num;
  document.getElementById("prPd").innerText = prDetails;
  document.getElementById("prS").innerText = prStok;
  let r = "⭐⭐⭐⭐⭐";
  if (prRating == 4) r = "⭐⭐⭐⭐";
  document.getElementById("prR").innerText = r;

  // chage images
  var i1 = document.getElementById("img1");
  var i2 = document.getElementById("img2");
  var i3 = document.getElementById("img3");
  var im = document.getElementById("img");
  im.src = image1;
  i1.src = image1;
  i2.src = image2;
  i3.src = image3;
  console.log(image1);
  console.log(image2);
  console.log(image3);
}

var image1 = "pr/A011.webp";
var image2 = "pr/A012.webp";
var image3 = "pr/A013.webp";
if (index <= 10) {
  if (index == 10) {
    image1 = "pr/A" + index + 1 + ".webp";
    image2 = "pr/A" + index + 2 + ".webp";
    image3 = "pr/A" + index + 3 + ".webp";
  } else {
    image1 = "pr/A0" + index + 1 + ".webp";
    image2 = "pr/A0" + index + 2 + ".webp";
    image3 = "pr/A0" + index + 3 + ".webp";
  }
} else if (index <= 20) {
  var i = index + "";
  i = i.slice(1, 2);
  if (index == 20) {
    image1 = "pr/B" + 101 + ".webp";
    image2 = "pr/B" + 102 + ".webp";
    image3 = "pr/B" + 103 + ".webp";
  } else {
    image1 = "pr/B0" + i + 1 + ".webp";
    image2 = "pr/B0" + i + 2 + ".webp";
    image3 = "pr/B0" + i + 3 + ".webp";
  }
} else if (index <= 30) {
  var i = index + "";
  i = i.slice(1, 2);
  if (index == 30) {
    image1 = "pr/C" + 101 + ".webp";
    image2 = "pr/C" + 102 + ".webp";
    image3 = "pr/C" + 103 + ".webp";
  } else {
    image1 = "pr/C0" + i + 1 + ".webp";
    image2 = "pr/C0" + i + 2 + ".webp";
    image3 = "pr/C0" + i + 3 + ".webp";
  }
} else if (index <= 40) {
  var i = index + "";
  i = i.slice(1, 2);
  if (index == 40) {
    image1 = "pr/D" + 101 + ".webp";
    image2 = "pr/D" + 102 + ".webp";
    image3 = "pr/D" + 103 + ".webp";
  } else {
    image1 = "pr/D0" + i + 1 + ".webp";
    image2 = "pr/D0" + i + 2 + ".webp";
    image3 = "pr/D0" + i + 3 + ".webp";
  }
} else if (index <= 50) {
  var i = index + "";
  i = i.slice(1, 2);
  if (index == 50) {
    image1 = "pr/E" + 101 + ".webp";
    image2 = "pr/E" + 102 + ".webp";
    image3 = "pr/E" + 103 + ".webp";
  } else {
    image1 = "pr/E0" + i + 1 + ".webp";
    image2 = "pr/E0" + i + 2 + ".webp";
    image3 = "pr/E0" + i + 3 + ".webp";
  }
}

function change(num) {
  var i1 = document.getElementById("img1");
  var i2 = document.getElementById("img2");
  var i3 = document.getElementById("img3");
  var im = document.getElementById("img");
  if (num == 1) {
    i1.style.border = "5px inset rgb(46, 87, 52)";
    i2.style.border = "5px inset rgb(99, 196, 113)";
    i3.style.border = "5px inset rgb(99, 196, 113)";
    im.src = image1;
  } else if (num == 2) {
    i1.style.border = "5px inset rgb(99, 196, 113)";
    i2.style.border = "5px inset rgb(46, 87, 52)";
    i3.style.border = "5px inset rgb(99, 196, 113)";
    im.src = image2;
  } else if (num == 3) {
    i1.style.border = "5px inset rgb(99, 196, 113)";
    i2.style.border = "5px inset rgb(99, 196, 113)";
    i3.style.border = "5px inset rgb(46, 87, 52)";
    im.src = image3;
  }
}
