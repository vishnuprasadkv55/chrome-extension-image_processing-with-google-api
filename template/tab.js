function animatePictures() {
  // jQuery('img').each(function(i) {
  //    jQuery(this).delay(i * 250).fadeIn(5000);
  //  });
}

var imgUrl;
var b;
var a=[];
var b;
var flag=false;
var ref=['mountains','hills','hill','mountain','snow','snowfall','cloud','wilderness','atmosphere','nature','wilderness'];

setTimeout(getImage, 5000);
$('#switcheroo').click(function(){
  var quote;
  var requestQuote = new XMLHttpRequest();
requestQuote.open("GET", "https://talaikis.com/api/quotes/random/", true);
requestQuote.onload = () => {quote=requestQuote.responseText;
  quote=JSON.parse(quote);
$( "quote" ).remove( "#quotes" );
$('#quote').append('<quote id="quotes"></quote>')
  $('#quotes').append('<h2>'+quote.quote+'</h2></br><h2>'+quote.author+'</h2');
}
requestQuote.send();
});
// $( "#canvas" ).dblclick(function() {
//   getImage();
// });

function getImage() {
var request = new XMLHttpRequest();
request.open("GET", "https://unsplash.it/1920/1080?random", true);
request.onload = () => {imgUrl=request.responseURL;
  $('#zoominheader').append('<img class="Img" src="' +request.responseURL+ '" /> ');
  b=JSON.stringify({"requests":[{  "image":{    "source":{"imageUri":request.responseURL}}  ,  "features": [{"type":"LABEL_DETECTION","maxResults":5}]    } ]});
  console.log(b);
  cloudVision(b);

requestQuote.send();
}
request.send();
}
//image
function cloudVision(b){
var e=new XMLHttpRequest;
e.onload=function(){
  var p=[];
  console.log('-----');
  console.log(e.responseText);
  var p=JSON.parse(e.responseText);
  testNature(p.responses[0]);
};
e.open("POST","https://vision.googleapis.com/v1/images:annotate?key=*replace_this_with_your_google_cloud_key*",!0);
e.send(b);
}

function testNature(response){
  console.log('reached here');
  console.log(response);
  a.push('Extension with Built-In Image Processing');
  a.push('Says what you See !');
  response.labelAnnotations.forEach(function(element){a.push(element.description)});
  console.log(a);
  text();
  var i;


  // for(i=0;i<a.length;i++){
  // if(ref.indexOf(a[i])!= -1 ){
  //   flag = true;
  //   $('#canvas').addClass('anim');
  //   document.getElementById("canvas").style.display = "block";
  // }
  // }
  // console.log(flag);
}

// document.getElementById("christmas").addEventListener("click", function(){
//   flag = !flag;
//   if(flag){
//   snow();
//   } else{
//   }
//   // if(flag){
//   // $('#canvas').addClass('anim');
//   // document.getElementById("canvas").style.display = "block";
//   // } else{
//   //   document.getElementById("canvas").style.display = "none";
//   // }
// });



var i=0;
setInterval(function() {
  if(i==0){
    animatePictures(); 
    if(flag) {
    // snowStorm();
    }
    i=1;
    }
}, 1000);


