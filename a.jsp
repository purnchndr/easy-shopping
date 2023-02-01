<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ page import="demo.*" %>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/productCard.css">
            <link rel="stylesheet" href="css/homepage.css">


            <link rel="shortcut icon" href="img/icon.png" type="image/x-icon">

            <title>Easy Shopping</title>
        </head>

        <body onload="prDLoad()">
            <% if(request.getParameter("submit")!=null){ int id=Integer.parseInt(request.getParameter("va")); %>
                <input type="hidden" value=<%=id%> id="" name="hidd" >
                <%}%>


                    <section class="header">
                        <header>
                            <div id="head">
                                <div id="logo" class="navbar">
                                    <h1>Easy-Shopping</h1>
                                    <p>Traditional Indian Store</p>
                                </div>
                                <div class="navbar">
                                    <p><a href="#">Home</a></p>
                                    <p><a href="#">Orders</a></p>
                                    <p><a href="#">Become Social</a></p>
                                    <p><a href="#">Contact</a></p>
                                    <div class="navbar search">
                                        <input type="text" placeholder="Search Products">
                                        <button type="submit">🔍</button>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </section>
                    <section>
                        <div class="pro">
                            <div class="img">
                                <div class="otherImg">
                                    <img id="img1" src="pr/A011.webp" alt="">
                                    <img id="img2" src="pr/A012.webp" alt="">
                                    <img id="img3" src="pr/A013.webp" alt="">
                                </div>
                                <div class="mainImg">
                                    <img id="img" src="pr/A011.webp" alt="">
                                </div>
                            </div>
                            <div class="data">
                                <h1 id="prN">Product Name</h1>
                                <p id="prR">Ratings: ⭐⭐⭐⭐⭐</p>
                                <p>Special Price</p>
                                <h3 id="prSp">89</h3>
                                <p id="prP">120</p> <span>25% off</span>
                                <p>Hurry up only <span id="prS">50</span> left</p>
                                <p>Enter Your Pincode to check delivery date.</p>
                                <input type="number" onchange="checkPin()" placeholder="PinCode">
                                <p id="prPd">product details</p>
                            </div>
                        </div>
                    </section>
        </body>


        <script src="js/details.js">

        </script>

        </html>