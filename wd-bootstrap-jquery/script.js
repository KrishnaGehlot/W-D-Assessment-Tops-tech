$(document).ready(function() {
    $("#calculateBtn").on("click", function() {
      var startDate = moment($("#startDate").val());
      var endDate = moment($("#endDate").val());

      var years = endDate.diff(startDate, 'years');
      startDate.add(years, 'years');

      var months = endDate.diff(startDate, 'months');
      startDate.add(months, 'months');

      var weeks = endDate.diff(startDate, 'weeks');
      startDate.add(weeks, 'weeks');

      var days = endDate.diff(startDate, 'days');

      var resultText = ' In years: '+ years ; 
      $("#result1").text(resultText);
      var resultText =  'In months:, ' + months;
      $("#result2").text(resultText);
      var resultText = 'In weeks:' + weeks;
      $("#result3").text(resultText);
      var resultText = 'In days:' + days;
      $("#result4").text(resultText);
    });
  });