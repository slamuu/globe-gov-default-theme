(function($){
  $.flowplayer_instances = {};
  
  $(function() {
    var videos = $('.video-container');
    var swfpath = '/globe-gov-default-theme/flowplayer/flowplayer-3.2.12.swf';
    
    if (videos.length) {
      videos.each(function(i,v) {
        var instanceid = 'flowplayer-instance-' + i;
        var url = $(this).attr('data-video-src');
        var config = $(this).attr('data-video-config') || {};
        if (config.length && typeof config == 'string') {
          config = $.parseJSON(decodeURIComponent(config)) || {};
        }
        $(this).empty().attr('id', instanceid);
        
        var anchor = document.createElement('a');
        anchor.href = url;
        
        $.flowplayer_instances[instanceid] = flowplayer(instanceid, swfpath, $.extend(true, config, {
          clip: {
            'url': anchor.href,
            'autoPlay': false,
            'autoBuffering': true,
            'scale': 'fit'
          }
        }));
        $.flowplayer_instances[instanceid].ipad();
      });
    }
  });
})(jQuery);