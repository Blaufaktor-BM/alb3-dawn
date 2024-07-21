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
  });

  function deferAutorbox() {
    if (window.jQuery) {
        $("#toc").html(getToC());
        setColorClass("{{ color }}");
        setAutor("{{ autor }}");
    }
    else {
        setTimeout(function() { deferAutorbox() }, 50);
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

function setColorClass(color) {
    var c = 'green' // default
    switch(color) {
        case 'green':
            c = '{{ green }}';
            break;
        case 'orange':
            c = '{{ orange }}';
            break;
        case 'blue':
            c = '{{ blue }}';
            break;
        case 'purple':
            c = '{{ purple }}';
            break;
        case 'rose':
            c = '{{ rose }}';
            break;
    }
    $('#toc').closest("[data-pf-type='Section']").addClass(c);
}

function setAutor(autor) {
    // default
    var a_img = 'https://cdn.shopify.com/s/files/1/0278/5483/1715/t/10/assets/pf-d5d3b9d0--albfilterportraitben_150x.png';
    var a_name = 'Benjamin Maywald';
    var a_pos = 'Co-Founder Alb Filter';

    switch(autor) {
        case 'BM':
            a_img = '{{ a_img_bm }}';
            a_name = '{{ a_name_bm }}';
            a_pos =  '{{ a_pos_bm }}';
            break;
        case 'PL':
            a_img = '{{ a_img_pl }}';
            a_name = '{{ a_name_pl }}';
            a_pos =  '{{ a_pos_pl }}';
            break;
        case 'TM':
            a_img = '{{ a_img_tm }}';
            a_name = '{{ a_name_tm }}';
            a_pos =  '{{ a_pos_tm }}';
            break;
        case 'JR':
            a_img = '{{ a_img_jr }}';
            a_name = '{{ a_name_jr }}';
            a_pos =  '{{ a_pos_jr }}';
            break;
        case 'CM':
            a_img = '{{ a_img_cm }}';
            a_name = '{{ a_name_cm }}';
            a_pos =  '{{ a_pos_cm }}';
            break;
        case 'TK':
            a_img = '{{ a_img_tk }}';
            a_name = '{{ a_name_tk }}';
            a_pos =  '{{ a_pos_tk }}';
            break;
        case 'LMI':
            a_img = '{{ a_img_lmi }}';
            a_name = '{{ a_name_lmi }}';
            a_pos =  '{{ a_pos_lmi }}';
            break;
        case 'AC':
            a_img = '{{ a_img_ac }}';
            a_name = '{{ a_name_ac }}';
            a_pos =  '{{ a_pos_ac }}';
            break;
        case 'MT':
            a_img = '{{ a_img_mt }}';
            a_name = '{{ a_name_mt }}';
            a_pos =  '{{ a_pos_mt }}';
            break;
    }
    $('.autorenbox .autoreninfo img').attr('src', a_img);
    $('.autorenbox .autoreninfo img').attr('srcset', a_img);
    $('.autorenbox .autoreninfo img').attr('data-srcset', a_img);

    $('.autorenbox .autoreninfo .autorname').html(a_name);
    $('.autorenbox .autoreninfo .autorpos').html(a_pos);
}

function getToC() {
    var title, link, iter = 0, tocfound = false;

    // alle Heading Element sammeln
    var hElements = [];
    $('.main-content h2, .main-content h3, .main-content h4').each(function(i,e) {
        hElements.push($(this));
    });
    hElements = unique(hElements);
    //console.log(hElements);

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