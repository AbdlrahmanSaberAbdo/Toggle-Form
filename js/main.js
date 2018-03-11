/* global $, jQuery, alerts */
$(function() {
  'use strict';
  // ========================================================================
  // Is to toggle between forms (login - signup) when the user click on title
  // ========================================================================
  $('.ls-page h1 span').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected')
    $('.ls-page form').hide()
    $('.' + $(this).data('class')).fadeIn(200)
  });
});
