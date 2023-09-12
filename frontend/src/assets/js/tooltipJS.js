$(document).ready(function () {

  $('#tooltipEvents').tooltipster({
    //'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'click',
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentEvents').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {
    },
  });

  $('#tooltipIndicators').tooltipster({
    //'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'click',  //hover
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentIndicators').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {

    },

  });

  $('#tooltipMetrics').tooltipster({
    //'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'click',
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentMetrics').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {

    },

  });

  $('#tooltipActivites').tooltipster({
    //'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'click',
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentActivites').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {

    },

  });

  $('#tooltipHeaderLogo').tooltipster({
    'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'hover',
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentHeaderLogo').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {

    },

  });

  $('#tooltipHeaderLogo2').tooltipster({
    'theme': 'tooltipster-shadow',
    'interactive': true,
    'contentAsHTML': true,
    //'autoClose': true,
    'trigger': 'hover',
    functionInit: function (instance, helper) {
      var $origin = $(helper.origin);
      var content = $origin.find('#contentHeaderLogo2').detach();
      instance.content(content);

      var data = $origin.attr('data-tooltipster');
      if (data) {
        data = JSON.parse(data);
        $.each(data, function (name, option) {
          instance.option(name, option);
        });
      };
    },
    functionPosition: function (instance, helper, position) {

    },

  });

});