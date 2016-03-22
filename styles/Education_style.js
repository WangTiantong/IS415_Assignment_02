var size = 0;

var styleCache_Education={}
var style_Education = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: "rgba(51,160,44,1.0)"})})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Education[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_Education[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Education[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};