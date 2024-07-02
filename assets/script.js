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
  });