(function() {
  var $hour, $humanTime, $minutes, $seconds, clockHeight, formatTime, getTime, renderTime, t, updateTime;

  $seconds = $('.seconds .time');

  $minutes = $('.minutes .time');

  $hour = $('.hour .time');

  $humanTime = $('#human-time');

  clockHeight = $('#bar-clock .hour').height();


  // Returns a current time object
  getTime = function() {
    var dateTime;
    dateTime = new Date();
    return {
      
      // Time object
      hour: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds()
    };

  };

  // Set column height based on time
  renderTime = function($el, time, duration) {
    var percentage;
    percentage = (clockHeight * time) / duration;
    $el.height(function() {
      return percentage;
    });
    return $el.css('background-color', `hsl(${percentage}, 50%, 50%)`);
  };

  // Format time at 2 digits
  formatTime = function(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  // The master function MASTER! MASTER!
  updateTime = function(time) {
    renderTime($seconds, time.seconds, 59);
    renderTime($minutes, time.minutes, 59);
    renderTime($hour, time.hour, 23);
    
    // Readable time for puny human beings
    return $humanTime.text(function() {
      var separator;
      separator = ' ';
      return formatTime(time.hour) + separator + formatTime(time.minutes) + separator + formatTime(time.seconds);
    });
  };

  // It keeps everything running
  t = setInterval(function() {
    return updateTime(getTime());
  }, 1000);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBOztFQUFBLFFBQUEsR0FBYyxDQUFBLENBQUUsZ0JBQUY7O0VBQ2QsUUFBQSxHQUFjLENBQUEsQ0FBRSxnQkFBRjs7RUFDZCxLQUFBLEdBQWMsQ0FBQSxDQUFFLGFBQUY7O0VBQ2QsVUFBQSxHQUFjLENBQUEsQ0FBRSxhQUFGOztFQUNkLFdBQUEsR0FBYyxDQUFBLENBQUUsa0JBQUYsQ0FBcUIsQ0FBQyxNQUF0QixDQUFBLEVBSmQ7OztFQU9BLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtBQUNSLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBSSxJQUFKLENBQUE7V0FHWCxDQUFBOzs7TUFBQSxJQUFBLEVBQVMsUUFBUSxDQUFDLFFBQVQsQ0FBQSxDQUFUO01BQ0EsT0FBQSxFQUFTLFFBQVEsQ0FBQyxVQUFULENBQUEsQ0FEVDtNQUVBLE9BQUEsRUFBUyxRQUFRLENBQUMsVUFBVCxDQUFBO0lBRlQ7RUFKUSxFQVBWOzs7RUFnQkEsVUFBQSxHQUFhLFFBQUEsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLFFBQVosQ0FBQTtBQUNYLFFBQUE7SUFBQSxVQUFBLEdBQWEsQ0FBQyxXQUFBLEdBQWMsSUFBZixDQUFBLEdBQXVCO0lBQ3BDLEdBQUcsQ0FBQyxNQUFKLENBQVcsUUFBQSxDQUFBLENBQUE7YUFBRztJQUFILENBQVg7V0FDQSxHQUFHLENBQUMsR0FBSixDQUFRLGtCQUFSLEVBQTRCLENBQUEsSUFBQSxDQUFBLENBQU8sVUFBUCxDQUFrQixXQUFsQixDQUE1QjtFQUhXLEVBaEJiOzs7RUFzQkEsVUFBQSxHQUFhLFFBQUEsQ0FBQyxJQUFELENBQUE7SUFBVSxJQUFHLElBQUEsR0FBTyxFQUFWO2FBQWtCLEdBQUEsR0FBTSxLQUF4QjtLQUFBLE1BQUE7YUFBa0MsS0FBbEM7O0VBQVYsRUF0QmI7OztFQXlCQSxVQUFBLEdBQWEsUUFBQSxDQUFDLElBQUQsQ0FBQTtJQUNYLFVBQUEsQ0FBVyxRQUFYLEVBQXFCLElBQUksQ0FBQyxPQUExQixFQUFtQyxFQUFuQztJQUNBLFVBQUEsQ0FBVyxRQUFYLEVBQXFCLElBQUksQ0FBQyxPQUExQixFQUFtQyxFQUFuQztJQUNBLFVBQUEsQ0FBVyxLQUFYLEVBQXFCLElBQUksQ0FBQyxJQUExQixFQUFtQyxFQUFuQyxFQUZBOzs7V0FLQSxVQUFVLENBQUMsSUFBWCxDQUFnQixRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUE7TUFBQSxTQUFBLEdBQVk7YUFDWixVQUFBLENBQVcsSUFBSSxDQUFDLElBQWhCLENBQUEsR0FBMkIsU0FBM0IsR0FDQSxVQUFBLENBQVcsSUFBSSxDQUFDLE9BQWhCLENBREEsR0FDMkIsU0FEM0IsR0FFQSxVQUFBLENBQVcsSUFBSSxDQUFDLE9BQWhCO0lBSmMsQ0FBaEI7RUFOVyxFQXpCYjs7O0VBc0NBLENBQUEsR0FBSSxXQUFBLENBQVksUUFBQSxDQUFBLENBQUE7V0FDVixVQUFBLENBQVcsT0FBQSxDQUFBLENBQVg7RUFEVSxDQUFaLEVBRUUsSUFGRjtBQXRDSiIsInNvdXJjZXNDb250ZW50IjpbIiRzZWNvbmRzICAgID0gJCgnLnNlY29uZHMgLnRpbWUnKVxuJG1pbnV0ZXMgICAgPSAkKCcubWludXRlcyAudGltZScpXG4kaG91ciAgICAgICA9ICQoJy5ob3VyIC50aW1lJylcbiRodW1hblRpbWUgID0gJCgnI2h1bWFuLXRpbWUnKVxuY2xvY2tIZWlnaHQgPSAkKCcjYmFyLWNsb2NrIC5ob3VyJykuaGVpZ2h0KClcblxuIyBSZXR1cm5zIGEgY3VycmVudCB0aW1lIG9iamVjdFxuZ2V0VGltZSA9IC0+XG4gIGRhdGVUaW1lID0gbmV3IERhdGUoKVxuICBcbiAgIyBUaW1lIG9iamVjdFxuICBob3VyOiAgICBkYXRlVGltZS5nZXRIb3VycygpXG4gIG1pbnV0ZXM6IGRhdGVUaW1lLmdldE1pbnV0ZXMoKVxuICBzZWNvbmRzOiBkYXRlVGltZS5nZXRTZWNvbmRzKClcblxuIyBTZXQgY29sdW1uIGhlaWdodCBiYXNlZCBvbiB0aW1lXG5yZW5kZXJUaW1lID0gKCRlbCwgdGltZSwgZHVyYXRpb24pIC0+XG4gIHBlcmNlbnRhZ2UgPSAoY2xvY2tIZWlnaHQgKiB0aW1lKSAvIGR1cmF0aW9uXG4gICRlbC5oZWlnaHQgLT4gcGVyY2VudGFnZVxuICAkZWwuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgXCJoc2woI3twZXJjZW50YWdlfSwgNTAlLCA1MCUpXCIpXG5cbiMgRm9ybWF0IHRpbWUgYXQgMiBkaWdpdHNcbmZvcm1hdFRpbWUgPSAodGltZSkgLT4gaWYgdGltZSA8IDEwIHRoZW4gXCIwXCIgKyB0aW1lIGVsc2UgdGltZVxuXG4jIFRoZSBtYXN0ZXIgZnVuY3Rpb24gTUFTVEVSISBNQVNURVIhXG51cGRhdGVUaW1lID0gKHRpbWUpIC0+XG4gIHJlbmRlclRpbWUgJHNlY29uZHMsIHRpbWUuc2Vjb25kcywgNTlcbiAgcmVuZGVyVGltZSAkbWludXRlcywgdGltZS5taW51dGVzLCA1OVxuICByZW5kZXJUaW1lICRob3VyLCAgICB0aW1lLmhvdXIsICAgIDIzXG4gIFxuICAjIFJlYWRhYmxlIHRpbWUgZm9yIHB1bnkgaHVtYW4gYmVpbmdzXG4gICRodW1hblRpbWUudGV4dCAtPlxuICAgIHNlcGFyYXRvciA9ICcgJ1xuICAgIGZvcm1hdFRpbWUodGltZS5ob3VyKSAgICArIHNlcGFyYXRvciArIFxuICAgIGZvcm1hdFRpbWUodGltZS5taW51dGVzKSArIHNlcGFyYXRvciArIFxuICAgIGZvcm1hdFRpbWUodGltZS5zZWNvbmRzKVxuXG4jIEl0IGtlZXBzIGV2ZXJ5dGhpbmcgcnVubmluZ1xudCA9IHNldEludGVydmFsKC0+IFxuICAgICAgdXBkYXRlVGltZShnZXRUaW1lKCkpXG4gICAgLCAxMDAwKSJdfQ==
//# sourceURL=coffeescript
//# snowww endsss
//disable inspect
// $(document).bind("contextmenu",function(e) {
//   e.preventDefault();
//  });

//  $(document).keydown(function(e){
//   if(e.which === 123){
//      return false;
//   }
// });


//disable inspect

// text
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
var
TextScramble = function () {
  function TextScramble(el) {_classCallCheck(this, TextScramble);
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }_createClass(TextScramble, [{ key: 'setText', value: function setText(
    newText) {var _this = this;
      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {return _this.resolve = resolve;});
      this.queue = [];
      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from: from, to: to, start: start, end: end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    } }, { key: 'update', value: function update()
    {
      var output = '';
      var complete = 0;
      for (var i = 0, n = this.queue.length; i < n; i++) {var _queue$i =
        this.queue[i],from = _queue$i.from,to = _queue$i.to,start = _queue$i.start,end = _queue$i.end,char = _queue$i.char;
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += '<span class="dud">' + char + '</span>';
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    } }, { key: 'randomChar', value: function randomChar()
    {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    } }]);return TextScramble;}();


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

function text(){
var phrases = a;
// [
// 'Neo,',
// 'sooner or later',
// 'you\'re going to realize',
// 'just as I did',
// 'that there\'s a difference',
// 'between knowing the path',
// 'and walking the path'];


var el = document.querySelector('.text');
var fx = new TextScramble(el);

var counter = 0;
var next = function next() {
  fx.setText(phrases[counter]).then(function () {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();
}
// text

// glass
//////./
/////// 
//////   Click on the Google Glass
/////    in the demo to toggle...
//// 
///
//



// Just a little javascript to get your time...
var message;
var time = new Date();
var h = time.getHours();
if (h >= 12) {
    message = "good afternoon";
} else if (h > 15) {
  message = "good evening";
} else {
  message = "good morning";
}
var m = time.getMinutes();
if (m < 10){ m = "0" + m;  }

$("time").text(message);

//glass