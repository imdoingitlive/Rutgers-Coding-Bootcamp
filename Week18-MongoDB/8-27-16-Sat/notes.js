//this looks in divs with class title, then p inside of div, then h1 inside of p
//the space means a new element
$('div.title p.a h1.b')

//do this in console for reddit.com
$('p.title')

//to get the immediate child 
$('article > h2')
  //<article>
      //<h2></h2>
  //</article>

//both classes
$('.article.h2')
  //<div class="article h2"></div>