var finderDecorations = {
  html: function(){
    return $('<div class="info"></div>')
      .append(this.distanceHtml())
      .append(this.nameHtml())
      .append(this.addressHtml())
      .append(this.detailHtml())
      .append(this.phoneHtml())
      .append(this.mapHtml())
      .append(this.directionsHtml());
  },
  distanceHtml: function(){
    var distance = this.get('distance');
    if (!(distance === undefined)){
      var div = $('<div class="distance"></div>');
      return div.html('&bull;<span> ' + (distance / 5280).toFixed(2) + ' mi </span>&bull;');
    }
  },
  nameHtml: function(){
    return $('<div class="name notranslate"></div>').html(this.getName());
  },
  addressHtml: function(){
    return $('<div class="address notranslate"></div>').html(this.getAddress());
  },
  phoneHtml: function(){
    var phone = this.get('Phone Number').replace(/x/, '').trim().split(' '), ext = phone[1];
    phone = phone[0];
    if (phone){
      var readable = ext ? ' ext. ' + ext : '';
      ext = ext ? ',' + ext : '';
      return $('<a class="phone" data-role="button"></a>')
        .html(phone + readable).attr('href', 'tel:' + phone + ext);
    }
  },
  mapHtml: function(){
    var a = $('<a class="map" data-role="button" onclick="nyc.finder.zoomTo(event);">Map</a>');
    return a.data('feature', this);
  },
  directionsHtml: function(){
    var a = $('<a class="directions" data-role="button" onclick="nyc.finder.directionsTo(event);">Directions</a>');
    return a.data('feature', this);
  },
  detailHtml: function(){
    return $('<div class="detail"></div>')
      .append('<b>Serving ZIP Codes: </b> ')
      .append(this.get('Service Area Zip Code'));
  },
  getAddress: function(){
    return this.get('Address');
  },
  getName: function(){
    return this.get('Provider').toUpperCase();
  }
};
