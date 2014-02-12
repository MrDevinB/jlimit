/* Created by Devin Barth 
 * https://github.com/MrDevinB
 */
(function($){
  $.fn.jlimit = function(options){
          var settings = {
              'limitby': 'words',                     //Can limit based on words or letters.
              'count': 40,                            //Amount of words or characters to limit to.
              'link': false,                          //Whether or not a link will be added to end of output.
              'linktext': 'Continue reading',         //Self explanitory
              'linkaction': 'show',                   //What do you want the link to do. Options: show, link
              'linktarget': '_self',                   //What do you want the link to do. Options: show, link
              'url': null                             //url to link to if you link out. NOTE: Link must be set to true, linkaction must be set to link
          }
          if(options){$.extend(settings, options);}
          var O=new Array(),output='';
          O[0]='';
          O[1]='';
          var lW = (settings.limitby=='words')? true : false;
          var A = (lW)? this.text().split(' ') : this.text().split('');
          if(A.length>settings.count){
              for(i=0;i<settings.count;i++){
                  O[0]+=A[i];
                  O[0]+=(lW)? ' ' : '';
              }
              for(i=settings.count;i<A.length;i++){
                  O[1]+=A[i];
                  O[1]+=(lW)? ' ' : '';
              }
          }

          output = (settings.link)? O[0]+'<span class="jl-hidden" style="display:none;">'+O[1]+'</span>' : O[0];
          output += (settings.link && settings.linkaction=='show')? '<span id="jl-expand" style="cursor:pointer;">'+settings.linktext+'</span>' : '';
          output += (settings.link && settings.linkaction=='link')? '<a href="'+setings.url+'" target="'+settings.linktarget+'">'+settings.linktext+'</a>' : '';

          $('#jl-expand').live('click', function(){
              $('.jl-hidden').show();
              $(this).hide();
          })

          this.html(output);
      };
})(jQuery);