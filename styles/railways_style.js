var size = 0;

var styleCache_railways={}
var style_railways = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(166,206,227,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_railways[key]){
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
        styleCache_railways[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_railways[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};