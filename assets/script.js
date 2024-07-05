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