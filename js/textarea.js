var text_max = 120;
$('#count_message').html('0 / 120');

$('#text').keyup(function() {
  var text_length = $('#text').val().length;
  
  $('#count_message').html(text_length + ' / 120');
});
//-----------------------------
$('#count_ancInput').html('0 / 120');

$('#ancInput').keyup(function() {
  var text_length = $('#ancInput').val().length;
  
  $('#count_ancInput').html(text_length + ' / 120');
});
//------------------------------------
$('#count_anc2').html('0 / 120');

$('#anc2').keyup(function() {
  var text_length = $('#anc2').val().length;
  
  $('#count_anc2').html(text_length + ' / 120');
});

//-------------------------------
$('#count_anc3').html('0 / 120');

$('#anc3').keyup(function() {
  var text_length = $('#anc3').val().length;
  
  $('#count_anc3').html(text_length + ' / 120');
});
//------------------------------
$('#count_descr2').html('0 / 120');

$('#descr2').keyup(function() {
  var text_length = $('#descr2').val().length;
  
  $('#count_descr2').html(text_length + ' / 120');
});
//------------------------------
$('#count_descr1').html('0 / 120');

$('#descr1').keyup(function() {
  var text_length = $('#descr1').val().length;
  
  $('#count_descr1').html(text_length + ' / 120');
});