jQuery(document).ready(function($) {
 
/*-----------------------------------------------------------------------------------*/
/*  video js lightbox - zyfer digital labs - http://www.zyferdigital.com
/*-----------------------------------------------------------------------------------*/
 
        $(".video-lightbox").on("click",function(e){
            e.preventDefault(); //prevent the click from opening the page
 
            //get the full video src based on the link href
        var video = $(this).attr("href");
 
        //get only the name of the src with the .mp4 extension becuase we want to use it with 3 different extensions (.mp4,.webm,.ogv)
        var video_src = video.replace(/.[(a-zA-Z)|\d]+$/,"");
 
        if ($('#lightbox').length > 0) { // #lightbox exists
 
        //loop through the video src tags and set the new source
        $(".v_source").each(function(){
                    v_replace = $(this).attr("src"); // get the current source
                    var new_source = v_replace.replace(/(.*)\./,video_src); // replace everything before the extension
                    $(this).attr("src",new_source); // set the new src
                });
 
                //set the video default src
                $(".vjs-tech").attr("src",video);
 
      } else {
 
                var lightbox =
            '<div class="container">' + 
            '<div id="overlay"></div>' + 
                '<div id="lightbox" style="display:none;">' +
                    '<a class="lightbox_close" href="#">close</a>' +
                        '<video id="video_html5" class="video-js vjs-default-skin" controls preload="auto" width="640" height="480">' +
                         '<source src="' + video_src + '.mp4" type="video/mp4" class="v_source" />' +
                         '<source src="' + video_src + '.webm" type="video/webm" class="v_source" />' +
                         '<source src="' + video_src + '.ogv" type="video/ogg" class="v_source" />' +
                        '</video>' +
                '</div>'
                '</div>';
            //insert lightbox HTML into page
            $('body').append(lightbox);
 
        };
 
        //initialize the video js player
        videojs("video_html5", {}, function(){
              // Player (this) is initialized and ready.
            });
 
            //fade in the lightbox and overlay
            $('#lightbox, #overlay').fadeIn();
        });
 
        $(document).on('click', '.lightbox_close',function(e){
            e.preventDefault();
 
            //stop the video from playing
            $(".video-js")[0].player.pause();
 
            //fade out the lightbox and overlay
            $('#lightbox, #overlay').fadeOut();
        });
 
});
