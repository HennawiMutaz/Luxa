/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        loop: true,
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    });




  // watches
    $('#watch .owl-carousel').owlCarousel({
      pagination: false,
      margin:10 ,
      navigation:true,
      navigationText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
      items: 3,
  })

  // ! watches section functionality

  const owlItems = document.querySelectorAll('#watch .item img');
  owlItems.forEach(show);


  const newDiv = document.createElement('div');
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas');
  closeBtn.classList.add('fa-times');
  newDiv.classList.add('hide');
  const innerDiv = document.createElement('div');
  const divImg =  document.createElement('img');
  const divContent =  document.createElement('article');
  const contentBtn = document.createElement('a');
  contentBtn.href = "#";

  // title
  const title = document.createElement("h1");
  title.innerHTML = "name<br><span>price</span><br><br><p>text</p>";
  contentBtn.innerHTML = "Buy Now";
  // append content to article
  divContent.appendChild(title);
  divContent.appendChild(contentBtn);
  // append all to inner div
  innerDiv.appendChild(divImg);
  innerDiv.appendChild(divContent);
  innerDiv.appendChild(closeBtn);
  // append all to outer div
  newDiv.appendChild(innerDiv);
  document.querySelector('#watch').appendChild(newDiv);
  

  function show (item) {
    item.addEventListener('click', (e) => {
      divImg.src = e.currentTarget.getAttribute('src');
      const id = e.currentTarget.dataset.name;
      title.innerHTML = `${obj[id].name}<br><span>${obj[id].price}</span><br><br><p>${obj[id].text}</p>`;
      newDiv.classList.add('show-watch');
      newDiv.classList.remove('hide');
  });
} //end of fun


  closeBtn.addEventListener('click', () => {
      newDiv.classList.remove('show-watch');
      newDiv.classList.add('hide');
  });

const obj = {
  watch1: {
    name: 'Submariner',
    price: '$120.00',
    text: 'Launched in 1953, the Submariner was the first divers’ wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet).',
  },

  watch2: {
    name: 'Datejust',
    price: '$100.00',
    text: 'We present four white Rolesor versions (combining Oystersteel and 18 ct white gold) of the Oyster Perpetual Datejust 31. The first watch, featuring a bezel set with 46 brilliant-cut diamonds, has an aubergine, sunray-finish dial that is adorned with a diamond-set Roman VI. The three other versions are fitted respectively with a mint green, sunray-finish dial, white lacquer dial, or dark grey, sunray-finish dial, and a fluted bezel in 18 ct white gold. The hands and index hour markers or Roman numerals on all four watches are in 18 ct white gold. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case.',
  },

  watch3: {
    name: 'Oyster Perpetual',
    price: '$320.00',
    text: 'We present the new generation of its Oyster Perpetual watches and brings a new model to the range, the Oyster Perpetual 41, as well as versions of the Oyster Perpetual 36 displaying dials in vivid colours. The light reflections on the case sides highlight the elegant profile of the Oyster case, which is made from Oystersteel. Measuring 41 mm or 36 mm respectively, it is fitted with a domed bezel.',
  },

  watch4: {
    name: 'Sky-Dweller',
    price: '$220.00',
    text: 'We present an 18 ct yellow gold version of its Oyster Perpetual Sky-Dweller, fitted with an Oysterflex bracelet. The watch is the first in the Classic category to include this innovative bracelet made of high-performance elastomer. It also features a bright black, sunray-finish dial with hands and hour markers in 18 ct yellow gold. The light reflections on the case sides and lugs highlight the refined profile of the 42 mm Oyster case.',
  },

  watch5: {
    name: 'Yacht-Master',
    price: '$350.00',
    text: 'Inspired by the rich heritage that has bound Rolex to the world of sailing since the 1950s, the Yacht-Master blends function and style, while the Yacht-Master II brings together the finest in Rolex technology to create a regatta chronograph built for yachting competition'
  },

  watch6: {
    name: 'Cellini',
    price: '$280.00',
    text: 'This collection combines the best of Rolex know-how and its high standards of perfection with an approach that heightens watchmaking heritage in its most timeless form.  The lines of the Cellini models are sober and refined, the materials noble, the finishings luxurious: every detail respects the codes of the art of watchmaking',
  },

  watch7: {
    name: 'Air-King',
    price: '$100.00',
    text: 'With its 40mm case in Oystersteel, solid-link Oyster bracelet with Oysterclasp, and distinctive black dial, the Air-King perpetuates the aeronautical heritage of the original Rolex Oyster.',
  },
};

});





