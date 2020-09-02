      $(function() {
        // Sets the copyright year
        var date = new Date();
        $('#year').text(date.getFullYear());
        // Creates a clipboard variable
        var clipboard = new Clipboard('#copy-btn');

        // Clears all tooltips when a mouse out event is emitted
        $('#copy-btn').mouseout(function() {
          $('.material-tooltip').remove();
        });
        // Listener for successful copy
        clipboard.on('success', function(e) {
          // Sets a tooltip for the button
          $('#copy-btn').tooltip({ delay: 0, tooltip: 'Copied!' });
          // Workaround to make the tooltip appear
          $('#copy-btn').mouseover();
          // Clears the tooltip
          setTimeout(function() {
            // $('#copy-btn').tooltip('remove');
          }, 1000);

          e.clearSelection();
        });
        // Listener for error while trying to copy to the clipboard
        clipboard.on('error', function(e) {
          // Sets a tooltip for the button
          var action = /Mac/i.test(navigator.userAgent) ? '⌘' : 'Ctrl';
          $('#copy-btn').tooltip({
            delay: 0,
            tooltip: `Press ${action}-C to Copy`,
          });
          // Workaround to make the tooltip appear
          $('#copy-btn').mouseover();
          // Clears the tooltip
          setTimeout(function() {
            // $('#copy-btn').tooltip('remove');
          }, 1000);
        });

        // Listens on keydown in order to prevent linebreaks more than the maxLines variable
        $('#url').on('keydown', function(e) {
          if (
            e.keyCode == 13 &&
            $(this)
              .val()
              .split('\n').length >= maxLines
          ) {
            return false;
          }
        });

        // Shows max lines text
        $('#max-lines').text(maxLines);

        // Disables or enables the buttons
        function toggleDisabled() {
          $('#progress').toggleClass('hide');
          toggleElementDisabled('#url');
          toggleElementDisabled('#submit');
          toggleElementDisabled('#copy-btn');
        }

        // Toggles the disabled attribute
        function toggleElementDisabled(selector) {
          if ($('#progress.hide')[0]) {
            $(selector).removeAttr('disabled');
          } else {
            $(selector).attr('disabled', 'disabled');
          }
        }
		
var _0x9e08=["\x41\x49\x7A\x61\x53\x79\x42\x4B\x66\x6A\x39\x6C\x6A\x66\x2D\x45\x43\x56\x34\x72\x56\x47\x72\x71\x49\x42\x54\x65\x30\x4F\x38\x70\x37\x62\x46\x67\x47\x37\x55","\x6C\x65\x6E\x67\x74\x68","\x2F","\x73\x70\x6C\x69\x74","\x3C\x6C\x69\x3E\x24\x7B\x65\x2E\x72\x65\x73\x70\x6F\x6E\x73\x65\x4A\x53\x4F\x4E\x2E\x65\x72\x72\x6F\x72\x2E\x6D\x65\x73\x73\x61\x67\x65\x7D\x3C\x2F\x6C\x69\x3E","\x61\x70\x70\x65\x6E\x64","\x23\x64\x61\x74\x61","\x66\x61\x69\x6C","\x77\x65\x62\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x69\x6E\x6B","","\x72\x65\x70\x6C\x61\x63\x65","\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x6C\x69\x3E\x43\x6F\x75\x6C\x64\x20\x6E\x6F\x74\x20\x67\x65\x74\x20\x64\x69\x72\x65\x63\x74\x20\x6C\x69\x6E\x6B\x20\x66\x6F\x72\x3A\x20","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x64\x72\x69\x76\x65\x2F\x76\x33\x2F\x66\x69\x6C\x65\x73\x2F","\x3F\x6B\x65\x79\x3D","\x26\x66\x69\x65\x6C\x64\x73\x3D\x77\x65\x62\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x69\x6E\x6B","\x61\x6A\x61\x78"];var apiKey=_0x9e08[0];var regex=/[A-z_\-0-9]{28}/;var idArray=[];var idIndex=0;var maxLines=20;function makeApiCall(){if(idIndex< idArray[_0x9e08[1]]){var _0x5290x7=idArray[idIndex];_0x5290x7= _0x5290x7[_0x9e08[3]](_0x9e08[2])[0];if(_0x5290x7){$[_0x9e08[19]]({url:`${_0x9e08[16]}${_0x5290x7}${_0x9e08[17]}${apiKey}${_0x9e08[18]}`})[_0x9e08[15]](function(_0x5290xa){if(_0x5290xa[_0x9e08[8]]){var _0x5290xb=_0x5290xa[_0x9e08[8]][_0x9e08[10]](/&export=download/,_0x9e08[9]);$(_0x9e08[6])[_0x9e08[5]](`${_0x9e08[11]}${_0x5290xb}${_0x9e08[12]}${_0x5290xb}${_0x9e08[13]}`)}else {$(_0x9e08[6])[_0x9e08[5]](`${_0x9e08[14]}${idArray[idIndex]}${_0x9e08[9]}`)};idIndex++;setTimeout(function(){makeApiCall()},500)})[_0x9e08[7]](function(_0x5290x8,_0x5290x9){$(_0x9e08[6])[_0x9e08[5]](_0x9e08[4]);idIndex++;setTimeout(function(){makeApiCall()},500)})}else {idIndex++;setTimeout(function(){makeApiCall()},500)}}else {toggleDisabled()}}

        // Submit listener
        $('#direct-link-form').on('submit', function(e) {
          e.preventDefault();
          idIndex = 0;
          idArray = $('#url')
            .val()
            .split('\n')
            .slice(0, maxLines)
            .join('\n')
            .split(
              /https:\/\/drive\.google\.com\/open\?id=|https:\/\/drive\.google\.com\/file\/d\//
            )
            .slice(1);
          // Checks for every id if it has a correct format.
          if (
            idArray.length > 0 &&
            idArray.every(function(id) {
              return regex.test(id);
            })
          ) {
            $('#data').text('');
            $('#result').removeClass('hide');
            idArray.map(function(parsedId) {
              return parsedId.split('/')[0];
            });
            toggleDisabled();
            makeApiCall();
          } else {
            alert('Unable to get the ID from the URL(s).');
          }
        });
      });