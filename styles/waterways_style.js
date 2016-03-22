var size = 0;

var styleCache_waterways={}
var style_waterways = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(22,108,242,0.741176)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_waterways[key]){
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
        styleCache_waterways[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_waterways[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};