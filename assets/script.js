$(document).ready(function() {
    $('.media-video_popup').click(function() {
      var url = $(this).attr('data-url');
      $(this).parents('.section-video_popup').find('.video-popup').fadeIn();
      $(this).parents('.section-video_popup').find('.video-popup-url').attr('src', url);
    });
    $('.video-popup-close').click(function() {
      $(this).parents('.section-video_popup').find('.video-popup').fadeOut();
      $(this).parents('.section-video_popup').find('.video-popup-url').trigger('pause');
      $(this).parents('.section-video_popup').find('.video-popup-url').removeAttr('src');
    });
    $('.video-popup_bg').click(function() {
      $(this).parents('.section-video_popup').find('.video-popup').fadeOut();
      $(this).parents('.section-video_popup').find('.video-popup-url').trigger('pause');
      $(this).parents('.section-video_popup').find('.video-popup-url').removeAttr('src');
    });
    $('.mega-menu__link').hover(function() {
      var title = $(this).attr('data-title');
      $(this).parents('.mega-menu__list').find('.mega-menu__link').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.mega-menu-wrapper').find('.mega-menu-item').removeClass('active');
      $(this).parents('.mega-menu-wrapper').find('.mega-menu-item[data-title="'+ title +'"]').addClass('active');
    }, function() {
    });
    $('.mega-menu__content').hover(function() {
    }, function() {
      $(this).find('.mega-menu__link').removeClass('active');
      $(this).find('.mega-menu-item').removeClass('active');
      $(this).find('.mega-menu__link.first-menu').addClass('active');
      $(this).find('.mega-menu-item.first-menu').addClass('active');
    });
    $('.menu-drawer__menu-item').click(function() {
      if($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).parent().find('.menu-drawer__submenu').fadeOut();
      }
      else {
        $(this).parent().addClass('active');
        $(this).parent().find('.menu-drawer__submenu').fadeIn();
      }
    });
    $('.contact-tab-item').click(function() {
      $('.contact-tab-item').removeClass('active');
      $(this).addClass('active');
      var index = $(this).index() + 1;
      $('.contact-tab-content-item').removeClass('active');
      $('.contact-tab-content-item:nth-child('+ index +')').addClass('active');
    });
  });

function deferAutorbox() {
  if (window.jQuery) {
      $("#toc").html(getToC());
      
  }
}

function unique(list) {
    var returnlist = [];
    var seen = {};
    $.each(list, function() {
        var txt = $(this).text();
        if (seen[txt]) {
            $(this).remove();
        }
        else {
            returnlist.push($(this));
            seen[txt] = true;
        }
    });
    return returnlist;
}

function getToC() {
    var title, link, iter = 0, tocfound = false;

    // alle Heading Element sammeln
    var hElements = [];
    $('#MainContent h2, #MainContent h3, #MainContent h4').each(function(i,e) {
        hElements.push($(this));
    });
    hElements = unique(hElements);
    // console.log(hElements);

    // ToC wrapper
    var ToC = "<nav role='navigation'>";
    ToC += '<ul style="--text-indent: 0px; --line-spacing: 3px;">';

    $(hElements).each(function(i, e) {

        lastHeadingIndex = (typeof hElements[i-1] === 'undefined') ? 0 : hElements[i-1].prop('tagName').substring(1);
        currentHeadingIndex = e.prop('tagName').substring(1);
        nextHeadingIndex = (typeof hElements[i+1] === 'undefined') ? 0 : hElements[i+1].prop('tagName').substring(1);

        // toc-found = TOC Verzeichnis erst erstellen mit Überschriften nach dem Inhaltsverzeichnis
        if(e.attr('id') == 'toc')
        tocfound = true;

        e.attr('id', 'nav_' + i); // überschriften mit anker elementen versehen
        title = e.text();
        link = "#" + e.attr("id");

        if(e.prop('nodeName') != 'H1') {
            if (nextHeadingIndex > currentHeadingIndex) {
                ToC += '<li><a href="' + link + '">' + title + '</a>';
                ToC += '<ul class="subtoc">';
            }
            if (nextHeadingIndex == currentHeadingIndex) {
                ToC += '<li><a href="' + link + '">' + title + '</a></li>';
            }
            if (nextHeadingIndex < currentHeadingIndex) {
                ToC += '<li><a href="' + link + '">' + title + '</a></li>';
                ToC += '</ul>';
                if(currentHeadingIndex - nextHeadingIndex == 2) { // sprung von h4 auf h2
                    ToC += '</li></ul>';
                }
            }
        }
        iter++;
    });

    // ToC Wrapper Close
    ToC += '</ul></nav>';
    if(iter > 1)
        return ToC;
    else
        return '';
}

document.addEventListener("DOMContentLoaded", function(event) { 
    deferAutorbox()
});